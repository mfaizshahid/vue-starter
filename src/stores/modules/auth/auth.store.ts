import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { IAuth } from ".";
import { AuthApis } from "@/stores/apis";
import { AppRoutes, IApp } from "@/interfaces";
import router from "@/router";

export const useAuthStore = defineStore("auth", () => {
  // ****** State ******
  const user = ref<IAuth.User | null>(null);
  const tokens = ref<IAuth.Tokens | null>(null);
  const rehydrateLoading = ref<boolean>(true);
  const appState = ref<IApp.AppStates>(IApp.AppStates.unauthenticated);
  const loginPayload = ref<IAuth.AuthFormPayload>({
    email: "",
    password: "",
    name: "",
  });

  // ****** Getters ******
  const getUser = () => computed(() => user.value);
  const getTokens = () => computed(() => tokens.value);
  const getRehydrateLoading = () => computed(() => rehydrateLoading.value);
  const getAppState = () => computed(() => appState.value);
  const getLoginPayload = () => computed(() => loginPayload.value);
  const getUserType = () =>
    computed(() =>
      user.value?.role_details.name === IApp.AppRoles.ADMIN
        ? IApp.AppRoles.ADMIN
        : IApp.AppRoles.USER
    );
  // ****** Mutations ******
  const setUser = (newUser: IAuth.User | null) => {
    user.value = newUser;
  };
  const setTokens = (newTokens: IAuth.Tokens | null) => {
    tokens.value = newTokens;
  };
  const setRehydrateLoading = (loading: boolean) => {
    rehydrateLoading.value = loading;
  };
  const setAppState = (newAppState: IApp.AppStates) => {
    appState.value = newAppState;
  };
  const setLoginPayload = (payload: IAuth.AuthFormPayload) => {
    loginPayload.value = payload;
  };
  // ****** Actions ******
  // Process the login response and set the user and tokens
  const processLogin = (authUserResponse: IAuth.AuthUserResponse) => {
    const { user, tokens } = authUserResponse;
    setUser(user); // Set the user
    setTokens(tokens); // Set the tokens
    saveTokensToStorage(tokens); // Save the tokens to storage
    rehydrateState(); // Rehydrate the state
    rehydrateNavigation(); // Rehydrate the navigation
  };
  // Save the tokens to storage
  const saveTokensToStorage = (tokens: IAuth.Tokens) => {
    localStorage.setItem("access_token", tokens.access_token);
    localStorage.setItem("refresh_token", tokens.refresh_token);
  };
  // Load the tokens from storage, if they exist
  const loadTokensFromStorage = () => {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");

    if (accessToken && refreshToken) {
      const tokens: IAuth.Tokens = {
        access_token: accessToken,
        refresh_token: refreshToken,
      };
      setTokens(tokens);
    }
  };
  // Rehydrate the state based on the roles and status of the user
  const rehydrateState = () => {
    const _user = user.value;
    if (!_user) setAppState(IApp.AppStates.unauthenticated);
    else if (_user.role_details.name === IApp.AppRoles.ADMIN)
      setAppState(IApp.AppStates.admin);
    else setAppState(IApp.AppStates.user);
  };
  // Navigate user based on the app state
  const rehydrateNavigation = async () => {
    // const router = useRouter()
    const state = appState.value;
    if (state === IApp.AppStates.unauthenticated) {
      // Navigate to the login page
      await router.push(AppRoutes.Auth.LOGIN);
    } else if (state === IApp.AppStates.user) {
      // Navigate to the user dashboard
      await router.push(AppRoutes.User.DASHBOARD);
    } else if (state === IApp.AppStates.admin) {
      // Navigate to the admin dashboard
      await router.push(AppRoutes.Admin.DASHBOARD);
    } else if (state === IApp.AppStates.rootError) {
      await router.push(AppRoutes.Auth.LOGIN);
    }
  };
  // Initialize the user
  const initUser = async () => {
    try {
      setRehydrateLoading(true);
      const response = await AuthApis.fetchMe();
      setUser(response.user);
      rehydrateState();
      rehydrateNavigation();
      setRehydrateLoading(false);
    } catch {
      logout();
    }
  };
  const logout = () => {
    localStorage.clear();
    setUser(null);
    setTokens(null);
    setAppState(IApp.AppStates.unauthenticated);
    setRehydrateLoading(false);
    rehydrateNavigation();
  };
  // Load tokens from storage on initialization
  loadTokensFromStorage();
  return {
    // ****** State ******
    user,
    tokens,
    rehydrateLoading,
    state: appState,
    loginPayload,
    // ****** Getters ******
    getUser,
    getTokens,
    getRehydrateLoading,
    getAppState,
    getLoginPayload,
    getUserType,
    // ****** Mutations ******
    setUser,
    setTokens,
    setRehydrateLoading,
    setAppState,
    setLoginPayload,
    // ****** Actions ******
    processLogin,
    initUser,
    rehydrateNavigation,
    saveTokensToStorage,
    logout,
  };
});
