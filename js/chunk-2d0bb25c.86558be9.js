(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bb25c"],{"39dd":function(e,t,a){"use strict";a.r(t);a("27f1");var s=a("1c96"),c=(a("ddb0"),a("7a23")),r=a("3de1"),l=a("6779"),n=a("6be8"),o=a("ce94");const i={class:"container max-w-26rem px-15px mx-auto pb-2rem community"},d=Object(c["createElementVNode"])("div",{class:"font16 font-bold text-center mb-3 text-primary-0"},"-- 查询用户算力 --",-1),b=Object(c["createElementVNode"])("div",null,"用户地址",-1),m={class:"border-1 border-primaryColor py-5px"},p={class:"grid grid-cols-2 my-0.5rem"},j={class:"col-span-1 p-4px"},O={class:"col-span-1 p-4px"},h={class:"col-span-1 p-4px"},u={class:"col-span-1 p-4px"},f=Object(c["createElementVNode"])("div",{class:"font-bold text-center mt-5 mb-3 text-primaryColor"},"-- 批量增发算力配置 --",-1),v=Object(c["createElementVNode"])("div",null,"用户地址",-1),x={class:"border-1 border-primaryColor py-5px"},E=Object(c["createElementVNode"])("div",{class:"mt-2"},"算力",-1),V={class:"border-1 border-primaryColor py-5px"},N=Object(c["createElementVNode"])("div",{class:"flex justify-between items-center"},[Object(c["createElementVNode"])("span",{class:""},"地址"),Object(c["createElementVNode"])("span",{class:""},"算力")],-1),y={class:"address"},R={class:"font-bold text-primaryColor"};var w={__name:"HashRateConfig",setup(e){const t=Object(c["inject"])("chainInfo"),a=Object(c["ref"])(null),w=e=>!!l["utils"].isAddress(e)||(Object(s["a"])("请输入正确的用户地址"),!1),k=Object(c["ref"])(""),g=Object(c["reactive"])({hashRate:"",totalHashRate:"",performance:"",mintHashRate:""}),L=async()=>{if(!w(k.value))return;const e=await a.value.minerInfo(k.value);console.log(e),g.hashRate=l["utils"].formatUnits(e.hashrate,18),g.totalHashRate=l["utils"].formatUnits(e.totalHashrate,18),g.performance=l["utils"].formatUnits(e.performance,18),g.mintHashRate=l["utils"].formatUnits(e.mintHashRate,18)},C=Object(c["reactive"])({address:"",hashRate:"",addressList:[],hashRateList:[]}),H=new Set,D=e=>Object(n["a"])(l["utils"].formatUnits(e,18)),U=()=>{w(C.address)&&(H.has(C.address)?Object(s["a"])("该地址已添加"):(H.add(C.address),C.addressList.push(C.address),C.hashRate&&Object(r["a"])(C.hashRate)&&C.hashRateList.push(l["utils"].parseUnits(C.hashRate.toString(),18)),C.address="",C.hashRate=""))},S=()=>{C.addressList=[],C.hashRateList=[],H.clear()},B=async()=>{if(C.addressList.length!==C.hashRateList.length)return void Object(s["a"])("批量设置时，算力需输入有效数字");const e=await a.value.mintHashRates(C.addressList,C.hashRateList);e.hash&&Object(s["a"])("处理中...");const t=await e.wait();1===t.status&&Object(s["a"])("已设置")};return Object(c["watch"])([()=>t.isActive,()=>t.isLogin],()=>{t.isActive&&t.isLogin&&(a.value=new o["a"](t.provider,t.account))},{immediate:!0}),(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",i,[Object(c["createElementVNode"])("div",{class:"text-primaryColor",onClick:t[0]||(t[0]=t=>e.$router.back())},"<<返回"),d,b,Object(c["createElementVNode"])("div",m,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"bg-transparent w-full px-4px","onUpdate:modelValue":t[1]||(t[1]=e=>k.value=e)},null,512),[[c["vModelText"],k.value]])]),Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("div",j,"可提算力："+Object(c["toDisplayString"])(Object(c["unref"])(n["a"])(g.hashRate)),1),Object(c["createElementVNode"])("div",O,"总算力："+Object(c["toDisplayString"])(Object(c["unref"])(n["a"])(g.totalHashRate)),1),Object(c["createElementVNode"])("div",h,"业绩："+Object(c["toDisplayString"])(Object(c["unref"])(n["a"])(g.performance)),1),Object(c["createElementVNode"])("div",u,"增发算力："+Object(c["toDisplayString"])(Object(c["unref"])(n["a"])(g.mintHashRate)),1)]),Object(c["createElementVNode"])("div",{class:"text-center"},[Object(c["createElementVNode"])("button",{class:"primary-btn h-2.5rem w-10rem text-black font-bold",onClick:L},"查询")]),f,v,Object(c["createElementVNode"])("div",x,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"bg-transparent w-full px-4px","onUpdate:modelValue":t[2]||(t[2]=e=>C.address=e)},null,512),[[c["vModelText"],C.address]])]),E,Object(c["createElementVNode"])("div",V,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"bg-transparent w-full px-4px",type:"number","onUpdate:modelValue":t[3]||(t[3]=e=>C.hashRate=e)},null,512),[[c["vModelText"],C.hashRate]])]),Object(c["createElementVNode"])("div",{class:"text-center mt-1rem"},[Object(c["createElementVNode"])("div",{class:"flex"},[Object(c["createElementVNode"])("button",{class:"primary-btn h-2.5rem flex-1 text-black font-bold",onClick:U},"添加用户"),Object(c["createElementVNode"])("button",{class:"primary-btn h-2.5rem flex-1 text-black font-bold",onClick:S},"清空列表")]),Object(c["createElementVNode"])("button",{class:"primary-btn h-2.5rem w-10rem text-black font-bold",onClick:B},"确认批量添加")]),N,(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(C.addressList,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"flex justify-between items-center",key:e},[Object(c["createElementVNode"])("span",y,Object(c["toDisplayString"])(Object(c["unref"])(n["b"])(e)),1),Object(c["createElementVNode"])("span",R,Object(c["toDisplayString"])(D(C.hashRateList[t])||"--"),1)]))),128))]))}};const k=w;t["default"]=k}}]);