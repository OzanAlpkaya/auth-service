import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user profile' })
  @Get('me')
  @UseGuards(JwtAuthGuard)
  getMe(@Request() req: any) {
    return req.user;
  }
}
