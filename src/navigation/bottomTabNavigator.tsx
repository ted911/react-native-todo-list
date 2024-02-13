import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EventScreen from 'screens/tabScreens/EventScreen';
import {BottomTabParamList} from './_types';
import BenefitScreen from 'screens/tabScreens/BenefitScreen';
import MyPageScreen from 'screens/tabScreens/MyPageScreen';
import WebViewScreen from 'screens/WebViewScreen';
import TopTabNavigator from './topTabNavigator';

/*
 * tab이 있는 페이지: home, event, feed, benefit, mypage
 * tab이 없는 페이지: 로그인, 이용약관, 마감임박이벤트, 이벤트 상세, 인기브랜드/경품,
 *  월간 이벤트, 팀스토리 탭, 팀스토리 상세, 관심브랜드/경품, 검색, 알림 이벤트 글쓰기,
 * */
const Tab = createBottomTabNavigator<BottomTabParamList>();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Event"
        options={{title: '이벤트'}}
        component={EventScreen}
      />
      <Tab.Screen
        name="Feed"
        options={{title: '피드'}}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="Home"
        options={{title: '이벤트유 홈'}}
        component={WebViewScreen}
      />
      <Tab.Screen
        name="Benefit"
        options={{title: '혜택'}}
        component={BenefitScreen}
      />
      <Tab.Screen
        name="MyPage"
        options={{title: '마이'}}
        component={MyPageScreen}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
