export interface Integration {
  name: string;
  displayName: string;
  description: string;
  logo: string;
  provider: string;
  categories: string[];
  authType: "oauth2" | "api_key" | "no_auth";
  functions: string[];
  active: boolean;
  popular?: boolean;
}

export interface IntegrationCategory {
  name: string;
  count: number;
  integrations: Integration[];
}