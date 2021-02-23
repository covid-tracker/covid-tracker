(this["webpackJsonpcorona-track"]=this["webpackJsonpcorona-track"]||[]).push([[0],{190:function(e,a,t){e.exports=t(412)},195:function(e,a,t){},412:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(60),o=t.n(i),c=(t(195),t(90)),l=t.n(c),s=t(153),m=t(12),u=t(13),d=t(61),h=t(15),p=t(14),v=t(44),f=t.n(v),E=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={newApi:[],firstMapOfProvince:[{active:"",confirmed:"",deaths:"",fatality_rate:"",recovered:""}]},e}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"section"},r.a.createElement("div",{className:"column is-3"}))}}]),t}(n.Component),y=t(18),w=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.widgetData,a=e.TotalConfirmed,t=e.TotalRecovered,n=e.TotalDeaths;return r.a.createElement("div",{className:"customBox shadowTwo",style:{textAlign:"center"}},r.a.createElement("h1",{className:"title"},"National Live Count"),r.a.createElement("div",{className:"is-multiline columns"},r.a.createElement(y.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"},className:"column widBox widgetOne shadowThree"},r.a.createElement("h3",null,"CASES"),r.a.createElement("h2",null,a)),r.a.createElement(y.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"},className:"column widBox widgetThree shadowThree"},r.a.createElement("h3",null,"RECOVERED"),r.a.createElement("h2",null,t)),r.a.createElement(y.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"},className:"column widBox widgetTwo shadowThree"},r.a.createElement("h3",null,"DEATHS"),r.a.createElement("h2",null,n))))}}]),t}(n.Component),g=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"customBox shadowTwo"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",{className:"title",style:{textAlign:"center"}},"Canada COVID-19 Tracker"),r.a.createElement("p",{className:"subtitle"},"Provincial Case Numbers"),r.a.createElement("button",{className:"alertButton",onClick:function(e){return window.alert('covid19api.com is missing "Canada" object from the array (I added a console.log to show the array where you can see this), Their dev team is working on a fix, Update coming soon, check back!')}},"Important! - Click me first!")))}}]),t}(n.Component),b=t(11),x=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).lineGraphRender=function(){return 0===e.props.lineGraphFinalFunction.length?r.a.createElement(y.a.div,{animate:{scale:[1,1.05,1]},transition:{ease:"linear",duration:2,loop:1/0}},r.a.createElement("h2",{className:"customBox shadowTwo",style:{fontSize:"2rem",color:"#f35163",textAlign:"center",height:"40rem",display:"flex",alignItems:"center"}},'CLICK A PROVINCE FROM "BAR GRAPH" TO DISPLAY CASE DATA')):r.a.createElement("div",{className:"customBox shadowTwo"},r.a.createElement("h3",{style:{textAlign:"center",color:"white",fontSize:15}},"Province Cases"),r.a.createElement(b.f,{width:"100%",aspect:3.5/3.75},r.a.createElement(b.e,{data:e.props.lineGraphFinalFunction,margin:{top:5,right:10,left:0,bottom:5},style:{margin:"0 auto"}},r.a.createElement(b.c,{strokeDasharray:"1 1"}),r.a.createElement(b.h,{dataKey:"Date",stroke:"#f35163"}),r.a.createElement(b.i,{stroke:"#f35163"}),r.a.createElement(b.g,null),r.a.createElement(b.d,{dot:!1,animationDuration:3e3,type:"monotone",dataKey:"Cases",stroke:"#4f7cff",strokeWidth:"6"}))))},e}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.lineGraphRender())}}]),t}(n.Component),C=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).onBarClick=function(a){var t=a.activePayload[0].payload.State;e.setState({dataForLineGraph:t},(function(){e.props.lineGraphHandler(e.state.dataForLineGraph)}))},e.state={dataForLineGraph:null},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.barChartInfo;return r.a.createElement(y.a.div,{whileTap:{scale:1.1,x:"-5px",y:"5px"}},r.a.createElement("div",{className:"customBox",style:{textAlign:"center",width:"100%",height:740}},r.a.createElement("h1",{className:"title"},"Total Confirmed Cases"),r.a.createElement(b.f,null,r.a.createElement(b.b,{data:e.map((function(e){return""!==e.Region.province?{Province:e.Region.province,Cases:e.Confirmed}:null})),maxBarSize:20,layout:"vertical",style:{paddingBottom:20},onClick:this.onBarClick},r.a.createElement(b.c,{strokeDasharray:"1 1"}),r.a.createElement(b.h,{type:"number",orientation:"bottom",stroke:"#f35163"}),r.a.createElement(b.i,{type:"category",orientation:"left",dataKey:"Province",stroke:"#f35163"}),r.a.createElement(b.g,null),r.a.createElement(b.a,{dataKey:"Cases",fill:"#4f7cff",barSize:37,radius:2})))))}}]),t}(n.Component),k=t(93),O={padding:"3px 10px",color:"#fff",cursor:"pointer",background:"#111",borderRadius:"50px",fontSize:15},D=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={viewport:{width:"auto",height:716,latitude:62,longitude:-96.81,zoom:2.3,isDrabble:"false",cluster:"true",clusterRadius:80},showPopup:!0},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"customBox shadowTwo",style:{textAlign:"center"}},r.a.createElement(k.b,Object.assign({style:{minWidth:"100%",maxWidth:"100%"}},this.state.viewport,{mapboxApiAccessToken:"pk.eyJ1IjoieGVub2pheCIsImEiOiJjazk5MDlpNDEwN2o2M21ueDVoNXQ1eWpnIn0.-Sy_LkU_ZYcmyH09Zl-MYw",onViewportChange:function(a){return e.setState({viewport:a})},mapStyle:"mapbox://styles/mapbox/dark-v10"}),this.props.markerData.map((function(e){return r.a.createElement(k.a,{latitude:parseFloat(e.Lat),longitude:parseFloat(e.Lon)},r.a.createElement("div",{style:O},e.Cases))}))))}}]),t}(n.Component),T=t(164),S=t.n(T),j=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).functionForLineGraph=function(a){var t=e.state.canadianSummaryLineGraph.filter((function(e){return e.Province===a?{Cases:e.Cases,Date:e.Date,Province:e.Province}:null}));e.setState({fullProvinceTimeline:t},(function(){e.coordinateValues()}))},e.state={newApi:[],allProvinceData:[],allProvinceDataTwo:[],allProvinceDataThree:[],canadianSummaryLineGraph:[],canadianSummaryAll:[],canadianSummaryBarGraph:[],canadianSummaryCanada:[],handOffToLineGraph:[],loading:!0,graphComponentData:{interpolation:"natural",polar:!1},fullProvinceTimeline:""},e.coordinateValues=e.coordinateValues.bind(Object(d.a)(e)),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var a,t,n,r,i,o,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Date,t=new Date,a.setHours(-30,0,0,0),t.setHours(-27,0,0,0),a=a.toISOString().split(".")[0]+"Z",t=t.toISOString().split(".")[0]+"Z",e.next=8,f()({url:"https://covid-19-statistics.p.rapidapi.com/reports",method:"GET",params:{iso:"CAN"},headers:{"x-rapidapi-key":"63fefd3bbbmsh7e07abc4e3d579bp14f7e0jsnc007e001acd6","x-rapidapi-host":"covid-19-statistics.p.rapidapi.com"}});case 8:return n=e.sent,r=n.data,e.next=12,f()({url:"https://api.covid19api.com/country/canada/status/confirmed/live",method:"GET",params:{from:a,to:t}});case 12:return i=e.sent,o=i.data,e.next=16,f()({url:"https://api.covid19api.com/summary",method:"GET"});case 16:c=e.sent,s=c.data,this.setState({newApi:r.data,canadianSummaryAll:o,canadianSummaryCanada:s.Countries[30],loading:!1}),this.firstDataGather(),console.log(this.state.allProvinceData),console.log(this.state.newApi[0].region),console.log(this.state.newApi[0].region.province);case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"firstDataGather",value:function(){var e=this.state.newApi.map((function(e){return{Active:e.active,Confirmed:e.confirmed,Deaths:e.deaths,Fatality:e.fatality_rate,Recovered:e.recovered,Region:e.region}}));this.setState({allProvinceData:e}),this.threeDataGather(),console.log(this.state.allProvinceData)}},{key:"threeDataGather",value:function(){var e=this.state.allProvinceData.map((function(e){return{Province:e.province}}));this.setState({allProvinceDataThree:e})}},{key:"coordinateValues",value:function(){var e=this.state.fullProvinceTimeline.map((function(e){return{Date:e.Date,Cases:e.Cases}}));this.setState({handOffToLineGraph:e})}},{key:"render",value:function(){var e=this.state,a=e.allProvinceData,t=e.canadianSummaryAll,n=e.canadianSummaryCanada,i=e.graphComponentData,o=e.handOffToLineGraph;return this.state.loading?r.a.createElement("div",{className:"loadScreen"},r.a.createElement(S.a,{type:"MutatingDots",color:"#4f7cff",secondaryColor:"#f35163",height:100,width:100})):r.a.createElement(y.a.div,null,r.a.createElement("main",{className:"section"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-3"}),r.a.createElement("div",{className:"column is-5 "},r.a.createElement(g,null)),r.a.createElement("div",{className:"column is-4"})),r.a.createElement("section",{className:"columns"},r.a.createElement("div",{className:"column is-3"},r.a.createElement(C,{barChartInfo:a,lineGraphHandler:this.functionForLineGraph}),r.a.createElement(E,null)),r.a.createElement("div",{className:"column is-5"},r.a.createElement(y.a.div,{whileHover:{scale:1.2,y:"-20px"}},r.a.createElement(D,{markerData:t}))),r.a.createElement("div",{className:"column is-4"},r.a.createElement(w,{widgetData:n}),r.a.createElement(y.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9,x:"-5px",y:"5px"}},r.a.createElement(x,{graphStyle:i,lineGraphFinalFunction:o}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[190,1,2]]]);
//# sourceMappingURL=main.50270241.chunk.js.map