import { HttpClient } from './http.client';
import { IMessage } from '@novu/shared';

export class ApiService {
  private httpClient: HttpClient;

  isAuthenticated = false;

  constructor(private backendUrl: string) {
    this.httpClient = new HttpClient(backendUrl);
  }

  setAuthorizationToken(token: string) {
    this.httpClient.setAuthorizationToken(token);

    this.isAuthenticated = true;
  }

  async markMessageAsSeen(messageId: string): Promise<any> {
    return await this.httpClient.post(`/widgets/messages/${messageId}/seen`, {});
  }

  async getNotificationsList(page: number): Promise<IMessage[]> {
    return await this.httpClient.get(`/widgets/notifications/feed?page=${page}`);
  }

  async initializeSession(appId: string, userId: string) {
    return await this.httpClient.post(`/widgets/session/initialize`, {
      applicationIdentifier: appId,
      $user_id: userId,
    });
  }

  async postUsageLog(name: string, payload: { [key: string]: string | boolean | undefined }) {
    return await this.httpClient.post('/widgets/usage/log', {
      name: `[Widget] - ${name}`,
      payload,
    });
  }

  async getUnseenCount() {
    return await this.httpClient.get('/widgets/notifications/unseen');
  }

  async getOrganization() {
    return this.httpClient.get('/widgets/organization');
  }
}
