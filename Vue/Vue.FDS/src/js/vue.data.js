/*! main.js @ 2017, yamoo9.net */
((global) => {
    'use strict';

    // Team 1: 강소연, 전현우
    // Team 2: 손현, 강다인, 이소정
    // Team 3: 김다솜, 김세롬, 지정민
    // Team 4: 이대호, 김정욱
    // Team 5: 이범두, 이동우, 이창호
    // Team 6: 차혜진, 김지수, 이진아
    // Team 7: 임기완, 이상원
    // Team 8: 한성욱, 김태훈, 고세민
    // Team 9: 허우창, 정미주, 기미송

    Vue.config.keyCodes = {
        f1: 112,
        f2: 113
    };

    new Vue({
        el: '.project-team',
        data: {
            team: {
                name: 'FDS 4기 프로젝트 팀',
                group: [
                    ['강소연', '전현우'],
                    ['손현', '강다인', '이소정'],
                    ['김다솜', '김세롬', '지정민'],
                    ['이대호', '김정욱'],
                    ['이범두', '이동우', '이창호'],
                    ['차혜진', '김지수', '이진아'],
                    ['임기완', '이상원'],
                    ['한성욱', '김태훈', '고세민'],
                    ['허우창', '정미주', '기미송']
                ]
            }
        },
        methods: {
            excludeMember(i, n, e) {
                this.team.group[i].splice(n, 1);
                console.log(e);
            }
        }
    });

})(window);