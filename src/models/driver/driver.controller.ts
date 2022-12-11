import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post('/add-driver')
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.create(createDriverDto);
  }

  @Get('/all-drivers')
  findAll() {
    return this.driverService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.driverService.findOne(+id);
  }

  @Patch('/update-driver/:id')
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.update(+id, updateDriverDto);
  }

  @Delete('/delete-driver/:id')
  remove(@Param('id') id: string) {
    return this.driverService.remove(+id);
  }
}
