'use strict';/*! main.js @ 2017, yamoo9.net */(function(global){'use strict';// 사용자 정의 키코드 등록
Vue.config.keyCodes={f1:112,f2:113};// Firebase DB 통신 주소
var firebase_db='https://vue-planlist.firebaseio.com/planlist.json';new Vue({el:'.project-team',created:function created(){// Ajax 통신을 통해 Sever(Firebase)로부터 데이터를 GET 한 후,
// Vue 인스턴스 데이터에 GET 한 콘텐츠를 할당(Assign)
this.getFirebasePlanData()},data:{team:{name:'FDS 4\uAE30 \uD504\uB85C\uC81D\uD2B8 \uBA85\uB2E8',group:[['\uAC15\uC18C\uC5F0','\uC804\uD604\uC6B0'],['\uC190\uD604','\uAC15\uB2E4\uC778','\uC774\uC18C\uC815'],['\uAE40\uB2E4\uC19C','\uAE40\uC138\uB86C','\uC9C0\uC815\uBBFC'],['\uC774\uB300\uD638','\uAE40\uC815\uC6B1'],['\uC774\uBC94\uB450','\uC774\uB3D9\uC6B0','\uC774\uCC3D\uD638'],['\uCC28\uD61C\uC9C4','\uAE40\uC9C0\uC218','\uC774\uC9C4\uC544'],['\uC784\uAE30\uC644','\uC774\uC0C1\uC6D0'],['\uD55C\uC131\uC6B1','\uAE40\uD0DC\uD6C8','\uACE0\uC138\uBBFC'],['\uD5C8\uC6B0\uCC3D','\uC815\uBBF8\uC8FC','\uAE30\uBBF8\uC1A1']]},is_transfer:false,plan_it:'',plan:[]},methods:{getFirebasePlanData:function getFirebasePlanData(){var _this2=this;$.get(firebase_db).then(function(data){console.log(data);console.log(Object.values(data));_this2.plan=Object.values(data)})},excludeMember:function excludeMember(i,n){this.team.group[i].splice(n,1)},updatePlanIt:function updatePlanIt(e){this.plan_it=e.target.value},addPlanIt:function addPlanIt(){var _this3=this;var _this=this;var new_plan_it={it:_this.plan_it,done:false};// _this.plan.push(new_plan_it);
this.is_transfer=true;this.new_plan_it='';// Firebase DB 통신으로 새로운 플랜 추가하기
$.post(firebase_db,JSON.stringify(new_plan_it)).then(function(data){// POST 통신이 성공하게 되면,
// 다시 GET 통신
_this3.getFirebasePlanData();_this3.is_transfer=false})}}})})(window);
//# sourceMappingURL=vue.todo.js.map