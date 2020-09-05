# JavaScript_Slider_with_Indicator

# Slider
자바스크립드가 활용되는 가장 기초적인 기능의 구현을 해보았다. 그중에서 indicator를 조금 생소하게 해보았다. js의 DOM을 이용하여 구현해본것이 조금은 공부한 내용의 자리 잡음에 도움이 많이 되었던 프로젝트 같다.

![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/67617819/91798187-4ca2b000-ec5f-11ea-8d70-058f3cd93533.gif)

이번에 구현한 슬라이더의 경우에는 이미지의 정렬 후에 뷰의 이동을 통해 이미지가 이어지는 것 이 아닌 class의 속성 값에  `active` 를 추가해주는 기능을 통해 슬라이더가 이루어 지게 했다. 

indicator의 경우에도 조금은 색다르게 구현해 보았다.

기능의 구현의 단계는 

1. dom의 .children을 이용하여 classlist를 받아와서 dom배열로 받아준다.

2. 화살표를 통해서 슬라이더가 움직일 수 있도록 화살표 click event를 작성해 준다. 

3. indicator가 해당 index에 맞게 같이 변경 될 수 있도록 해준다.

4. 슬리이더가 시간이 지남에 따라 알아서 변경되도록 timer function을 작성해 준다.

