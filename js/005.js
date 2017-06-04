/**
 * Created by ���� on 2017/4/8.
 */
/**
 * @description javascript for
 * @author TuzK1ss
 * @date 15/10/22.
 */


/**
 * 10years about module team member data
 *
 * @type {Array}
 */
var tyTeamMember = [];

//tyTeamMember.push({
//    avatar : '',
//    name : '',
//    desc : '',
//    dream : ''
//});

tyTeamMember.push({ id : 0, avatar : '/static/images/common/member/dx.jpg', name : '笪兴', desc : 'CEO', dream : '想成为改变世界的�?' });
tyTeamMember.push({ id : 1, avatar : '/static/images/common/member/cxd.jpg', name : '啜雪�?', desc : 'COO', dream : '想成为电影导�?' });
tyTeamMember.push({ id : 2, avatar : '/static/images/common/member/cxw.jpg', name : '常晓�?', desc : 'CDO', dream : '想成为宠物店老板' });
tyTeamMember.push({ id : 3, avatar : '/static/images/common/member/wqz.jpg', name : '王其�?', desc : '后端工程�?', dream : '想成为大�?' });
tyTeamMember.push({ id : 4, avatar : '/static/images/common/member/zlt.jpg', name : '张立�?', desc : 'Android砖家', dream : '想成为Android专家' });
tyTeamMember.push({ id : 5, avatar : '/static/images/common/member/pa.jpg', name : '彭傲', desc : 'Android砖家', dream : '想成为airfly的B-boy' });
tyTeamMember.push({ id : 6, avatar : '/static/images/common/member/zjx.jpg', name : '周金�?', desc : 'PM', dream : '想成为社会企业家' });
tyTeamMember.push({ id : 7, avatar : '/static/images/common/member/lgz.jpg', name : '刘广�?', desc : '运营经理', dream : '想成为酒馆��板' });
tyTeamMember.push({ id : 8, avatar : '/static/images/common/member/wyq.jpg', name : '王雅�?', desc : '媒介推广经理', dream : '想成为蚌丢�样的女子' });
tyTeamMember.push({ id : 9, avatar : '/static/images/common/member/dyz.jpg', name : '戴一�?', desc : '新媒体运营经�?', dream : '想不断遇见新奇的�?' });
tyTeamMember.push({ id : 11, avatar : '/static/images/common/member/djq.jpg', name : '丁建�?', desc : 'Front-End Developer', dream : '想成为环球旅行��?' });
tyTeamMember.push({ id : 12, avatar : '/static/images/common/member/gj.jpg', name : '高军', desc : '资深设计�?', dream : '想成为餐厅��板' });
tyTeamMember.push({ id : 13, avatar : '/static/images/common/member/xl.jpg', name : '陈夏�?', desc : '新媒体运营经�?', dream : '想成为良心编�?' });
tyTeamMember.push({ id : 15, avatar : '/static/images/common/member/xxy.jpg', name : '徐晓�?', desc : '乱点抢�能树的吃土少�?', dream : '想成为水草��景大师' });
tyTeamMember.push({ id : 16, avatar : '/static/images/common/member/wxl.jpg', name : '王栩�?', desc : '大四学生', dream : '想成为动画编�?' });
tyTeamMember.push({ id : 17, avatar : '/static/images/common/member/xy.jpg', name : '柳馨�?', desc : '运营实习�?', dream : '想成为书店��板�?' });


/**
 * 10years team member sorted by random
 *
 * @Array tySortedTeamMember
 * @returns {tySortedTeamMember}
 */
var tySortedTeamMember = (function (arr){

    /**
     * quickSort
     *
     * @method quickSort
     * @returns quickSorted Arr
     */
    var quickSort = function (objectArray) {
        var left = [],
            right = [],
            val = objectArray[0],
            len = objectArray.length;

        if (len <= 1) {
            return objectArray;
        }

        for (var i = 1; i < len; i ++) {
            if (objectArray[i].index < val.index) {
                left.push(objectArray[i]);
            } else {
                right.push(objectArray[i]);
            }
        }
        return quickSort(left).concat(val, quickSort(right));
    };

    /**
     *  add a random value key "index" for every data in array
     */
    for (i = 0, len = arr.length; i < len; i ++) {
        arr[i]["index"] = Math.random() * len;
    }


    /**
     * return the quick sorted array
     */
    return quickSort(arr);

})(tyTeamMember);