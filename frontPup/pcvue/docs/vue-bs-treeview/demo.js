define([
    'require',
    'vue',
    'vueAlert',
    'vueBsTreeview'
], function (require, Vue, alert) {
    'use strict';
    //普通弹出框    
    var treeVm = new Vue({
        el: "#tree",
        data: {
            dept: {},
            treedata: [{
                "ledgerId": "37b0a6f5-8d69-466c-99d2-14bcd25b20da",
                "ledgerName": "文件",
                "ledgerPid": "776f67c3-a0db-4db5-8657-38ebbf9170f6",
                "ledgerLevel": "2",
                "ledgerType": "1",
                "ledgerKeyword": null,
                "ledgerState": "1",
                "isDel": "0",
                "orderNo": "1",
                "createDate": "2018-07-23 16:34:23",
                "expand": "false",
                "operate": "true",
                "userId": "HUANGYAN",
                "deptId": "1143492092887040",
                "subObj": [{
                    "ledgerId": "fb0dc9cb-0774-45a4-8db2-d086d585c560",
                    "ledgerName": "平安创建、综合治理、信访维稳工作有关文件",
                    "ledgerPid": "37b0a6f5-8d69-466c-99d2-14bcd25b20da",
                    "ledgerLevel": "3",
                    "ledgerType": "1",
                    "ledgerKeyword": null,
                    "ledgerState": "1",
                    "isDel": "0",
                    "orderNo": "1",
                    "createDate": "2018-07-23 16:34:23",
                    "expand": "false",
                    "operate": "true",
                    "userId": "HUANGYAN",
                    "deptId": "1143492092887040",
                    "subObj": [],
                    "icon": "glyphicon-book"
                }, {
                    "ledgerId": "cc5005cf-279b-4e35-9f7a-7ccb61afec14",
                    "ledgerName": "目标管理责任书",
                    "ledgerPid": "37b0a6f5-8d69-466c-99d2-14bcd25b20da",
                    "ledgerLevel": "3",
                    "ledgerType": "1",
                    "ledgerKeyword": null,
                    "ledgerState": "1",
                    "isDel": "0",
                    "orderNo": "2",
                    "createDate": "2018-07-23 16:34:23",
                    "expand": "false",
                    "operate": "true",
                    "userId": "HUANGYAN",
                    "deptId": "1143492092887040",
                    "subObj": [],
                    "icon": "glyphicon-book"
                }],
                "icon": "glyphicon-folder-open"
            }, {
                "ledgerId": "bf757eac-9c32-44b9-8865-b2028fe912ce",
                "ledgerName": "其它",
                "ledgerPid": "776f67c3-a0db-4db5-8657-38ebbf9170f6",
                "ledgerLevel": "2",
                "ledgerType": "1",
                "ledgerKeyword": null,
                "ledgerState": "1",
                "isDel": "0",
                "orderNo": "2",
                "createDate": "2018-07-23 16:34:23",
                "expand": "false",
                "operate": "true",
                "userId": "HUANGYAN",
                "deptId": "1143492092887040",
                "subObj": [{
                    "ledgerId": "2a0271fd-79bb-460a-8f6e-44dd943764c2",
                    "ledgerName": "平安创建、综合治理、信访维稳工作专项活动",
                    "ledgerPid": "bf757eac-9c32-44b9-8865-b2028fe912ce",
                    "ledgerLevel": "3",
                    "ledgerType": "1",
                    "ledgerKeyword": null,
                    "ledgerState": "1",
                    "isDel": "0",
                    "orderNo": "1",
                    "createDate": "2018-07-23 16:34:23",
                    "expand": "false",
                    "operate": "true",
                    "userId": "HUANGYAN",
                    "deptId": "1143492092887040",
                    "subObj": [],
                    "icon": "glyphicon-book"
                }, {
                    "ledgerId": "21e3687b-539a-44bd-8bf3-45aa17e7dac3",
                    "ledgerName": "“网格化管理、组团式服务”活动",
                    "ledgerPid": "bf757eac-9c32-44b9-8865-b2028fe912ce",
                    "ledgerLevel": "3",
                    "ledgerType": "1",
                    "ledgerKeyword": null,
                    "ledgerState": "1",
                    "isDel": "0",
                    "orderNo": "2",
                    "createDate": "2018-07-23 16:34:23",
                    "expand": "false",
                    "operate": "true",
                    "userId": "HUANGYAN",
                    "deptId": "1143492092887040",
                    "subObj": [],
                    "icon": "glyphicon-book"
                }, {
                    "ledgerId": "46b2e629-0e51-4869-a418-022dcc72d7a0",
                    "ledgerName": "平安综治宣传活动",
                    "ledgerPid": "bf757eac-9c32-44b9-8865-b2028fe912ce",
                    "ledgerLevel": "3",
                    "ledgerType": "1",
                    "ledgerKeyword": null,
                    "ledgerState": "1",
                    "isDel": "0",
                    "orderNo": "3",
                    "createDate": "2018-07-23 16:34:23",
                    "expand": "false",
                    "operate": "true",
                    "userId": "HUANGYAN",
                    "deptId": "1143492092887040",
                    "subObj": [],
                    "icon": "glyphicon-book"
                }, {
                    "ledgerId": "58080a18-7c79-47e2-8e06-024ae8ed9ef8",
                    "ledgerName": "其他活动",
                    "ledgerPid": "bf757eac-9c32-44b9-8865-b2028fe912ce",
                    "ledgerLevel": "3",
                    "ledgerType": "1",
                    "ledgerKeyword": null,
                    "ledgerState": "1",
                    "isDel": "0",
                    "orderNo": "4",
                    "createDate": "2018-07-23 16:34:23",
                    "expand": "false",
                    "operate": "true",
                    "userId": "HUANGYAN",
                    "deptId": "1143492092887040",
                    "subObj": [],
                    "icon": "glyphicon-book"
                }],
                "icon": "glyphicon-folder-open"
            }, {
                "ledgerId": "6a795456-449b-4b2b-880f-928746fbeee8",
                "ledgerName": "会议",
                "ledgerPid": "776f67c3-a0db-4db5-8657-38ebbf9170f6",
                "ledgerLevel": "2",
                "ledgerType": "1",
                "ledgerKeyword": null,
                "ledgerState": "1",
                "isDel": "0",
                "orderNo": "3",
                "createDate": "2018-07-23 16:34:23",
                "expand": "false",
                "operate": "true",
                "userId": "HUANGYAN",
                "deptId": "1143492092887040",
                "subObj": [{
                    "ledgerId": "c070991a-51eb-45c5-955e-1bd9871add7f",
                    "ledgerName": "年度例会",
                    "ledgerPid": "6a795456-449b-4b2b-880f-928746fbeee8",
                    "ledgerLevel": "3",
                    "ledgerType": "1",
                    "ledgerKeyword": null,
                    "ledgerState": "1",
                    "isDel": "0",
                    "orderNo": "1",
                    "createDate": "2018-07-23 16:34:23",
                    "expand": "false",
                    "operate": "true",
                    "userId": "HUANGYAN",
                    "deptId": "1143492092887040",
                    "subObj": [],
                    "icon": "glyphicon-book"
                }],
                "icon": "glyphicon-folder-open"
            }],
            nodeComponent: '<span :title="item.ledgerName">{{item.ledgerName}}</span>',
            nodesPath: 'subObj',
        },
        mounted: function () {
           
        },
        methods: {
            selectTree: function (node) {
                console.log(node)
            },
            getV:function(v){
                console.log(v)
            }
        }
    })
});