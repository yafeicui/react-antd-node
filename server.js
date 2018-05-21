let express = require('express');
let server = express();
// 获取post数据
let bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
//代理页面
server.use(express.static('./www'));
// 登陆接口
server.get('/api/table1', (req, res) => {//监听请求
  res.send({
    code: 9000,
    message: '成功',
    data: [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    }, {
      key: '3',
      name: '李大嘴',
      age: 32,
      address: '西湖区湖底公园1号',
    }]
  })
})
server.get('/api/table2', (req, res) => {//监听请求
  res.send({
    code: 9000,
    message: '成功',
    data: [{
      key: '1',
      name: '章三',
      age: 43,
      address: '上海市浦东新区',
    }, {
      key: '2',
      name: '李四',
      age: 22,
      address: '上海市杨浦区',
    }, {
      key: '3',
      name: '王二',
      age: 21,
      address: '南京市玄武区',
    }]
  })
})

server.get('/api/table3', (req, res) => {//监听请求
  res.send({
    code: 9000,
    message: '成功',
    data: [
      { key: 1, name: '胡彦斌', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。' },
      { key: 2, name: '吴彦祖', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。' },
      { key: 3, name: '李大嘴', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。' },
    ]
  })
})

// 我的任务
// 代办
server.get('/api/flowService/queryWaitDoList', (req, res) => {
  const tableData = [{ "limitApplyId": "996938091480526849", "channelCd": "WEB", "limitAmt": "300000.00", "flowKey": "approvalTranche", "customerName": "赵一", "productName": "综合授信", "applyUserId": "jingjing.wang", "flowInstId": "15063", "limitNature": "2", "customerId": "100000065653", "startTime": "2018-05-17", "taskId": "15069", "productCd": "'", "phaseName": "发起授信申请" }, { "limitApplyId": "996570593744777217", "channelCd": "WEB", "limitAmt": "", "flowKey": "approvalTranche", "customerName": "king30", "productName": "综合授信", "applyUserId": "jingjing.wang", "flowInstId": "14996", "limitNature": "1", "customerId": "100000043525", "startTime": "2018-05-16", "taskId": "15002", "productCd": "'", "phaseName": "发起授信申请" }, { "limitApplyId": "996570276307267585", "channelCd": "WEB", "limitAmt": "", "flowKey": "approvalTranche", "customerName": "king33", "productName": "综合授信", "applyUserId": "jingjing.wang", "flowInstId": "14989", "limitNature": "1", "customerId": "100000043650", "startTime": "2018-05-16", "taskId": "14995", "productCd": "'", "phaseName": "发起授信申请" }, { "limitApplyId": "994132105275396098", "channelCd": "WEB", "limitAmt": "", "flowKey": "approvalTranche", "customerName": "金鸣汐", "productName": "消费贷非循环", "applyUserId": "jingjing.wang", "flowInstId": "11186", "limitNature": "4", "customerId": "100000064413", "startTime": "2018-05-09", "taskId": "11192", "productCd": "CP2008160002", "phaseName": "发起授信申请" }, { "limitApplyId": "994131392369545217", "channelCd": "WEB", "limitAmt": "", "flowKey": "approvalTranche", "customerName": "弘蓝羽", "productName": "消费贷非循环", "applyUserId": "jingjing.wang", "flowInstId": "11179", "limitNature": "4", "customerId": "100000064850", "startTime": "2018-05-09", "taskId": "11185", "productCd": "CP2008160002", "phaseName": "发起授信申请" }, { "limitApplyId": "993312651029262338", "channelCd": "WEB", "limitAmt": "10000000.00", "flowKey": "approvalTranche", "customerName": "蔡叶花", "productName": "综合授信", "applyUserId": "jingjing.wang ", "flowInstId": "9044", "limitNature": "2", "customerId": "100000043133", "startTime": "2018-05-07", "taskId": "9050", "productCd": "'", "phaseName": "发起授信申请" }, { "limitApplyId": "990043855132864513", "channelCd": "WEB", "limitAmt": "1000000.00", "flowKey": "approvalTranche", "customerName": "康锋澄", "productName": "综合授信", "applyUserId": "jingjing.wang", "flowInstId": "6222", "limitNature": "2", "customerId": "100000043099", "startTime": "2018-04-28", "taskId": "6228", "productCd": "'", "phaseName": "发起授信申请" }, { "limitApplyId": "989797244163076098", "channelCd": "WEB", "limitAmt": "1000000.00", "flowKey": "approvalTranche", "customerName": "客户风险统计H", "productName": "综合授信", "applyUserId": "jingjing.wang", "flowInstId": "6085", "limitNature": "2", "customerId": "100000043160", "startTime": "2018-04-27", "taskId": "6091", "productCd": "'", "phaseName": "发起授信申请" }, { "limitApplyId": "988987746779406338", "channelCd": "WEB", "limitAmt": "1000000.00", "flowKey": "approvalTranche", "customerName": "客户风险统计0", "productName": "综合授信", "applyUserId": "jingjing.wang", "flowInstId": "4704", "limitNature": "2", "customerId": "100000047488", "startTime": "2018-04-25", "taskId": "4710", "productCd": "'", "phaseName": "发起授信申请" }, { "limitApplyId": "988987656887083009", "channelCd": "WEB", "limitAmt": "3000000.00", "flowKey": "approvalTranche", "customerName": "客户风险统计A", "productName": "综合授信", "applyUserId": "jingjing.wang", "flowInstId": "4697", "limitNature": "2", "customerId": "200000032803", "startTime": "2018-04-25", "taskId": "4703", "productCd": "'", "phaseName": "发起授信申请" }]
  let selectData = [];
  if (req.query.limitApplyId && req.query.customerId) {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].limitApplyId === req.query.limitApplyId && tableData[i].customerId === req.query.customerId) {
        selectData.push(tableData[i])
      }
    }
  } else if (req.query.limitApplyId && !req.query.customerId) {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].limitApplyId === req.query.limitApplyId) {
        selectData.push(tableData[i])
      }
    }
  } else if(!req.query.limitApplyId && req.query.customerId) {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].customerId === req.query.customerId) {
        selectData.push(tableData[i])
      }
    }
  }else {
    selectData = [...tableData]
  }
  res.send({
    "code": "9000", 
    "message": "成功", 
    "engMessage": "", 
    "timestamp": 1526622728578, 
    "ver": "1.0", 
    "data": { 
      "number": 0, 
      "numberOfElements": 10, 
      "size": 10, 
      "totalPages": 2, 
      "content":  selectData,
      "totalElements": selectData.length,
  } })
})
// 已办表格
server.get('/api/flowService/queryDoneList', (req, res) => {
  const tableData = [
    { "limitApplyId": "997301879425794050", "channelCd": "WEB", "limitAmt": "10000.00", "flowKey": "approvalTranche", "customerName": "king27", "productName": "消费贷非循环", "flowInstId": "15524", "presidentFlag": "0", "limitNature": "4", "customerId": "100000043687", "startTime": "2018-05-18", "endTime": "2018-05-18", "taskId": "15530", "productCd": "CP2008160002", "phaseName": "审批完成" }, { "limitApplyId": "997301351547469825", "channelCd": "WEB", "limitAmt": "10000.00", "flowKey": "approvalTranche", "customerName": "king27", "productName": "个人消费贷", "flowInstId": "15494", "presidentFlag": "0", "limitNature": "4", "customerId": "100000043687", "startTime": "2018-05-18", "endTime": "2018-05-18", "taskId": "15500", "productCd": "CP1804180004", "phaseName": "审批完成" }, { "limitApplyId": "997168237017890817", "channelCd": "WEB", "limitAmt": "10000.00", "flowKey": "approvalTranche", "customerName": "king27", "productName": "消费贷非循环", "flowInstId": "15464", "presidentFlag": "0", "limitNature": "4", "customerId": "100000043687", "startTime": "2018-05-18", "endTime": "2018-05-18", "taskId": "15470", "productCd": "CP2008160002", "phaseName": "审批完成" }, { "limitApplyId": "997167782476972034", "channelCd": "WEB", "limitAmt": "10000.00", "flowKey": "approvalTranche", "customerName": "king27", "productName": "个人消费贷", "flowInstId": "15434", "presidentFlag": "0", "limitNature": "4", "customerId": "100000043687", "startTime": "2018-05-18", "endTime": "2018-05-18", "taskId": "15440", "productCd": "CP1804180004", "phaseName": "审批完成" }, { "limitApplyId": "997165616538386434", "channelCd": "WEB", "limitAmt": "100000.00", "flowKey": "approvalTranche", "customerName": "king12", "productName": "个人经营性贷款", "flowInstId": "15404", "presidentFlag": "0", "limitNature": "5", "customerId": "100000043543", "startTime": "2018-05-18", "endTime": "2018-05-18", "taskId": "15410", "productCd": "CP1712070001", "phaseName": "审批完成" }, { "limitApplyId": "997164909273874434", "channelCd": "WEB", "limitAmt": "100000.00", "flowKey": "approvalTranche", "customerName": "king12", "productName": "个人经营性贷款", "flowInstId": "15374", "presidentFlag": "0", "limitNature": "5", "customerId": "100000043543", "startTime": "2018-05-18", "endTime": "2018-05-18", "taskId": "15380", "productCd": "CP1712070001", "phaseName": "审批完成" }, { "limitApplyId": "997164225069645826", "channelCd": "WEB", "limitAmt": "100000.00", "flowKey": "approvalTranche", "customerName": "king12", "productName": "个人经营性贷款", "flowInstId": "15344", "presidentFlag": "0", "limitNature": "4", "customerId": "100000043543", "startTime": "2018-05-18", "endTime": "2018-05-18", "taskId": "15350", "productCd": "CP1712070001", "phaseName": "审批完成" }, { "limitApplyId": "997163506958663682", "channelCd": "WEB", "limitAmt": "100000.00", "flowKey": "approvalTranche", "customerName": "king12", "productName": "个人经营性贷款", "flowInstId": "15314", "presidentFlag": "0", "limitNature": "4", "customerId": "100000043543", "startTime": "2018-05-18", "endTime": "2018-05-18", "taskId": "15320", "productCd": "CP1712070001", "phaseName": "审批完成" }, { "limitApplyId": "997162818774040578", "channelCd": "WEB", "limitAmt": "100000.00", "flowKey": "approvalTranche", "customerName": "施秀凤", "productName": "综合授信", "flowInstId": "15284", "presidentFlag": "0", "limitNature": "2", "customerId": "100000043204", "startTime": "2018-05-18", "endTime": "2018-05-18", "taskId": "15290", "productCd": "'", "phaseName": "审批完成" }, { "limitApplyId": "997162087794933762", "channelCd": "WEB", "limitAmt": "100000.00", "flowKey": "approvalTranche", "customerName": "施秀凤", "productName": "综合授信", "flowInstId": "15254", "presidentFlag": "0", "limitNature": "2", "customerId": "100000043204", "startTime": "2018-05-18", "endTime": "2018-05-18", "taskId": "15260", "productCd": "'", "phaseName": "审批完成" }
  ]
  let selectData = [];
  if (req.query.limitApplyId && req.query.customerId) {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].limitApplyId === req.query.limitApplyId && tableData[i].customerId === req.query.customerId) {
        selectData.push(tableData[i])
      }
    }
  } else if (req.query.limitApplyId && !req.query.customerId) {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].limitApplyId === req.query.limitApplyId) {
        selectData.push(tableData[i])
      }
    }
  } else if (!req.query.limitApplyId && req.query.customerId) {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].customerId === req.query.customerId) {
        selectData.push(tableData[i])
      }
    }
  } else {
    selectData = [...tableData]
  }
  res.send({ 
    "code": "9000", 
    "message": "成功", 
    "engMessage": "", 
    "timestamp": 1526624270559, 
    "ver": "1.0", 
    "data": { 
      "number": 0, 
      "numberOfElements": 10, 
      "size": 10, 
      "totalPages": 37, 
      "content": selectData,
      "totalElements": selectData.length ,
      } 
    })
})

// 已办撤回
server.post('/api/flowService/retrieve', (req, res) => {
  if (req.body.businessKey == '997301879425794050' || req.body.businessKey == '997301351547469825') {
    res.send({
      "code": "9303",
      "message": "",
      "engMessage": "下一审批阶段已提交,无法撤回",
      "timestamp": 1526624270559,
      "ver": "1.0",
    })
  }else {
    res.send({
      "code": "9000",
      "message": "成功",
      "engMessage": "",
      "timestamp": 1526624270559,
      "ver": "1.0",
    })
  }
})

// 额度管理
server.get('/api/limitManageService/queryList', (req, res) => {
  const tableData = [
    {
      customerId: '100000062013',
      limitId: '991869212718813186',
      limitAmt: '16,000,000.00',
      startDate: '2020-05-03',
      customerName: '柯亘',
      status: '2'
    },{
      customerId: '100000043179',
      limitId: '984360618725249026',
      limitAmt: '100,000.00',
      startDate: '2019-04-12',
      customerName: '濮震',
      status: '2'
    },
  ]
  let selectData = [];
  if (req.query.customerId && req.query.customerName && req.query.limitId && req.query.status) {// 都有
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].customerId === req.query.customerId && tableData[i].customerName === req.query.customerName && tableData[i].limitId === req.query.limitId && tableData[i].status === req.query.status) {
        selectData.push(tableData[i])
      }
    }
  } else if ( !req.query.customerId && !req.query.customerName && !req.query.limitId && !req.query.status) {
    selectData = [...tableData];
  } else if (req.query.customerId && !req.query.customerName && !req.query.limitId && !req.query.status) {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].customerId === req.query.customerId) {
        
        selectData.push(tableData[i])
      }
    }
  } else if (!req.query.customerId && req.query.customerName && !req.query.limitId && !req.query.status) {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].customerName === req.query.customerName) {
        selectData.push(tableData[i])
      }
    }
  } else if (!req.query.customerId && !req.query.customerName && req.query.limitId && !req.query.status) {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].limitId === req.query.limitId) {
        selectData.push(tableData[i])
      }
    }
  } else if (!req.query.customerId && !req.query.customerName && !req.query.limitId && req.query.status) {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].status === req.query.status) {
        selectData.push(tableData[i])
      }
    }
  }
  res.send({
    "code": "9000",
    "message": "成功",
    "engMessage": "",
    "timestamp": 1526624270559,
    "ver": "1.0",
    "data": {
      "number": 0,
      "numberOfElements": 10,
      "size": 10,
      "totalPages": 37,
      "content": selectData,
      "totalElements": selectData.length,
    }
  })

})

// 单笔单批表格
server.get('/api/customerService/queryList', (req, res) => {
  const tableData = [
    {
      custName: '柯亘',
      custId: '100000062013',
      certType: '1',
      certId: '123456789',
      custType: '1',
    }, {
      custName: '濮震',
      custId: '100000043179',
      certType: '2',
      certId: '1111111111',
      custType: '1',
    }, {
      custName: '张震',
      custId: '1000930586',
      certType: '1',
      certId: '1232421',
      custType: '1',
    }, {
      custName: '王哥',
      custId: '32454232',
      certType: '2',
      certId: '463436565',
      custType: '1',
    },
    {
      custName: '王雷',
      custId: '100000062013',
      certType: '1',
      certId: '123456789',
      custType: '2',
    }, {
      custName: '将军',
      custId: '100000043179',
      certType: '2',
      certId: '1111111111',
      custType: '2',
    }, {
      custName: '化东',
      custId: '1000930586',
      certType: '1',
      certId: '1232421',
      custType: '2',
    }, {
      custName: '鱼雷',
      custId: '32454232',
      certType: '2',
      certId: '463436565',
      custType: '2',
    },
  ]
  let selectData = [];
  if(req.query.custId && req.query.certType) {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].custId === req.query.custId && tableData[i].certType === req.query.certType && tableData[i].custType === req.query.custType) {
        selectData.push(tableData[i])
      }
    }
  } else if (!req.query.custId && req.query.certType) {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].certType === req.query.certType && tableData[i].custType === req.query.custType) {
        selectData.push(tableData[i])
      }
    }
  } else if (req.query.custId && !req.query.certType) {
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].custId === req.query.custId && tableData[i].custType === req.query.custType) {
        selectData.push(tableData[i])
      }
    }
  } else{
    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].custType === req.query.custType) {
        selectData.push(tableData[i])
      }
    }
  }
  res.send({
    "code": "9000",
    "message": "成功",
    "engMessage": "",
    "timestamp": 1526624270559,
    "ver": "1.0",
    "data": {
      "number": 0,
      "numberOfElements": 10,
      "size": 10,
      "totalPages": 37,
      "content": selectData,
      "totalElements": selectData.length,
    }
  })
})
// 单笔单批表格点击展开
server.get('/api/productService/queryProductList', (req, res) => {
  const tableData = [
    {
      productName: '产品1',
      productCd: '111111111',
      productLevel: '3',
      customerType: '1',
    }, {
      productName: '产品2',
      productCd: '222222222',
      productLevel: '3',
      customerType: '1',
    }, {
      productName: '产品3',
      productCd: '333333333',
      productLevel: '3',
      customerType: '2',
    }, {
      productName: '产品4',
      productCd: '444444444',
      productLevel: '3',
      customerType: '2',
    }
  ]
  let selectData = [];
  for (let i = 0; i < tableData.length; i++) {
    if (tableData[i].customerType === req.query.customerType) {
      selectData.push(tableData[i])
    }
  }
  res.send({
    "code": "9000",
    "message": "成功",
    "engMessage": "",
    "timestamp": 1526624270559,
    "ver": "1.0",
    "data": {
      "number": 0,
      "numberOfElements": 10,
      "size": 10,
      "totalPages": 37,
      "content": selectData,
      "totalElements": selectData.length,
    }
  })
})
// 点击产品
server.post('/api/limitApplyService/creditApply', (req, res) => {
  if (req.body.productCd === '111111111' || req.body.productCd === '222222222') {
    res.send({
      "code": "9303",
      "message": "",
      "engMessage": "此产品无法操作",
      "timestamp": 1526624270559,
      "ver": "1.0",
      "data": {}
    })
  }else {
    res.send({
      "code": "9000",
      "message": "成功",
      "engMessage": "",
      "timestamp": 1526624270559,
      "ver": "1.0",
      "data": {
        "limitApplyId" : '12345654321',
      }
    })
  }
})


server.listen(8005, () => {//开始服务
  console.log('开始服务')
})