"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[346],{8346:(G,k,o)=>{o.r(k),o.d(k,{default:()=>j});var m=o(8160),u=o(9067),g=o(8081),E=o(6761),f=o(6939),v=o(8721),y=o(455),D=o(5861),T=o(414),w=o.n(T),P=Object.defineProperty,A=Object.defineProperties,R=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,b=(t,e,n)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,O=(t,e)=>{for(var n in e||(e={}))C.call(e,n)&&b(t,n,e[n]);if(S)for(var n of S(e))I.call(e,n)&&b(t,n,e[n]);return t},N=(t,e)=>A(t,R(e)),M=(t,e,n)=>(b(t,typeof e!="symbol"?e+"":e,n),n),l=(t,e,n)=>new Promise((c,p)=>{var s=r=>{try{i(n.next(r))}catch(_){p(_)}},a=r=>{try{i(n.throw(r))}catch(_){p(_)}},i=r=>r.done?c(r.value):Promise.resolve(r.value).then(s,a);i((n=n.apply(t,e)).next())});class U{constructor(e,n,c){M(this,"getAndObserveStream",()=>l(this,null,function*(){const s=window.__hms.sdk.getLocalPeer().audioTrack.nativeTrack;if(!s||s.id===this.trackIdBeingObserved)return;this.trackIdBeingObserved=s.id,console.log("transcription - observing local peer track",s.id);try{this.recordRTCInstance&&(console.log("transcription - destroying earlier instance"),this.recordRTCInstance.destroy()),this.recordRTCInstance=null}catch(i){console.error("transcription - in destroying earlier instance",i)}const a=new MediaStream([s]);yield this.observeStream(a)})),this.hmsStore=e,this.enabled=!1,this.audioSocket=null,this.setTranscriptAndSpeakingPeer=n,this.setIsTranscriptionEnabled=c,this.sttTuningConfig={timeSlice:250,desiredSampRate:8e3,numberOfAudioChannels:1,bufferSize:256},this.resetTextTimer=null,this.localPeerName=e.getState(g.lA),this.observingLocalPeerTrack=!1,this.trackIdBeingObserved=null,this.recordRTCInstance=null,this.unsubscribes=[]}toggleTranscriptionState(){return l(this,null,function*(){yield this.enableTranscription(!this.enabled)})}enableTranscription(e){return l(this,null,function*(){e!==this.enabled&&(console.log("transcription enabled",e),e?(this.enabled=!0,yield this.setIsTranscriptionEnabled(!0),yield this.listen()):(this.enabled=!1,yield this.setIsTranscriptionEnabled(!1),this.cleanup()))})}setTranscriptAndPeerWithExpiry(e,n){!e||(this.setTranscriptAndSpeakingPeer(e,`[${n}]`),clearTimeout(this.resetTextTimer),this.resetTextTimer=setTimeout(()=>{this.resetTranscriptAndPeer()},5e3))}resetTranscriptAndPeer(){this.setTranscriptAndSpeakingPeer("",""),clearTimeout(this.resetTextTimer)}listen(e=0){return l(this,null,function*(){if(e>5){console.error("transcription","Max retry count reached!!",e),this.cleanup();return}try{let n={npm_package_dependencies_emoji_mart:"^5.2.2",npm_package_devDependencies_prettier:"^2.5.1",npm_package_devDependencies_source_map_loader:"^3.0.1",TERM_PROGRAM:"vscode",npm_package_devDependencies_cssnano:"^5.0.15",NODE:"/usr/local/bin/node",npm_package_dependencies_worker_timers:"^7.0.40",INIT_CWD:"/Users/macbook/Downloads/100ms-web-main",npm_package_devDependencies_terser_webpack_plugin:"^5.3.1",npm_config_version_git_tag:"true",SHELL:"/bin/zsh",TERM:"xterm-256color",npm_package_dependencies_eventemitter2:"^6.4.7",TMPDIR:"/var/folders/78/ts31st6s4clfpy3xkgbzfvsw0000gn/T/",npm_package_dependencies_react_virtualized_auto_sizer:"^1.0.7",npm_package_dependencies__100mslive_react_icons:"0.8.3",npm_package_scripts_lint:"eslint -c .eslintrc --no-error-on-unmatched-pattern src --ext .js --ext jsx",npm_config_init_license:"MIT",TERM_PROGRAM_VERSION:"1.78.0",npm_package_dependencies_screenfull:"^5.1.0",npm_package_scripts_dev:"node ../../scripts/dev-webapp",npm_package_dependencies_react_intersection_observer:"^9.4.3",MallocNanoZone:"0",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",ZDOTDIR:"/Users/macbook",npm_package_dependencies_uuid:"^8.3.2",npm_package_dependencies_pusher_js:"^7.0.3",npm_package_private:"true",npm_config_registry:"https://registry.yarnpkg.com",npm_package_dependencies_react_dom:"^18.1.0",npm_package_readmeFilename:"README.md",USER:"macbook",npm_package_description:"[![Documentation](https://img.shields.io/badge/Read-Documentation-blue)](https://docs.100ms.live/javascript/v2/foundation/basics) [![Discord](https://img.shields.io/badge/Community-Join%20on%20Discord-blue)](https://discord.gg/F8cNgbjSaQ) [![Email](https://img.shields.io/badge/Contact-Know%20More-blue)](mailto:founders@100ms.live)",npm_package_devDependencies_webpack:"^5.76.0",npm_package_dependencies_web_vitals:"^1.0.1",npm_package_license:"MIT",npm_package_devDependencies_webpack_cli:"^4.9.2",npm_package_devDependencies_dotenv:"^14.2.0",COMMAND_MODE:"unix2003",npm_package_devDependencies_postcss_loader:"^6.2.1",npm_package_scripts_prebuild:"rm -rf build",npm_package_browserslist_development_1:"last 1 firefox version",npm_package_devDependencies_webpack_dev_server:"^4.7.4",npm_package_browserslist_development_0:"last 1 chrome version",npm_package_dependencies__100mslive_hms_noise_suppression:"0.9.3",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.tJiuoSH8nu/Listeners",npm_package_devDependencies_esbuild_plugin_postcss2:"0.1.1",npm_package_devDependencies_esbuild_loader:"^2.18.0",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x1",npm_package_devDependencies_postcss:"^8.4.5",npm_package_devDependencies_eslint_plugin_simple_import_sort:"^8.0.0",npm_package_devDependencies_eslint:"^8.9.0",npm_package_browserslist_development_2:"last 1 safari version",npm_execpath:"/usr/local/lib/node_modules/yarn/bin/yarn.js",npm_package_dependencies__100mslive_react_ui:"0.8.3",npm_package_module:"dist/index.js",npm_package_dependencies_react_use:"^17.4.0",npm_package_devDependencies_mini_css_extract_plugin:"^2.5.2",npm_package_devDependencies_eslint_plugin_prettier:"^4.0.0",npm_package_devDependencies_copy_webpack_plugin:"^10.2.1",PATH:"/var/folders/78/ts31st6s4clfpy3xkgbzfvsw0000gn/T/yarn--1684819888085-0.5786261786208151:/Users/macbook/Downloads/100ms-web-main/node_modules/.bin:/Users/macbook/.config/yarn/link/node_modules/.bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Apple/usr/bin:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/Users/macbook/Documents/flutter/bin:/Users/macbook/Documents/flutter/bin",npm_config_argv:'{"remain":[],"cooked":["run","build"],"original":["build"]}',npm_package_scripts_lint_fix:"yarn lint --fix",npm_package_dependencies_zipyai:"^1.3.24",npm_package_dependencies__emoji_mart_react:"^1.0.1",LaunchInstanceID:"E4FED9CE-D764-4E76-8C1A-952A493E16D7",_:"/Users/macbook/Downloads/100ms-web-main/node_modules/.bin/webpack",npm_package_dependencies__tldraw_tldraw:"^1.18.4",__CFBundleIdentifier:"com.microsoft.VSCode",USER_ZDOTDIR:"/Users/macbook",npm_package_browserslist_production_1:"not dead",PWD:"/Users/macbook/Downloads/100ms-web-main",npm_package_browserslist_production_0:">0.2%",npm_package_dependencies__100mslive_react_sdk:"0.8.3",npm_lifecycle_event:"build",npm_package_browserslist_production_2:"not op_mini all",npm_package_dependencies_mobx:"^6.3.12",npm_package_dependencies_js_confetti:"^0.10.2",LANG:"fr_FR.UTF-8",npm_package_name:"100ms_edtech_template",npm_package_devDependencies_eslint_plugin_import:"^2.25.4",npm_package_dependencies__100mslive_hms_virtual_background:"1.11.3",npm_package_resolutions_loader_utils:"^2.0.4",npm_package_scripts_esbuild:"node ../../scripts/build-webapp",npm_package_scripts_start:"webpack serve",npm_package_scripts_build:"webpack --node-env production",npm_config_version_commit_hooks:"true",XPC_FLAGS:"0x0",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",npm_package_devDependencies__babel_eslint_parser:"^7.17.0",npm_package_dependencies_react_router_dom:"^6.3.0",npm_package_devDependencies_eslint_config_react_app:"^7.0.0",npm_config_bin_links:"true",npm_package_main:"dist/index.cjs.js",XPC_SERVICE_NAME:"0",npm_package_dependencies_recordrtc:"^5.6.2",npm_package_version:"0.1.4",VSCODE_INJECTION:"1",npm_package_devDependencies_autoprefixer:"^10.4.2",HOME:"/Users/macbook",SHLVL:"2",npm_package_dependencies_react_window:"^1.8.7",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",npm_package_dependencies_hls_js:"^1.3.0",npm_package_dependencies__100mslive_hls_player:"0.1.3",npm_config_save_prefix:"^",npm_config_strict_ssl:"true",npm_package_dependencies__emoji_mart_data:"^1.0.6",npm_config_version_git_message:"v%s",LOGNAME:"macbook",YARN_WRAP_OUTPUT:"false",npm_package_devDependencies_html_webpack_plugin:"^5.5.0",npm_package_scripts_format:"prettier -w src",npm_lifecycle_script:"webpack --node-env production",VSCODE_GIT_IPC_HANDLE:"/var/folders/78/ts31st6s4clfpy3xkgbzfvsw0000gn/T/vscode-git-73afa0f49e.sock",npm_package_dependencies_react:"^18.1.0",npm_package_devDependencies_webpack_manifest_plugin:"^4.1.1",npm_config_version_git_sign:"",npm_config_ignore_scripts:"",npm_config_user_agent:"yarn/1.22.19 npm/? node/v18.8.0 darwin x64",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",npm_package_files_1:"src",npm_package_files_0:"dist",npm_config_init_version:"1.0.0",npm_config_ignore_optional:"",SECURITYSESSIONID:"186a3",npm_package_devDependencies_css_loader:"^6.5.1",npm_package_dependencies_react_draggable:"^4.4.5",COLORTERM:"truecolor",npm_node_execpath:"/usr/local/bin/node",npm_package_devDependencies_eslint_webpack_plugin:"^3.1.1",npm_config_version_tag_prefix:"v",NODE_ENV:"production",REACT_APP_TOKEN_GENERATION_ENDPOINT:"https://prod-in2.100ms.live/hmsapi/johanna-videoconf-559.app.100ms.live/"}.REACT_APP_DYNAMIC_STT_TOKEN_GENERATION_ENDPOINT;const s=(yield(yield fetch(n)).json()).token;s?(this.audioSocket=yield new WebSocket(`wss://api.assemblyai.com/v2/realtime/ws?sample_rate=${this.sttTuningConfig.desiredSampRate}&token=${s}`),this.resetTranscriptAndPeer(),this.audioSocket.onmessage=a=>{try{const i=JSON.parse(a.data);if(i.text&&this.enabled){let r=i.text.length>=80?i.text.split(" ").slice(Math.max(i.text.split(" ").length-10,1)).join(" "):i.text;r&&this.setTranscriptAndPeerWithExpiry(r,this.localPeerName)}}catch(i){console.error("transcription",i)}},this.audioSocket.onerror=a=>{console.error("transcription",a),this.audioSocket.close()},this.audioSocket.onclose=a=>{try{console.log(a),this.audioSocket=null,this.enabled&&a.code!==4001&&this.listen(e++)}catch(i){console.error("transcription",i)}},this.audioSocket.onopen=()=>{this.observeLocalPeerTrack()}):console.error("Unable to fetch dynamic token!!")}catch(n){console.error("transcription",n)}})}observeLocalPeerTrack(){return l(this,null,function*(){try{if(this.observingLocalPeerTrack)return;this.observingLocalPeerTrack=!0,console.log("transcription - observing local peer track");let e=this.hmsStore.subscribe(this.getAndObserveStream,g.uX);this.unsubscribes.push(e),this.getAndObserveStream()}catch(e){console.error("transcription - observing local peer track",e)}})}observeStream(e){return l(this,null,function*(){this.recordRTCInstance=new(w())(e,N(O({},this.sttTuningConfig),{type:"audio",mimeType:"audio/webm;codecs=pcm",recorderType:T.StereoAudioRecorder,ondataavailable:n=>{const c=new FileReader;c.onload=()=>{const p=c.result;if(this.audioSocket&&this.enabled&&this.audioSocket.readyState&&this.audioSocket.readyState===1)try{this.audioSocket.send(JSON.stringify({audio_data:p.split("base64,")[1]}))}catch(s){console.error("transcription",s)}},c.readAsDataURL(n)}})),this.recordRTCInstance.startRecording()})}cleanup(){if(console.log("transcription - cleanup"),this.audioSocket)try{this.audioSocket.close(),this.audioSocket=null}catch(e){console.error("transcription cleanup - couldn't close socket",e)}if(this.recordRTCInstance)try{this.recordRTCInstance.destroy(),this.recordRTCInstance=null}catch(e){console.error("transcription cleanup - couldn't stop recording",e)}for(const e of this.unsubscribes)e();this.resetTranscriptAndPeer()}}var h=o(5581),d=o(8160),x=(t,e,n)=>new Promise((c,p)=>{var s=r=>{try{i(n.next(r))}catch(_){p(_)}},a=r=>{try{i(n.throw(r))}catch(_){p(_)}},i=r=>r.done?c(r.value):Promise.resolve(r.value).then(s,a);i((n=n.apply(t,e)).next())});function j(){const t=(0,u._U)((0,g.$8)(h.H3.TRANSCRIPTION_STATE)),e=(0,u.gg)(),n=!!t?.enabled;let c="",p="";n&&(c=t.transcript||"",p=t.speakingPeer||"");const s=(0,m.useRef)(null),a=(0,u.cw)(),i=(0,u._U)(g.xf);(0,m.useEffect)(()=>{a.sessionStore.observe(h.H3.TRANSCRIPTION_STATE)},[a]),(0,m.useEffect)(()=>(s.current||(s.current=new U(e,(_,L)=>x(this,null,function*(){yield a.sessionStore.set(h.H3.TRANSCRIPTION_STATE,{enabled:!0,transcript:_,speakingPeer:L})}),_=>x(this,null,function*(){yield a.sessionStore.set(h.H3.TRANSCRIPTION_STATE,{enabled:_})}))),()=>{s.current&&s.current.cleanup()}),[a,e]),(0,m.useEffect)(()=>{n&&s.current.enableTranscription(!0)},[n]);const r=(0,m.useCallback)(()=>{s.current.toggleTranscriptionState()},[]);return d.createElement(d.Fragment,null,d.createElement(f.x,{css:{textAlign:"left",fontWeight:"$medium",bottom:"120px",position:"fixed",width:"100%",fontSize:"$20px",zIndex:"1000000",color:"white",textShadow:"0px 0px 6px #000",whiteSpace:"pre-line",paddingLeft:"40px"}}),d.createElement(f.x,{css:{textAlign:"center",fontWeight:"$medium",bottom:"90px",position:"fixed",width:"100%",fontSize:"$20px",zIndex:"1000000",color:"white",textShadow:"0px 0px 6px #000",whiteSpace:"pre-line"}},d.createElement(v.x,{css:{color:"white",textShadow:"0px 0px 6px #000"}},c),d.createElement(v.x,{css:{color:"#c0bbbb",textShadow:"0px 0px 6px #000",textTransform:"capitalize"}},p)),i.audio&&d.createElement(y.u,{title:`Turn ${n?"off":"on"} transcription`},d.createElement(D.h,{active:!n,onClick:r,"data-testid":"transcription_btn"},d.createElement(E.Z,null))))}}}]);

//# sourceMappingURL=346.3ccb47c7.js.map