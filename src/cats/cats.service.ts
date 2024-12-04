import { Injectable } from '@nestjs/common'; // CatsController에서 사용할 Service이며, 데이터의 조회, 저장, 수정, 삭제를 처리
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [] // Cat에서 ctrl + . 누르면 저절로 import가 됨

    create(cat: Cat){
        this.cats.push(cat);
    }
    
    findAll(): Cat[] {
        return this.cats;
    }
}

// Provider는 services, repositories, factories, helpers 등이 있다.
// provider는 종속성에 의해 Inject(주입)할 수 있다.
// 즉, provider 객체의 생성 및 연결은 nest runtime 시스템에 위임될 수 있다.
// 컨트롤러는 HTTP 요청을 처리하고 복잡한 작업은 Provider에게 위임을 한다.
// provider는 module에서 선언하는 일반 javascript class이다.
