import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Tramite, TramiteGroup } from './types/tramites.types';

@Injectable()
export class TramitesService {
  constructor(private configService: ConfigService) {}

  async getAllTramites(): Promise<Tramite[]> {
    const tramitesServiceUrl =
      this.configService.get<string>('tramitesService.url') ??
      'http://localhost:3050';

    try {
      const response = await fetch(`${tramitesServiceUrl}/tramites`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new HttpException(
          `Tramites service responded with status: ${response.status}`,
          HttpStatus.BAD_GATEWAY,
        );
      }

      const tramites: Tramite[] = await response.json();
      return tramites;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch tramites from service',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  async getGroupedTramites(): Promise<TramiteGroup[]> {
    const tramitesServiceUrl =
      this.configService.get<string>('tramitesService.url') ??
      'http://localhost:3050';

    try {
      const response = await fetch(`${tramitesServiceUrl}/tramites/grouped`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new HttpException(
          `Tramites service responded with status: ${response.status}`,
          HttpStatus.BAD_GATEWAY,
        );
      }

      const groupedTramites: TramiteGroup[] = await response.json();
      return groupedTramites;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch grouped tramites from service',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  async healthCheck(): Promise<{ status: string; service: string }> {
    const tramitesServiceUrl =
      this.configService.get<string>('tramitesService.url') ??
      'http://localhost:3050';

    try {
      const response = await fetch(`${tramitesServiceUrl}/tramites`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return {
          status: 'healthy',
          service: 'tramites-service',
        };
      } else {
        return {
          status: 'unhealthy',
          service: 'tramites-service',
        };
      }
    } catch (error) {
      return {
        status: 'unreachable',
        service: 'tramites-service',
      };
    }
  }
}
