# C-Monster-World-Web-Game
C Monster World Web Version (2013). Very Not Funny

### Repository Overview
2013년 2학기. 가톨릭대학교 웹 프로그래밍 JS Canvas Game 프로젝트 C-Moster World.
* Language : JavaScript, HTML
* DateTime : 2013. 12 즈음?
* Excute : index.html을 실행한다.
* Gossip : 프로젝트 발표날 교수님한테 __재미 없다__고 까였다 ㅜㅜ. 내가 해봐도 재미는 없는 것 같다.

### Game Overview
![C Monster World Web Ver Screenshot01](https://github.com/uyu423/C-Monster-World-Web-Game/blob/master/screenshot01.png)
![C Monster World Web Ver Screenshot02](https://github.com/uyu423/C-Monster-World-Web-Game/blob/master/screenshot02.png)
![C Monster World Web Ver Screenshot03](https://github.com/uyu423/C-Monster-World-Web-Game/blob/master/screenshot03.png)
![C Monster World Web Ver Screenshot04](https://github.com/uyu423/C-Monster-World-Web-Game/blob/master/screenshot04.png)
* 모티브로 한 게임은 [Palmple Inc.](http://www.palmple.com/)의 __[데빌메이커: 도쿄](http://www.palmple.com/devilmaker/intro)__ 게임이다.
* 사전에 만들어본 __[C-Monster World Console Version](https://github.com/uyu423/C-Monster-World-Console-Game)__에 비해 변화가 꽤 있다.
* 기본 기능는 __진행 방향 선택__, __캐릭터 스탯 투자__ 정도.
* __진행 방향 선택__을 택하면 __여러 이벤트가 확률적__으로 나타난다. (몬스터 출현, 함정 출현, 경험치 발견, 체력 회복)
* 전투 시스템으로 __가위바위보__를 채택했다.
* 몬스터를 잡으면 경험치가 상승하며, __레벨 업을 할 경우 스탯에 투자__할 수 있다.
* 몬스터와의 전투에서 승리 후 당연히 __다음 몬스터는 더 강해진다.__
* 몬스터는 뭘 좋아할지 몰라서 __강.중.약 총 3마리__로 준비해봤다. 방향에 따라 다른 난이도의 몬스터가 출현한다.
* 강.중.약의 몬스터지만 진행방법에 따라 __약한 몬스터가 강한 몬스터보다 더 강해질 수도 있다.__(;;)
* 난이도가 높은 방향일 수록 __한번의 이동거리가 길며, 높은 %의 체력 회복이 나타난다.__
* 함정을 만났을 때 가위바위보를 __이기지 못하면 데미지__를 입으며, __이겼을 경우 다음 함정 데미지가 강해진다.__
* __전략적 진행으로 진행한 거리로 경쟁__하는 게임 제작이 목표였다.
* 그리고 당연히 위에서 언급한 __랭킹 시스템은 없다.__ 하지만 LocalStorage나 Cookie. 더 크게 봤을때 Server를 사용하면 구현하고 남는다.
* __브금(BGM)이 꽤나 흥겹다.__

### Productor Overview
*	JavaScriptProgrammer : [YoWu](mailto:uyu423@gamil.com) ([Blog](http://luckyyowu.tistory.com))
* GraphicManager : 고급좌석 ([Blog](http://hjh1662.tistory.com/))
* ProjectManager : 고급좌석 ([Blog](http://hjh1662.tistory.com/))
*	Organiz.	: [Catholic Univ. of Korea](http://catholic.ac.kr)
*	Develop OS	: Microsoft Windows System
*	PorgramLang	: JavaScript, HTML5
*	UsingTools	: Visual Studio 2013, Photoshop CS4, Notepad++
