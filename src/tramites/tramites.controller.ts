import { Controller, Get } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { TramitesService } from './tramites.service';
import { Tramite, TramiteGroup } from './types/tramites.types';
import { Public } from '../common/decorators';

@ApiTags('Trámites')
@Controller('tramites')
export class TramitesController {
  constructor(private tramitesService: TramitesService) {}

  @Public()
  @Get()
  @ApiOperation({
    summary: 'Obtener todos los trámites',
    description:
      'Obtiene la lista completa de todos los trámites universitarios disponibles',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de trámites obtenida exitosamente',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          title: {
            type: 'string',
            example: 'Solicitud de Certificado de Estudios',
          },
          description: {
            type: 'string',
            example:
              'Certificado que acredita los estudios realizados en la universidad',
          },
          link: {
            type: 'string',
            example: 'https://universidad.edu.co/tramites/certificado-estudios',
          },
          category: { type: 'string', example: 'Certificaciones' },
          created_at: { type: 'string', example: '2024-01-15T10:30:00Z' },
        },
      },
    },
  })
  @ApiResponse({
    status: 502,
    description: 'Error de comunicación con el microservicio de trámites',
  })
  @ApiResponse({
    status: 503,
    description: 'Microservicio de trámites no disponible',
  })
  async getAllTramites(): Promise<Tramite[]> {
    return this.tramitesService.getAllTramites();
  }

  @Public()
  @Get('grouped')
  @ApiOperation({
    summary: 'Obtener trámites agrupados por categoría',
    description:
      'Obtiene todos los trámites agrupados por categoría para facilitar la navegación y organización en el frontend',
  })
  @ApiResponse({
    status: 200,
    description: 'Trámites agrupados obtenidos exitosamente',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          category: { type: 'string', example: 'Certificaciones' },
          tramites: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'number', example: 1 },
                title: {
                  type: 'string',
                  example: 'Solicitud de Certificado de Estudios',
                },
                description: {
                  type: 'string',
                  example:
                    'Certificado que acredita los estudios realizados en la universidad',
                },
                link: {
                  type: 'string',
                  example:
                    'https://universidad.edu.co/tramites/certificado-estudios',
                },
                category: { type: 'string', example: 'Certificaciones' },
                created_at: { type: 'string', example: '2024-01-15T10:30:00Z' },
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 502,
    description: 'Error de comunicación con el microservicio de trámites',
  })
  @ApiResponse({
    status: 503,
    description: 'Microservicio de trámites no disponible',
  })
  async getGroupedTramites(): Promise<TramiteGroup[]> {
    return this.tramitesService.getGroupedTramites();
  }

  @Public()
  @Get('health')
  @ApiOperation({
    summary: 'Health check del microservicio de trámites',
    description: 'Verifica el estado de salud del microservicio de trámites',
  })
  @ApiResponse({
    status: 200,
    description: 'Estado del microservicio de trámites',
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'healthy' },
        service: { type: 'string', example: 'tramites-service' },
      },
    },
  })
  async healthCheck() {
    return this.tramitesService.healthCheck();
  }
}
