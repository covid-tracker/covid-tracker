(this["webpackJsonpcorona-track"]=this["webpackJsonpcorona-track"]||[]).push([[0],{189:function(e,a,t){e.exports=t(411)},194:function(e,a,t){},411:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(62),l=t.n(i),c=(t(194),t(22)),o=t.n(c),s=t(38),m=t(13),u=t(14),d=t(16),h=t(15),p=t(31),v=t.n(p),E=t(10),w=t(153),f=t.n(w),x=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={canadianSummaryCanada:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({url:"https://api.covid19api.com/summary",method:"GET"});case 2:a=e.sent,t=a.data,this.setState({canadianSummaryCanada:t.Countries[30]});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.canadianSummaryCanada,a=e.TotalConfirmed,t=e.TotalRecovered,n=e.TotalDeaths,i=e.NewConfirmed,l=e.NewRecovered;return r.a.createElement("div",{className:"customBox shadowTwo",style:{textAlign:"center"}},r.a.createElement("h1",{className:"title"},"National Live Count"),r.a.createElement("div",{className:"is-multiline columns"},r.a.createElement(E.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"},className:"column widBox widgetOne shadowThree"},r.a.createElement("h3",null,"CASES"),r.a.createElement("h2",null,a)),r.a.createElement(E.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"},className:"column widBox widgetThree shadowThree"},r.a.createElement("h3",null,"RECOVERED"),r.a.createElement("h2",null,t)),r.a.createElement(E.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"},className:"column widBox widgetTwo shadowThree"},r.a.createElement("h3",null,"DEATHS"),r.a.createElement("h2",null,n))),r.a.createElement("div",{className:"is-multiline columns"},r.a.createElement(E.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"},className:"column widBox widgetOne shadowThree"},r.a.createElement("h3",null,"RECENT CASES"),r.a.createElement("h2",null,i)),r.a.createElement(E.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"},className:"column widBox widgetTwo shadowThree"},r.a.createElement("h3",null,"RECENT RECOVERY"),r.a.createElement("h2",null,l))))}}]),t}(n.Component),y=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.widgetDataTwo,a=e.confirmed,t=e.active,n=e.deaths,i=e.recovered,l=e.fatality_rate;return r.a.createElement("div",{className:"customBox shadowTwo",style:{textAlign:"center"}},r.a.createElement("h1",{className:"title"},"Ontario Live Count"),r.a.createElement("div",{className:"is-multiline columns"},r.a.createElement(E.a.div,{key:a,whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"},className:"column widBox widgetOne shadowThree"},r.a.createElement("h3",null,"CASES"),r.a.createElement("h2",null,a)),r.a.createElement(E.a.div,{key:i,whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"},className:"column widBox widgetThree shadowThree"},r.a.createElement("h3",null,"RECOVERED"),r.a.createElement("h2",null,i)),r.a.createElement(E.a.div,{key:n,whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"},className:"column widBox widgetTwo shadowThree"},r.a.createElement("h3",null,"DEATHS"),r.a.createElement("h2",null,n))),r.a.createElement("div",{className:"is-multiline columns"},r.a.createElement(E.a.div,{key:t,whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"},className:"column widBox widgetOne shadowThree"},r.a.createElement("h3",null,"ACTIVE CASES"),r.a.createElement("h2",null,t)),r.a.createElement(E.a.div,{key:l,whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"},className:"column widBox widgetThree shadowThree"},r.a.createElement("h3",null,"FATALITY RATE"),r.a.createElement("h2",null,l))))}}]),t}(n.Component),g=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"customBox shadowTwo"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",{className:"title",style:{textAlign:"center"}},"Canada COVID-19 Tracker"),r.a.createElement("p",{className:"subtitle"},"Provincial Case Numbers")))}}]),t}(n.Component),T=t(12),b=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).lineGraphRender=function(){return 0===e.props.lineGraphFinalFunction.length?r.a.createElement(E.a.div,{animate:{scale:[1,1.05,1]},transition:{ease:"linear",duration:2,loop:1/0}},r.a.createElement("h2",{className:"customBox shadowTwo",style:{fontSize:"2rem",color:"#f35163",textAlign:"center",height:"40rem",display:"flex",alignItems:"center"}},'CLICK A PROVINCE FROM "BAR GRAPH" TO DISPLAY CASE DATA')):r.a.createElement("div",{className:"customBox shadowTwo"},r.a.createElement("h1",{className:"title",style:{textAlign:"center",color:"white",fontSize:15}},"National Recovered Cases"),r.a.createElement(T.f,{width:"100%",aspect:3.5/6},r.a.createElement(T.e,{data:e.props.lineGraphFinalFunction,margin:{top:0,right:5,left:0,bottom:0},style:{margin:"0 auto"}},r.a.createElement(T.c,{strokeDasharray:"1 1"}),r.a.createElement(T.h,{dataKey:"Date",stroke:"#f35163"}),r.a.createElement(T.i,{stroke:"#f35163"}),r.a.createElement(T.g,null),r.a.createElement(T.d,{dot:!1,animationDuration:3e3,type:"monotone",dataKey:"Cases",stroke:"#4f7cff",strokeWidth:"6"}))))},e}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.lineGraphRender())}}]),t}(n.Component),C=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={dataForLineGraph:null,dataForProvincialStats:null},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.barChartInfo;return r.a.createElement(E.a.div,{whileTap:{scale:1.1,x:"-5px",y:"5px"}},r.a.createElement("div",{className:"customBox",style:{textAlign:"center",width:"100%",height:670}},r.a.createElement("h1",{className:"barGraphTitle"},"National Confirmed Cases"),r.a.createElement(T.f,null,r.a.createElement(T.b,{data:e.map((function(e){return""!==e.Region.province?{Province:e.Region.province,Cases:e.Confirmed}:null})),maxBarSize:20,layout:"vertical",style:{paddingBottom:20},onClick:this.onBarClick},r.a.createElement(T.c,{strokeDasharray:"1 1"}),r.a.createElement(T.h,{type:"number",orientation:"bottom",stroke:"#f35163"}),r.a.createElement(T.i,{type:"category",orientation:"left",dataKey:"Province",stroke:"#f35163"}),r.a.createElement(T.g,null),r.a.createElement(T.a,{dataKey:"Cases",fill:"#4f7cff",barSize:37,radius:2})))))}}]),t}(n.Component),N=t(93),D={padding:"3px 10px",color:"#fff",cursor:"pointer",background:"#111",borderRadius:"50px",fontSize:13},O=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={canadianSummaryAll:[],viewport:{width:"auto",height:605,latitude:58.5,longitude:-94,zoom:3,isDrabble:"false",cluster:"true",clusterRadius:80},showPopup:!0},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark((function e(){var a,t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Date,t=new Date,a.setHours(-30,0,0,0),t.setHours(-27,0,0,0),a=a.toISOString().split(".")[0]+"Z",t=t.toISOString().split(".")[0]+"Z",e.next=8,v()({url:"https://api.covid19api.com/country/canada/status/confirmed/live",method:"GET",params:{from:a,to:t}});case 8:n=e.sent,r=n.data,this.setState({canadianSummaryAll:r});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"customBox shadowTwo",style:{textAlign:"center"}},r.a.createElement("h1",{className:"title"},"National Active Cases"),r.a.createElement(N.b,Object.assign({style:{minWidth:"100%",maxWidth:"100%"}},this.state.viewport,{mapboxApiAccessToken:"pk.eyJ1IjoieGVub2pheCIsImEiOiJjazk5MDlpNDEwN2o2M21ueDVoNXQ1eWpnIn0.-Sy_LkU_ZYcmyH09Zl-MYw",onViewportChange:function(a){return e.setState({viewport:a})},mapStyle:"mapbox://styles/mapbox/dark-v10"}),this.props.markerData.map((function(e){return r.a.createElement(N.a,{latitude:parseFloat(e.Latitude),longitude:parseFloat(e.Longitude),key:e.Province},r.a.createElement("div",{style:D},e.Active))}))))}}]),t}(n.Component),k="https://covid-19-statistics.p.rapidapi.com/reports",S=function(e){Object(d.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={newApi:[],widgetDataData:[],allProvinceData:[{Active:"",Confirmed:"",Deaths:"",Fatality:"",Recovered:"",Date:"",Region:{},Latitude:"",Longitude:"",Province:""}],handOffToLineGraphTwo:[],allRegionProvinceData:[],canadianSummaryLineGraph:[],handOffToLineGraph:[],loading:!0,graphComponentData:{interpolation:"natural",polar:!1},fullProvinceTimeline:""},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark((function e(){var a,t,n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Date).setHours(-30,0,0,0),a=a.toISOString().slice(0,10),e.next=5,v()({url:k,method:"GET",params:{iso:"CAN",date:a},headers:{"x-rapidapi-key":"63fefd3bbbmsh7e07abc4e3d579bp14f7e0jsnc007e001acd6","x-rapidapi-host":"covid-19-statistics.p.rapidapi.com"}});case 5:return t=e.sent,n=t.data,e.next=9,v()({url:k,method:"GET",params:{iso:"CAN",date:a},headers:{"x-rapidapi-key":"63fefd3bbbmsh7e07abc4e3d579bp14f7e0jsnc007e001acd6","x-rapidapi-host":"covid-19-statistics.p.rapidapi.com"}});case 9:r=e.sent,i=r.data,this.setState({newApi:n.data,widgetDataData:i.data[10],loading:!1}),this.firstDataGather();case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"firstDataGather",value:function(){var e=this.state.newApi.map((function(e){return{Active:e.active,Confirmed:e.confirmed,Deaths:e.deaths,Fatality:e.fatality_rate,Recovered:e.recovered,Date:e.date,Region:e.region}}));this.setState({allProvinceData:e}),this.secondDataGather()}},{key:"secondDataGather",value:function(){var e=this.state.allProvinceData.map((function(e){var a={Active:e.Active,Latitude:e.Region.lat,Longitude:e.Region.long,Province:e.Region.province};return null!==e.Region.lat&&a}));this.setState({allRegionProvinceData:e.slice(0,13)}),this.coordinateValuesTwo()}},{key:"coordinateValuesTwo",value:function(){var e=this.state.allProvinceData.map((function(e){return{Date:e.Region.province,Cases:e.Recovered}}));this.setState({handOffToLineGraphTwo:e})}},{key:"render",value:function(){var e=this.state,a=e.allProvinceData,t=e.handOffToLineGraphTwo,n=e.allRegionProvinceData,i=e.widgetDataData,l=e.graphComponentData;return this.state.loading?r.a.createElement("div",{className:"loadScreen"},r.a.createElement(f.a,{type:"MutatingDots",color:"#4f7cff",secondaryColor:"#f35163",height:100,width:100})):r.a.createElement(E.a.div,null,r.a.createElement("main",{className:"section"},r.a.createElement("section",null,r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-4"},r.a.createElement(x,null)),r.a.createElement("div",{className:"column is-4 "},r.a.createElement(g,null)),r.a.createElement("div",{className:"column is-4"},r.a.createElement(y,{widgetDataTwo:i})))),r.a.createElement("section",{className:"columns"},r.a.createElement("div",{className:"column is-3"},r.a.createElement(E.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"}},r.a.createElement(C,{barChartInfo:a,lineGraphHandler:this.functionForLineGraph}))),r.a.createElement("div",{className:"column is-6"},r.a.createElement(E.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"}},r.a.createElement(O,{markerData:n}))),r.a.createElement("div",{className:"column is-3"},r.a.createElement(E.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"}},r.a.createElement(b,{graphStyle:l,lineGraphFinalFunction:t}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[189,1,2]]]);
//# sourceMappingURL=main.136305a4.chunk.js.map