import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { CreateCatDto } from './CreateCatDto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';
// @Controller() 데오레이터 사용, 마지막에 사용된 () 안에는 다음과 같이 요청 라우팅 path 지정 가능

@Controller('cats') // 이때 정의된 cat는 하위 메소드들의 접두어 역할을 하므로 반복 작성 필요 X
export class CatsController {
    constructor(private catsService: CatsService){}; // CatsService는 constructor를 통해 주입됨. private를 사용하면 선언과 초기화가 동시에 이루어짐

    // @Get() // @Get() 데코레이터는 Controller의 라우팅 패스를 상속 받기 때문에, Client에서는 다음과 같이 요청 가능
    // findAll(@Req() request: Request): string { // @Get() 데코레이션 아래 선언된 Method의 이름은 어떤 의미도 부여하지 않음, 코드를 해석하기 쉬운 형태로 작성해주면 좋음 Method: findAll() | type: : string 
    //     console.log(request) // nestjs는 Express를 사용하기 때문에 Request객체 사용 가능, 핸들러 parameter에 @Req()데코레이터 사용하면 됨
    //     return 'This action returns all cats';
    // }

    @Get()
    findALL(): Cat[] {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id: string): string {
        return `This action returns a #${id} cat`; // 백텍 사용
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto){
        return this.catsService.create(createCatDto);
    } 

    @Put(':id')
    update(@Param('id')id: string, @Body() createCatDto: CreateCatDto){
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id')id:string){
        return `This action removes a #${id} cat`;
    }
}

