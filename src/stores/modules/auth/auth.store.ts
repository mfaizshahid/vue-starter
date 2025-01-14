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
  const rehydrateLoading = ref<boolean>(false);
  const appState = ref<IAuth.AppStates>(IAuth.AppStates.unauthenticated);
  const loginPayload = ref<IAuth.AuthFormPayload>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  // ****** Getters ******
  const getUser = () => computed(() => user.value);
  const getTokens = () => computed(() => tokens.value);
  const getRehydrateLoading = () => computed(() => rehydrateLoading.value);
  const getAppState = () => computed(() => appState.value);
  const getLoginPayload = () => computed(() => loginPayload.value);
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
  const setAppState = (newAppState: IAuth.AppStates) => {
    appState.value = newAppState;
  };
  const setLoginPayload = (payload: IAuth.AuthFormPayload) => {
    loginPayload.value = payload;
  };
  // ****** Actions ******
  // Process the login response and set the user and tokens
  const processLogin = (authUserResponse: IAuth.AuthUserResponse) => {
    const { user, ...tokens } = authUserResponse;
    setUser(user); // Set the user
    setTokens(tokens); // Set the tokens
    saveTokensToStorage(tokens); // Save the tokens to storage
    rehydrateState(); // Rehydrate the state
    rehydrateNavigation(); // Rehydrate the navigation
  };
  // Save the tokens to storage
  const saveTokensToStorage = (tokens: IAuth.Tokens) => {
    localStorage.setItem("accessToken", tokens.token);
    localStorage.setItem("refreshToken", tokens.refreshToken);
    localStorage.setItem("expiresIn", tokens.tokenExpires.toString());
  };
  // Load the tokens from storage, if they exist
  const loadTokensFromStorage = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const expiresIn = localStorage.getItem("expiresIn");

    if (accessToken && refreshToken && expiresIn) {
      const tokens: IAuth.Tokens = {
        token: accessToken,
        refreshToken: refreshToken,
        tokenExpires: parseInt(expiresIn),
      };
      setTokens(tokens);
    }
  };
  // Rehydrate the state based on the roles and status of the user
  const rehydrateState = () => {
    const _user = user.value;
    if (!_user) setAppState(IAuth.AppStates.unauthenticated);
    else if (_user.role.id === IApp.RoleEnum.admin)
      setAppState(IAuth.AppStates.admin);
    else if (
      _user.role.id === IApp.RoleEnum.user &&
      _user.status.id === IApp.StatusEnum.inactive
    )
      setAppState(IAuth.AppStates.emailVerificationPending);
    else if (
      _user.role.id === IApp.RoleEnum.user &&
      _user.status.id === IApp.StatusEnum.active
    )
      setAppState(IAuth.AppStates.user);
    else setAppState(IAuth.AppStates.unauthenticated);
  };
  // Navigate user based on the app state
  const rehydrateNavigation = () => {
    // const router = useRouter()
    const state = appState.value;

    if (state === IAuth.AppStates.unauthenticated) {
      // Navigate to the login page
      router.push(AppRoutes.Auth.LOGIN);
    } else if (state === IAuth.AppStates.emailVerificationPending) {
      // Navigate to the email verification page
      router.push(AppRoutes.Auth.EMAIL_VERIFICATION);
    } else if (state === IAuth.AppStates.emailVerificationComplete) {
      // Navigate to the user dashboard
    } else if (state === IAuth.AppStates.user) {
      // Navigate to the user dashboard
      router.push(AppRoutes.User.DASHBOARD);
    } else if (state === IAuth.AppStates.admin) {
      // Navigate to the admin dashboard
    } else if (state === IAuth.AppStates.rootError) {
      router.push(AppRoutes.Auth.LOGIN);
    }
  };
  // Initialize the user
  const initUser = async () => {
    try {
      const response = await AuthApis.fetchMe<IAuth.User>();
      setUser(response.data);
      rehydrateState();
      // rehydrateNavigation();
    } catch {
      logout();
    }
  };
  const logout = () => {
    localStorage.clear();
    setUser(null);
    setTokens(null);
    setAppState(IAuth.AppStates.unauthenticated);
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
