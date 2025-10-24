export interface SignupData {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token?: string;
}

class AuthAPI {
  private baseURL = process.env.NEXT_PUBLIC_API_URL;

  private async fetchWithErrorHandling(url: string, options: RequestInit) {
    const response = await fetch(url, options);

    if (!response.ok) {
      let errorMessage = 'Request failed';
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        errorMessage = `HTTP error! status: ${response.status}`;
      }
      throw new Error(errorMessage);
    }

    return response.json();
  }

  async signup(userData: SignupData): Promise<AuthResponse> {
    return this.fetchWithErrorHandling(`${this.baseURL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  }

  async login(loginData: LoginData): Promise<AuthResponse> {
    return this.fetchWithErrorHandling(`${this.baseURL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
      credentials: 'include',
    });
  }

  getGoogleAuthURL(): string {
    return `${this.baseURL}/eyrie/api/v1/auth/google`;
  }
}

export const authAPI = new AuthAPI();
