import{n as e}from"./rolldown-runtime.COiEfhsA.js";import{A as t,B as n,C as r,D as i,E as a,F as o,I as s,L as c,M as l,N as u,O as d,P as f,R as p,S as m,T as h,V as g,_,a as v,b as y,c as b,d as x,g as S,i as C,j as w,k as T,l as E,m as D,n as O,o as k,r as A,s as j,t as M,v as N,w as P,x as F,y as I,z as L}from"./client.y1iYfvTZ.js";import{t as R}from"./preload-helper.DygEbaNj.js";typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`);var z=N(`<div style="width: var(--wordle-cell, 3rem); height: var(--wordle-cell, 3rem); font-size: min(1.5rem, calc(var(--wordle-cell, 3rem) * 0.5))"> </div>`);function B(e,t){let n=M(t,`letter`,3,``),r=M(t,`invalid`,3,!1),a=c(()=>!t.color);var o=z();let s;var u=l(o,!0);i(()=>{s=v(o,1,`text-foreground flex items-center justify-center font-bold uppercase svelte-jsquvw`,null,s,{"border-2":h(a),"border-foreground":h(a),"wordle-invalid":r()}),A(o,`data-wordle-bg-color`,t.color),D(u,n())}),S(e,o)}var V={grey:0,yellow:1,green:2};function H(e,t){let n=t.length,r=Array(n).fill(`grey`),i={};for(let a=0;a<n;a++)e[a]===t[a]?r[a]=`green`:i[t[a]]=(i[t[a]]??0)+1;for(let t=0;t<n;t++){if(r[t]===`green`)continue;let n=e[t],a=i[n]??0;a>0&&(r[t]=`yellow`,i[n]=a-1)}return r}function U(e,t){let n={};for(let r of e){let e=H(r,t);for(let t=0;t<r.length;t++){let i=r[t],a=n[i];(a===void 0||V[e[t]]>V[a])&&(n[i]=e[t])}}return n}var W=N(`<div class="grid gap-1.5"></div>`),G=N(`<div class="wordle-board grid gap-1.5 svelte-b2ryk"></div>`);function ee(e,t){L(t,!0);let r=M(t,`invalid`,3,!1);function a(e){let n=H(e,t.answer);return Array.from({length:t.wordLength},(t,r)=>({letter:e[r],color:n[r]}))}function o(){return Array.from({length:t.wordLength},(e,n)=>({letter:t.current.at(n)}))}function s(){return Array.from({length:t.wordLength},()=>({}))}let l=c(()=>Array.from({length:t.maxGuessCount},(e,n)=>n<t.guesses.length?a(t.guesses[n]):n===t.guesses.length?o():s()));var u=G();k(u,21,()=>h(l),j,(e,a,o)=>{var s=W();k(s,21,()=>h(a),j,(e,n)=>{let i=()=>h(n).letter,a=()=>h(n).color;{let n=c(()=>r()&&o===t.guesses.length);B(e,{get letter(){return i()},get color(){return a()},get invalid(){return h(n)}})}}),n(s),i(()=>C(s,`grid-template-columns: repeat(${t.wordLength??``}, minmax(0, 1fr))`)),S(e,s)}),n(u),i(()=>C(u,`--wordle-cols: ${t.wordLength??``}; grid-template-rows: repeat(${t.maxGuessCount??``}, minmax(0, 1fr))`)),S(e,u),p()}var K=N(`<button><!></button>`);function q(e,a){let o=M(a,`action`,3,!1),s=c(()=>!a.color),l=c(()=>o()?`flex-[1.6] border-2 border-foreground/40 text-muted-foreground hover:border-foreground`:h(s)?`flex-1 border-2 border-foreground text-foreground`:`flex-1 text-foreground`);var u=K(),d=t(u),f=e=>{var t=_(),n=w(t);x(n,()=>a.children),S(e,t)},p=e=>{var t=F();i(()=>D(t,a.name)),S(e,t)};E(d,e=>{a.children?e(f):e(p,-1)}),n(u),i(()=>{v(u,1,`flex h-10 min-w-0 items-center justify-center rounded-xl text-base leading-none font-bold uppercase transition duration-100 ease-out hover:scale-[1.03] active:scale-95 motion-reduce:transition-none sm:h-12 sm:text-xl ${h(l)??``}`),A(u,`data-wordle-bg-color`,a.color),A(u,`aria-label`,a.name)}),r(`click`,u,function(...e){a.onclick?.apply(this,e)}),S(e,u)}m([`click`]);var te=I(`<svg class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 4v7a4 4 0 0 1-4 4H4"></path><path d="m9 10-5 5 5 5"></path></svg>`),ne=I(`<svg class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path><path d="m18 9-6 6"></path><path d="m12 9 6 6"></path></svg>`),re=N(`<div class="flex w-full gap-1 sm:gap-1.5"><!> <!> <!></div>`),ie=N(`<div class="flex w-full max-w-lg flex-col gap-1 px-2 sm:gap-1.5"></div>`);function ae(e,r){L(r,!0);let i=c(()=>r.layout.map(e=>e.split(``))),a=c(()=>U(r.guesses,r.answer)),o=e=>()=>r.onKeydown(e);var s=ie();k(s,21,()=>h(i),j,(e,r,s)=>{var l=re(),d=t(l),f=e=>{{let t=e=>{var t=te();S(e,t)},n=c(()=>o(`Enter`));q(e,{name:`Enter`,action:!0,get onclick(){return h(n)},children:t,$$slots:{default:!0}})}};E(d,e=>{s===h(i).length-1&&e(f)});var p=u(d,2);k(p,17,()=>h(r),j,(e,t)=>{{let n=c(()=>o(h(t)));q(e,{get name(){return h(t)},get color(){return h(a)[h(t)]},get onclick(){return h(n)}})}});var m=u(p,2),g=e=>{{let t=e=>{var t=ne();S(e,t)},n=c(()=>o(`Backspace`));q(e,{name:`Backspace`,action:!0,get onclick(){return h(n)},children:t,$$slots:{default:!0}})}};E(m,e=>{s===h(i).length-1&&e(g)}),n(l),S(e,l)}),n(s),S(e,s),p()}var oe=N(`<h2 class="text-lg font-extrabold tracking-widest uppercase"> </h2>`),se=N(`<div class="flex flex-wrap justify-end gap-2"><!></div>`),ce=N(`<dialog class="bg-background text-foreground m-auto max-h-[85dvh] w-11/12 max-w-md overflow-y-auto rounded-2xl border-2 border-foreground p-6 shadow-2xl backdrop:bg-black/50 svelte-l49rqh"><div class="flex flex-col gap-4"><!> <!> <!></div></dialog>`);function J(e,a){let c=y();L(a,!0);let f=M(a,`open`,15,!1),m=s(void 0);d(()=>{h(m)&&f()!==h(m).open&&(f()?h(m).showModal():h(m).close())});function _(){f(!1),a.onclose?.()}function v(e){e.target===h(m)&&h(m).close()}var b=ce(),C=t(b),w=t(C),T=e=>{var t=oe(),n=l(t,!0);i(()=>{A(t,`id`,c),D(n,a.title)}),S(e,t)};E(w,e=>{a.title&&e(T)});var k=u(w,2);x(k,()=>a.children??g);var j=u(k,2),N=e=>{var r=se(),i=t(r);x(i,()=>a.actions),n(r),S(e,r)};E(j,e=>{a.actions&&e(N)}),n(C),n(b),O(b,e=>o(m,e),()=>h(m)),i(()=>A(b,`aria-labelledby`,a.title?c:void 0)),P(`close`,b,_),r(`click`,b,v),S(e,b),p()}m([`click`]);function le({answers:e,dictionary:t,wordLength:n,layout:r,maxGuessCount:i}){if(!Number.isInteger(n)||n<1)throw Error(`createWordleGame: invalid wordLength ${n}`);let a=r.join(``).toLowerCase(),l=e=>e.length===1&&a.includes(e),u=t=>{let r={word:``};for(let i=0;i<8;i++){if(r=e.random(n),r.word.length!==n)throw Error(`createWordleGame: answer source returned "${r.word}" for length ${n}`);if(r.word!==t)return r}return r},d=s(f(u())),p=s(f([])),m=s(``),g=s(!1),_=c(()=>h(p).at(-1)===h(d).word?`won`:h(p).length>=i?`lost`:`playing`);function v(e){if(o(g,!1),h(_)!==`playing`)return!1;if(e===`Enter`)return h(m).length===n?t.has(h(m))?(h(p).push(h(m)),o(m,``),!0):(o(g,!0),!0):!0;if(e===`Backspace`)return h(m).length>0&&o(m,h(m).slice(0,-1),!0),!0;let r=e.toLowerCase();return l(r)?(h(m).length<n&&o(m,h(m)+r),!0):!1}function y(){o(d,u(h(d).word),!0),o(p,[],!0),o(m,``),o(g,!1)}return{wordLength:n,get answer(){return h(d).word},get answerInfo(){return h(d).info},get guesses(){return h(p)},get current(){return h(m)},get status(){return h(_)},get rejected(){return h(g)},press:v,newGame:y}}var ue=`rank,word,part_of_speech,meaning,cefr,in_sentences_pct,running_total_speech_pct,running_total_books_pct
1,der,pronoun,who; that; which,A1,40.812,3.85,7.04
2,ich,pronoun,I (first person singular nominative (subject) pronoun),A1,19.781,9.02,9.64
3,sein,verb,to be,A1,28.354,13.47,12.78
4,sie,pronoun,she,A1,14.786,16.18,14.38
5,und,conjunction,and,A1,29.284,17.7,18.01
6,ein,determiner,"a, an",A1,19,19.8,20.06
7,haben,verb,"to have; to own (to possess, have ownership of; to possess a certain characteristic)",A1,12.818,22.09,21.24
8,das,determiner,the (neuter); that,A1,13.282,24.16,22.5
9,du,pronoun,"you (singular familiar), thou",A1,7.055,26.94,23.28
10,er,pronoun,he,A1,18.439,28.27,25.5
11,nicht,particle,"not, non- (negates the meaning of a verb, adjective, or adverb)",A1,12.186,30.1,26.6
12,es,pronoun,it,A1,11.815,31.62,27.7
13,zu,preposition,"to, towards (indicates directionality)",A1,15.685,32.8,29.27
14,in,preposition,"[with dative] in, inside, within, at (inside a building)",A1,16.532,33.88,30.91
15,ihr,determiner,her (possessive),A1,9.243,34.72,31.87
16,wir,pronoun,we,A1,3.675,36.21,32.27
17,mit,preposition,"with (in the company of, alongside)",A1,10.878,36.98,33.26
18,werden,verb,to become; to get; to grow; to turn,A1,7.417,37.96,33.91
19,was,pronoun,what,A1,5.186,39.09,34.34
20,auf,preposition,"[with dative] on, upon (positioned at the top of)",A1,8.503,39.68,35.1
21,von,preposition,from,A1,9.252,40.2,35.94
22,so,adverb,"so, such, that",A1,8.488,40.74,36.71
23,dass,conjunction,that,A1,7.283,41.33,37.35
24,wie,conjunction,like,A1,6.867,41.95,37.95
25,mein,determiner,my,A1,5.557,42.61,38.48
26,an,preposition,"on, upon, at, in, against",A1,7.997,43.14,39.18
27,aber,conjunction,but; however; though,A1,7.363,43.71,39.78
28,können,verb,"to be able (to do or be something), to have the possibility of, can.",A1,4.679,44.45,40.16
29,sich,pronoun,"Reflexive pronoun of the third person singular or plural: herself, himself, itself, oneself, themselves",A1,9.895,44.81,41.12
30,wollen,verb,to want; to wish; to desire; to demand,A1,4.703,45.36,41.5
31,sagen,verb,to say (to pronounce; communicate verbally),A1,5.088,45.86,41.92
32,dieser,determiner,"this one, this",A1,5.647,46.27,42.41
33,ja,particle,obviously; certainly; of course; as you know; as is generally known,A1,2.457,46.96,42.61
34,wenn,conjunction,"when, whenever",A1,4.04,47.42,42.96
35,da,conjunction,since; as; because; given that,A1,5.267,47.8,43.41
36,kommen,verb,to come; to arrive,A1,3.889,48.26,43.72
37,noch,adverb,"still, yet (up to and including a given time)",A1,5.057,48.64,44.15
38,sehen,verb,to see; to have sight,A1,4.536,49.05,44.52
39,gut,adverb,"well (accurately, competently, satisfactorily)",A1,2.934,49.57,44.77
40,gehen,verb,"to go, to walk",A1,3.426,50.05,45.05
41,wissen,verb,to know; to be aware of (a fact),A1,2.806,50.59,45.26
42,als,conjunction,"at (approximately) the same moment, when, while, as",A1,6.165,50.88,45.79
43,für,preposition,describes an abstract directionality towards a person or matter,A1,2.686,51.37,46.02
44,nur,adverb,"only, just, merely, simply",A1,3.775,51.75,46.33
45,auch,adverb,"also, too, as well (in addition to whatever or whoever has previously been listed)",A1,5.209,52.04,46.77
46,hier,adverb,"here; in this place; refers to an environment one is currently in, or to something within reach",A1,2.062,52.54,46.93
47,kein,determiner,no; not a(n); not one; not any,A1,2.368,52.99,47.14
48,machen,verb,"to make, to produce, to create (an object, arrangement, situation, etc.)",A1,2.493,53.41,47.34
49,aus,preposition,out of; from (from the inside of something),A1,4.033,53.69,47.68
50,müssen,verb,to have to do something implied; must; to be obliged.,A1,2.052,54.13,47.84
51,sollen,verb,should; to be obligated (to do something); ought; shall,A1,2.717,54.46,48.07
52,um,preposition,about,A1,3.379,54.74,48.35
53,bei,preposition,"by, near",A1,3.47,54.99,48.64
54,alles,pronoun,everything; all,A1,3.015,55.27,48.9
55,doch,particle,yes; surely; really; on the contrary,A1,3.303,55.52,49.16
56,schon,adverb,"already (happening rather early, continuing rather long)",A1,2.404,55.82,49.37
57,tun,verb,to do (to perform or execute an action),A1,1.739,56.18,49.51
58,dein,determiner,"thy, your (esp. to friends, relatives, children, etc.).",A1,1.647,56.53,49.67
59,dann,adverb,"then, after that",A1,2.47,56.82,49.87
60,nein,particle,no,A1,0.924,57.34,49.95
61,nach,preposition,"after, past (later in time)",A1,3.396,57.56,50.24
62,man,pronoun,"one, you, they (indefinite pronoun, referring to people at large; construed as a third-person singular)",A1,3.591,57.76,50.57
63,geben,verb,to give (changing ownership),A1,2.08,58.05,50.74
64,lassen,verb,to allow; to permit; to let,A1,2.875,58.29,50.97
65,jetzt,adverb,"now (at this moment, right now)",A1,1.672,58.58,51.11
66,vor,preposition,"in front of, ahead of (relative location in space)",A1,3.505,58.75,51.4
67,ganz,adverb,"quite, rather",A1,3.125,58.92,51.66
68,oder,conjunction,or,A1,1.787,59.15,51.82
69,all,determiner,all,A1,2.252,59.33,52.01
70,mehr,adverb,more,A1,2.195,59.52,52.19
71,viel,determiner,"much, many",A1,1.871,59.72,52.35
72,denn,conjunction,for; because; since,A1,3.099,59.87,52.6
73,wieder,adverb,again; indicates that the action taking place has happened before,A1,2.658,60.03,52.82
74,nichts,pronoun,nothing,A1,1.483,60.24,52.97
75,hören,verb,to hear (to perceive sounds (or a sound) through the ear),A1,1.618,60.46,53.1
76,immer,adverb,always,A1,1.917,60.63,53.26
77,wo,adverb,where (at what place),A1,1.624,60.83,53.4
78,Mann,noun,"man, male human being",A1,1.668,61.01,53.53
79,denken,verb,not to forget; to remember,A1,1.401,61.23,53.64
80,über,preposition,"[with accusative or dative] above, over (spatially)",A1,2.543,61.36,53.86
81,etwas,determiner,"some, a bit of",A1,1.392,61.55,53.97
82,leben,verb,"to live, to be alive",A1,1.759,61.7,54.12
83,nun,adverb,"now, at this moment",A1,3.348,61.8,54.39
84,Frau,noun,woman (adult female human),A1,2.173,61.92,54.57
85,anderer,adjective,"other, different",A1,1.889,62.05,54.73
86,mal,particle,"just, once (softening a request: sag mal)",A1,0.513,62.35,54.77
87,wer,pronoun,who (what person or people),A1,1.152,62.53,54.87
88,finden,verb,to find; to discover,A1,1.319,62.68,54.97
89,nehmen,verb,to take (something into one's possession or on one's body),A1,1.736,62.81,55.11
90,unser,determiner,our,A1,1.054,62.98,55.2
91,stehen,verb,"to stand (to be upright, support oneself in an erect position)",A1,2.476,63.08,55.4
92,sehr,adverb,very,A1,1.263,63.23,55.5
93,mögen,verb,to like (something or someone),A1,1.261,63.37,55.6
94,also,conjunction,"so, therefore",A1,0.808,63.55,55.67
95,sprechen,verb,"to speak (some language, the truth, etc.)",A1,2.401,63.64,55.87
96,groß,adjective,"big, large, large-scale",A1,2.03,63.73,56.04
97,meinen,verb,"to opine, to think; to believe; to suppose",A1,1.056,63.86,56.13
98,glauben,verb,to believe something (to consider true),A1,0.914,64,56.2
99,Zeit,noun,time (as a concept),A1,1.237,64.12,56.3
100,Haus,noun,house,A1,1.454,64.22,56.42
101,jeder,determiner,"each, every",A1,1.242,64.32,56.53
102,schön,adjective,"beautiful, lovely, pretty, handsome",A1,1.439,64.42,56.63
103,Weg,noun,"path, trail, track (usually for foot traffic)",A1,0.845,64.55,56.71
104,klein,adjective,"small, little, wee (in physical size or extent)",A1,1.585,64.64,56.84
105,bleiben,verb,to remain (to continue to be),A1,1.217,64.74,56.94
106,vielleicht,adverb,"perhaps, maybe",A1,0.73,64.88,57
107,Gott,noun,god,A1,1.294,64.98,57.1
108,Tag,noun,day (a 24-hour period),A1,1.195,65.07,57.2
109,durch,preposition,by means of; by; through,A1,2.06,65.14,57.38
110,Herr,noun,"man, gentleman",A1,2.738,65.2,57.6
111,bis,preposition,"until, to, (US) through",A1,1.233,65.29,57.7
112,wohl,particle,"possibly, probably; as I was told",A1,2.05,65.36,57.87
113,warum,adverb,why; for what reason,A1,0.506,65.53,57.91
114,Kind,noun,kid; child (young person),A1,1.344,65.61,58.02
115,Freund,noun,friend,A1,1.01,65.71,58.09
116,halten,verb,to hold (an object in one's hands),A1,1.241,65.8,58.19
117,weil,conjunction,"because, given that",A1,0.912,65.9,58.26
118,Vater,noun,father,A1,1.205,65.98,58.36
119,nie,adverb,"never, never at all (referring to an indefinite period of time)",A1,0.618,66.11,58.42
120,bringen,verb,"to bring, to fetch, to take, to convey, to bear",A1,0.75,66.22,58.48
121,oh,interjection,oh,A1,0.305,66.4,58.5
122,Jahr,noun,"year (solar year, the time it takes the Earth to complete one orbit of the Sun)",A1,0.798,66.5,58.56
123,selbst,particle,"personally, by oneself",A1,1.677,66.56,58.69
124,heute,adverb,today,A1,0.672,66.66,58.75
125,Hand,noun,hand,A1,2.127,66.71,58.92
126,zurück,adverb,"back, backward, backwards, to the rear.",A1,0.774,66.8,58.98
127,neu,adjective,new,A1,0.788,66.88,59.05
128,wirklich,adverb,"really, actually",A1,0.566,67,59.09
129,Mensch,noun,"human, human being, person, man",A1,1.185,67.07,59.19
130,zwei,number,two (numerical value represented by the Arabic numeral 2; or describing a set with two components),A1,0.872,67.15,59.25
131,verstehen,verb,to understand,A1,0.553,67.26,59.29
132,ohne,preposition,without,A1,1.24,67.32,59.4
133,kennen,verb,to know; to be acquainted with; to be familiar with,A1,0.515,67.41,59.44
134,recht,adverb,"very, quite, rather, pretty, fairly",A1,1.253,67.47,59.55
135,bitte,adverb,"please, if you please (used to make a polite request or affirm an offer)",A1,0.374,67.65,59.57
136,alt,adjective,old,A1,1.447,67.7,59.68
137,brauchen,verb,"to need, to be in need of, to require",A1,0.356,67.83,59.71
138,reden,verb,"to talk, to speak, to orate",A1,0.621,67.93,59.76
139,lieben,verb,"to love, to have a strong affection for (someone or something)",A1,0.92,67.99,59.83
140,Leute,noun,"people (several individual persons, a group of people in general, esp. of one kind or another), folk (folks), peeps",A1,0.654,68.08,59.88
141,gern,adverb,"willingly; gladly; with pleasure; usually expressed verbally in English, with like, enjoy etc.",A1,0.86,68.14,59.96
142,fragen,verb,to ask,A1,0.899,68.2,60.04
143,gleich,adverb,alike,A1,1.027,68.26,60.12
144,ob,conjunction,"Introduces an indirect question, a doubt. if, whether.",A1,0.906,68.33,60.2
145,dürfen,verb,to be allowed or permitted to do something implied or previously stated; may,A1,0.728,68.4,60.26
146,Mutter,noun,mother,A1,0.862,68.47,60.33
147,unter,preposition,under,A1,1.42,68.51,60.44
148,los,adverb,"rid of, free of",A1,0.214,68.67,60.46
149,gar,particle,at all (with a negative); even,A1,1.074,68.73,60.55
150,liegen,verb,to lie (to be in a horizontal position),A1,1.359,68.77,60.66
151,euer,determiner,your (addressing two or more people informally),A1,0.71,68.84,60.72
152,warten,verb,to wait (for),A1,0.418,68.94,60.75
153,ab,preposition,beginning at that time or location; from,A1,0.67,69.01,60.81
154,helfen,verb,to help (someone); to assist; to aid,A1,0.386,69.1,60.84
155,beide,determiner,both,A1,0.924,69.16,60.91
156,Auge,noun,eye,A1,1.698,69.19,61.05
157,morgen,adverb,tomorrow,A1,0.542,69.27,61.09
158,fahren,verb,to go at speed,A1,0.633,69.33,61.15
159,ins,contraction,to the (accusative singular neuter),A1,0.889,69.39,61.22
160,lange,adverb,"long, for a long time",A1,0.901,69.44,61.29
161,jung,adjective,young,A1,0.74,69.5,61.36
162,heißen,verb,"to have a name; to be named; to be called; but implying that one “owns” this name, not necessarily that one goes by it",A1,0.678,69.56,61.41
163,erste,adjective,first,A1,0.872,69.61,61.48
164,dort,adverb,"there, yonder",A1,0.827,69.67,61.55
165,gerade,adverb,now (at the moment),A1,0.518,69.74,61.59
166,nah,adjective,"near (in space or time or in an abstract sense), close, nearby",A1,0.687,69.79,61.65
167,hin,adverb,"there, thither; denotes direction towards a place that is not the speaker’s current location.",A1,0.927,69.84,61.72
168,her,adverb,"hither, to this place, to here, to me/us",A1,0.667,69.9,61.77
169,einmal,adverb,"once, one time (one and only one time)",A1,1.262,69.94,61.88
170,Nacht,noun,night,A1,0.622,70,61.93
171,einfach,adverb,easily,A1,0.221,70.12,61.94
172,jemand,pronoun,"someone, somebody",A1,0.27,70.21,61.96
173,fallen,verb,to fall; to drop,A1,0.807,70.26,62.03
174,Ach,noun,oh,A1,0.65,70.31,62.09
175,suchen,verb,"to search, to look for",A1,0.581,70.37,62.13
176,Welt,noun,world,A1,0.806,70.42,62.2
177,allein,conjunction,"only, but",A1,0.732,70.47,62.26
178,weit,adverb,far,A1,0.705,70.51,62.32
179,ziehen,verb,to pull; to drag,A1,0.889,70.55,62.39
180,weiter,interjection,go on,A1,0.708,70.61,62.44
181,paar,determiner,some; few; a few,A1,0.404,70.68,62.47
182,rufen,verb,"to call out, to shout, to cry (of a person or animal)",A1,1.116,70.71,62.56
183,erzählen,verb,"to tell, to narrate, to recount",A1,0.501,70.77,62.6
184,hoch,adjective,"high, tall",A1,1.079,70.81,62.69
185,Sache,noun,"matter, affair, case, question, issue",A1,0.574,70.86,62.73
186,darauf,adverb,after (behind; later in time; following),A1,0.713,70.91,62.79
187,sicher,adjective,"sure, certain; safe",A1,0.865,71.01,62.81
188,setzen,verb,to set; to put,A1,0.857,71.05,62.88
189,erst,adverb,"first, at first",A1,0.749,71.09,62.94
190,bald,adverb,soon (near in time),A1,0.767,71.13,63
191,gegen,preposition,against,A1,0.798,71.17,63.07
192,Name,noun,"name (forename, Christian name, given name)",A1,0.463,71.23,63.11
193,fühlen,verb,"to feel (a thing, sensation, emotion - a noun)",A1,0.659,71.27,63.16
194,niemand,pronoun,"nobody, no one",A1,0.517,71.33,63.2
195,leid,adjective,"distressing, uncomfortable",A1,0.396,71.42,63.22
196,Mädchen,noun,girl,A1,0.565,71.47,63.27
197,Wort,noun,word as an isolated unit,A1,1.121,71.5,63.36
198,davon,adverb,"from it, from that, therefrom, off it, off that",A1,0.547,71.55,63.4
199,Ding,noun,thing,A1,0.521,71.6,63.44
200,lang,adjective,long; lengthy (in space or time),A1,0.719,71.64,63.5
201,schnell,adverb,quickly,A1,0.42,71.7,63.53
202,drei,number,three (numerical value represented by the Arabic numeral 3; or describing a set with three elements),A1,0.552,71.75,63.58
203,zeigen,verb,"to show, make see",A1,0.517,71.8,63.62
204,Liebe,noun,love (tender feeling of affection),A1,0.64,71.84,63.67
205,sterben,verb,to die,A1,0.383,71.9,63.7
206,laufen,verb,to walk; to jog; to run (to move on foot; either at a normal or an increased speed),A1,0.443,71.95,63.73
207,Kopf,noun,head,A1,0.917,71.99,63.81
208,Geld,noun,money,A1,0.302,72.05,63.83
209,essen,verb,to eat,A1,0.321,72.11,63.86
210,Abend,noun,evening; the time from dusk until midnight,A1,0.499,72.16,63.9
211,wenig,adjective,"little, few (a small amount, a small number)",A1,1.035,72.19,63.99
212,Bruder,noun,brother,A1,0.59,72.23,64.03
213,genau,adverb,"just, exactly",A1,0.212,72.31,64.05
214,sonst,adverb,otherwise (under different circumstances),A1,0.61,72.35,64.1
215,Herz,noun,heart,A1,1.088,72.38,64.19
216,sitzen,verb,to sit; to perch,A1,1.03,72.41,64.27
217,Sohn,noun,son,A1,0.565,72.45,64.32
218,scheinen,verb,to shine; to gleam,A1,1.064,72.47,64.4
219,seit,preposition,since,A1,0.514,72.53,64.44
220,richtig,adverb,really,A1,0.239,72.6,64.45
221,stellen,verb,"to put, place, position (someone or something) such that it stands upright",A1,0.552,72.64,64.49
222,klar,adverb,"obviously, surely",A1,0.214,72.72,64.51
223,natürlich,adverb,naturally,A1,0.427,72.78,64.54
224,spielen,verb,to play (engage in some activity for fun or entertainment),A1,0.349,72.83,64.57
225,genug,determiner,"enough, sufficient, an adequate number or amount of",A1,0.526,72.87,64.61
226,Stunde,noun,hour (unit of time consisting of 60 minutes),A1,0.59,72.91,64.66
227,Tür,noun,door (rigid plane on a hinge),A1,0.769,72.94,64.72
228,bekommen,verb,to receive; to get,A1,0.289,73,64.74
229,zusammen,adverb,"together, jointly",A1,0.441,73.04,64.78
230,treffen,verb,to meet; to encounter,A1,0.343,73.09,64.8
231,tragen,verb,"to carry, to bear (something on one's person)",A1,0.848,73.12,64.87
232,vergessen,verb,to forget (lose remembrance of),A1,0.341,73.17,64.9
233,holen,verb,"to (go) get, to fetch (to go somewhere and take something to bring back)",A1,0.268,73.23,64.92
234,Stadt,noun,city (a large settlement),A1,0.635,73.26,64.97
235,Alter,noun,"age, old age",A1,0.637,73.3,65.02
236,dazu,adverb,"in addition to it, in addition, besides",A1,0.533,73.33,65.06
237,einig,pronoun,"some, a few, plenty",A1,0.668,73.36,65.11
238,nennen,verb,to name (to give a name to),A1,0.423,73.39,65.15
239,darüber,adverb,"above, above it/this/that",A1,0.424,73.43,65.18
240,dafür,adverb,"for that, for it",A1,0.273,73.48,65.2
241,führen,verb,to lead,A1,0.695,73.51,65.26
242,arbeiten,verb,to work (to do a specific task by employing physical or mental powers),A1,0.214,73.57,65.27
243,kurz,adverb,briefly (for a short extent),A1,0.504,73.6,65.31
244,welcher,determiner,which; what,A1,0.707,73.63,65.37
245,lachen,verb,to laugh,A1,0.683,73.65,65.43
246,schaffen,verb,"to create, to call into being",A1,0.294,73.7,65.45
247,legen,verb,"to lay; to put, place, position (someone or something) such that it afterwards lies",A1,0.625,73.72,65.5
248,Dank,noun,"thanks, gratitude, appreciation",A1,0.119,73.78,65.52
249,Land,noun,country (territory of a nation),A1,0.579,73.81,65.57
250,versuchen,verb,"to try, to attempt (often with an uncertain result)",A1,0.204,73.87,65.58
251,schwer,adjective,"heavy, weighty",A1,0.552,73.9,65.63
252,schreiben,verb,"to write, to write out (use letters to make words and texts)",A1,0.449,73.93,65.66
253,wahr,adjective,"true, real",A1,0.477,73.97,65.69
254,tot,adjective,"dead, deceased",A1,0.225,74.02,65.71
255,Tod,noun,death,A1,0.569,74.05,65.76
256,Arm,noun,an arm,A1,0.798,74.07,65.82
257,schlafen,verb,to sleep,A1,0.4,74.1,65.85
258,Ende,noun,"end, finish",A1,0.473,74.14,65.89
259,Gesicht,noun,face,A1,0.852,74.16,65.96
260,daran,adverb,"on it, on that",A1,0.421,74.19,65.99
261,solch,determiner,such,A1,0.921,74.21,66.07
262,hinter,preposition,"behind, after",A1,0.552,74.23,66.12
263,eigentlich,adverb,Used to frame a statement as being a more (formally) truthful description of the situation in comparison to another c,A1,0.442,74.27,66.15
264,danke,interjection,"thanks, thank you",A1,0.202,74.39,66.16
265,Junge,noun,boy,A1,0.373,74.44,66.18
266,lesen,verb,"to read (to look at and understand symbols, words, or data)",A1,0.436,74.46,66.21
267,einzig,adjective,"only, sole",A1,0.338,74.5,66.24
268,Familie,noun,family,A1,0.272,74.54,66.26
269,Angst,noun,fear; fright; anxiety,A1,0.272,74.59,66.28
270,rein,adverb,purely,A1,0.247,74.63,66.3
271,Glück,noun,"happiness, joy, bliss (state or emotion)",A1,0.42,74.66,66.33
272,Frage,noun,question (interrogative sentence or phrase),A1,0.393,74.7,66.35
273,endlich,adverb,"eventually, at last, finally",A1,0.629,74.73,66.4
274,fast,adverb,almost; nearly,A1,0.494,74.75,66.44
275,Seite,noun,side (a bounding straight edge of a two-dimensional shape),A1,0.425,74.78,66.49
276,Arbeit,noun,"toil, regularly performed work, regularly pursued economic activity, labor, job, employment, occupation",A1,0.267,74.82,66.51
277,eigen,adjective,"own, peculiar or private to someone, idiosyncratic, proper or proprietary",A1,0.453,74.84,66.54
278,Tochter,noun,daughter,A1,0.435,74.87,66.58
279,schlagen,verb,to beat; to hit; to knock; to strike; to punch; to hammer; to pound,A1,0.568,74.89,66.62
280,während,preposition,"during, at the time of",A1,0.528,74.91,66.68
281,wegen,preposition,"for, because of",A1,0.326,74.95,66.69
282,welche,determiner,which; some,A1,0.579,74.97,66.74
283,trinken,verb,"to drink (to drink liquids (in bottles, glasses, etc.) by mouth)",A1,0.295,75.01,66.77
284,lernen,verb,"to learn, to acquire knowledge",A1,0.348,75.04,66.8
285,verlassen,verb,"to leave, to abandon; to depart, to forsake",A1,0.331,75.07,66.82
286,eben,particle,"just, exactly; simply (that is how it is)",A1,0.623,75.09,66.87
287,schauen,verb,"to watch, to view (a movie or other performance)",A1,0.294,75.12,66.9
288,Zimmer,noun,"room (separate part of a building, enclosed by walls, a floor and a ceiling)",A1,0.567,75.14,66.94
289,Schwester,noun,sister,A1,0.36,75.17,66.97
290,Wagen,noun,a wheeled vehicle for transporting anything,A1,0.457,75.2,67.01
291,fangen,verb,to catch (grab something flying in the air),A1,0.342,75.22,67.04
292,letzte,adjective,last,A1,0.253,75.26,67.05
293,König,noun,"king (monarch, chess, card games)",A1,0.726,75.28,67.12
294,erinnern,verb,to remind,A1,0.252,75.32,67.13
295,geschehen,verb,to occur; to happen,A1,0.652,75.34,67.19
296,stark,adjective,"strong (intense, powerful, unyielding)",A1,0.529,75.36,67.23
297,zwischen,preposition,between,A1,0.544,75.38,67.27
298,oft,adverb,often,A1,0.522,75.4,67.32
299,Macht,noun,"power, authority",A1,0.226,75.43,67.34
300,ruhig,adverb,quietly,A1,0.34,75.46,67.36
301,Ordnung,noun,"arrangement, regulation",A1,0.145,75.51,67.37
302,darum,adverb,"around it, around that",A1,0.331,75.54,67.4
303,Grund,noun,"ground, land (usually as someone's property)",A1,0.317,75.57,67.42
304,je,adverb,ever,A1,0.36,75.59,67.46
305,beginnen,verb,to begin; to commence; to be started,A1,0.619,75.61,67.5
306,Art,noun,"kind, sort, type",A1,0.39,75.63,67.54
307,sofort,adverb,"immediately, at once",A1,0.197,75.67,67.55
308,schlecht,adverb,"badly, poorly, not well (in a bad or poor manner)",A1,0.242,75.7,67.57
309,verschwinden,verb,"to disappear, to vanish, to move out of view",A1,0.213,75.74,67.59
310,voll,adverb,fully,A1,0.493,75.76,67.63
311,bitten,verb,"to ask, to beg, to plead, to bid, to request",A1,0.277,75.78,67.66
312,Woche,noun,"week (period of seven days counting from Monday to Sunday, or from Sunday to Saturday)",A1,0.192,75.82,67.68
313,sogar,adverb,"even, actually, in fact",A1,0.346,75.84,67.7
314,werfen,verb,to throw,A1,0.566,75.86,67.75
315,schicken,verb,"to send, to dispatch (a person, letter, money etc. to a destination or a person)",A1,0.233,75.89,67.77
316,Geschichte,noun,history,A1,0.3,75.91,67.79
317,fest,adjective,firm; compact; hard,A1,0.48,75.93,67.83
318,töten,verb,to kill,A1,0.126,76,67.84
319,Wasser,noun,water (H₂O),A1,0.356,76.02,67.87
320,ernst,adjective,"serious, severe, grave",A1,0.365,76.04,67.89
321,draußen,adverb,outside,A1,0.272,76.07,67.91
322,reichen,verb,to reach (extend a certain distance),A1,0.309,76.09,67.94
323,Letzter,noun,the last one (male or of unspecified gender),A1,0.249,76.12,67.96
324,sondern,conjunction,"rather, but (instead).",A1,0.573,76.13,68.01
325,frei,adjective,free; unenslaved; unimprisoned,A1,0.437,76.16,68.04
326,treten,verb,"to step, to walk (a short distance)",A1,0.877,76.17,68.11
327,leicht,adverb,slightly,A1,0.436,76.19,68.15
328,Fall,noun,"fall, drop (the act of falling or an instance thereof)",A1,0.205,76.23,68.16
329,glücklich,adjective,happy; both momentarily and generally in life,A1,0.342,76.25,68.19
330,Stimme,noun,"voice (speaking or singing), call of an animal",A1,0.589,76.26,68.23
331,fertig,adjective,ready for use; done; fully prepared,A1,0.174,76.3,68.25
332,Bett,noun,"bed (piece of furniture, usually flat and soft, for resting or sleeping on; one's place of sleep or rest)",A1,0.356,76.32,68.28
333,Sorge,noun,"concern, care, responsibility, aid",A1,0.187,76.35,68.29
334,derselbe,determiner,the same,A1,0.43,76.37,68.33
335,anders,adverb,"different, differently",A1,0.308,76.39,68.35
336,Teufel,noun,"the Devil, Satan (supreme evil spirit in the Abrahamic religions)",A1,0.266,76.42,68.37
337,bloß,adverb,"merely, only",A1,0.38,76.44,68.4
338,kaum,adverb,"barely, hardly (qualifying verbs or adjectives)",A1,0.474,76.45,68.44
339,Hilfe,noun,"help, aid",A1,0.152,76.49,68.45
340,oben,adverb,above,A1,0.29,76.51,68.48
341,hoffen,verb,to hope,A1,0.165,76.54,68.49
342,Platz,noun,"square, plaza, piazza",A1,0.364,76.56,68.52
343,Musik,noun,music,A1,0.127,76.6,68.53
344,wann,conjunction,when; if,A1,0.141,76.64,68.54
345,verloren,adjective,"lost, missing",A1,0.266,76.66,68.56
346,Ruhe,noun,"calm, relative quietness (absence of loud sounds)",A1,0.269,76.69,68.58
347,tief,adjective,"deep (having a long distance to the bottom; of bodies of water, wells, etc.)",A1,0.658,76.7,68.63
348,später,adverb,later,A1,0.184,76.73,68.65
349,Uhr,noun,"hours, o'clock (indicates the time within a twelve- or twenty-four-hour period)",A1,0.163,76.76,68.66
350,gewinnen,verb,to win; to be victorious,A1,0.244,76.78,68.68
351,böse,adverb,"nastily, evilly",A1,0.345,76.8,68.71
352,wichtig,adjective,"important, relevant, significant, weighty",A1,0.144,76.84,68.72
353,weiß,adjective,white,A1,0.219,76.85,68.75
354,überhaupt,adverb,"overall, in general",A1,0.242,76.88,68.77
355,Minute,noun,minute (unit of time; unit of angle),A1,0.127,76.91,68.78
356,Himmel,noun,sky,A1,0.51,76.93,68.82
357,folgen,verb,to follow (on the same path or in a sequence),A1,0.38,76.94,68.85
358,möglich,adjective,possible (what can be done or achieved),A1,0.27,76.96,68.87
359,Gefühl,noun,feeling (either physical sensation or emotion),A1,0.302,76.98,68.9
360,schreien,verb,to shout; to yell; to cry; to scream; to howl,A1,0.361,77,68.93
361,bisschen,adverb,(a) bit; (a) little,A1,0.166,77.03,68.94
362,niemals,adverb,never (at no time),A1,0.265,77.05,68.96
363,versprechen,verb,to promise,A1,0.178,77.08,68.97
364,Bild,noun,"depiction, image, picture",A1,0.413,77.09,69.01
365,stecken,verb,to stick; to put; to insert; to pin,A1,0.218,77.12,69.03
366,freuen,verb,"to gladden, to make glad, to make pleased",A1,0.222,77.14,69.04
367,retten,verb,"to save, to rescue",A1,0.166,77.17,69.06
368,singen,verb,to sing,A1,0.322,77.19,69.08
369,verlieren,verb,"to lose (something, or a game)",A1,0.179,77.21,69.1
370,toll,adjective,"great, nice, wonderful",A1,0.08,77.25,69.11
371,Schatz,noun,treasure,A1,0.117,77.29,69.12
372,etwa,adverb,approximately,A1,0.183,77.31,69.13
373,langsam,adverb,"slowly (at a slow pace), gradually, carefully",A1,0.31,77.33,69.16
374,erklären,verb,"to explain, to make clear",A1,0.235,77.35,69.18
375,schwarz,adjective,"black, reflecting little or no light",A1,0.396,77.37,69.21
376,still,adverb,"quietly, silently",A1,0.602,77.38,69.26
377,gefallen,verb,to please; to appeal to [with dative ‘someone’],A1,0.168,77.41,69.27
378,selber,pronoun,"self (as in myself, yourself, himself etc.)",A1,0.536,77.42,69.32
379,bereit,adjective,ready,A1,0.158,77.44,69.33
380,halt,particle,"just, simply (stating what cannot be helped)",A1,0.199,77.48,69.34
381,früh,adverb,early,A1,0.283,77.5,69.36
382,süß,adjective,sweet,A1,0.216,77.52,69.38
383,falsch,adjective,"false, unfactual, untrue",A1,0.13,77.55,69.39
384,Fuß,noun,foot (body part),A1,0.464,77.56,69.43
385,Blut,noun,blood,A1,0.277,77.58,69.45
386,ziemlich,adverb,"pretty, quite, rather, fairly, kind of",A1,0.188,77.61,69.46
387,öffnen,verb,to open (to make something accessible or allow for passage by moving from a shut position),A1,0.348,77.62,69.49
388,Licht,noun,light (electromagnetic radiation in the visible spectrum),A1,0.43,77.64,69.53
389,eins,number,one (numerical value represented by the Arabic numeral 1; first positive number in the set of natural numbers),A1,0.144,77.67,69.54
390,bestimmt,adverb,"certainly, definitely",A1,0.175,77.69,69.55
391,gerne,interjection,"don't mention it, not at all, you're welcome",A1,0.203,77.72,69.56
392,wieso,adverb,why,A1,0.045,77.78,69.57
393,Spiel,noun,a game (instance or way of playing),A1,0.175,77.8,69.58
394,manchmal,adverb,sometimes,A1,0.227,77.82,69.6
395,Buch,noun,book (collection of sheets of paper bound together to hinge at one edge; long work fit for publication),A1,0.262,77.84,69.62
396,bedeuten,verb,"to imply, to mean, to signify, to indicate, to spell, to betoken",A1,0.135,77.87,69.63
397,fliegen,verb,to fly; to travel by air,A1,0.248,77.89,69.65
398,vier,number,four (numerical value represented by the Arabic numeral 4; or describing a set with four elements),A1,0.226,77.91,69.67
399,bevor,conjunction,before,A1,0.092,77.95,69.67
400,Sinn,noun,sense,A1,0.441,77.96,69.71
401,erkennen,verb,"to recognize, perceive",A1,0.359,77.97,69.74
402,wünschen,verb,to wish for; to make a wish for; to want; to desire,A1,0.26,77.99,69.76
403,hängen,verb,"to hang, to be suspended",A1,0.35,78.01,69.78
404,spät,adjective,late,A1,0.167,78.03,69.8
405,Kerl,noun,"fellow, guy, chap, bloke",A1,0.131,78.06,69.81
406,Mama,noun,"mum, mummy, mom, mommy",A1,0.166,78.09,69.82
407,Straße,noun,"street; road (a way wide enough to be passable for vehicles, generally paved, in or outside a settlement)",A1,0.295,78.1,69.84
408,kriegen,verb,to get,A1,0.094,78.14,69.85
409,unten,adverb,below,A1,0.256,78.16,69.87
410,Dame,noun,lady (woman of good breeding and manners),A1,0.31,78.17,69.9
411,fort,adverb,away,A1,0.727,78.18,69.96
412,antworten,verb,"to answer, to reply",A1,0.494,78.19,70
413,gestern,adverb,yesterday,A1,0.182,78.22,70.01
414,vorbei,adverb,past,A1,0.143,78.24,70.02
415,Teil,noun,"part, piece (of a whole, often in relation to living things or an abstract concept)",A1,0.213,78.26,70.04
416,vertrauen,verb,"to trust, to place confidence in",A1,0.184,78.29,70.05
417,schlimm,adverb,"badly, severely",A1,0.172,78.31,70.07
418,Wahrheit,noun,truth,A1,0.256,78.33,70.08
419,echt,adverb,really; indeed,A1,0.063,78.37,70.08
420,Rede,noun,"speech, address",A1,0.174,78.39,70.11
421,Erde,noun,earth,A1,0.368,78.4,70.14
422,Augenblick,noun,"moment, instant, blink of an eye (very short period of time)",A1,0.642,78.41,70.19
423,Gedanke,noun,thought,A1,0.473,78.42,70.22
424,steigen,verb,"to ascend, to climb, to rise",A1,0.369,78.44,70.25
425,klingen,verb,to ring; to clink,A1,0.165,78.46,70.27
426,Hund,noun,"dog, hound",A1,0.2,78.48,70.28
427,Ort,noun,"place, location, point, position",A1,0.149,78.5,70.3
428,hart,adverb,hard (with force or effort),A1,0.219,78.52,70.31
429,Doktor,noun,doctor,A1,0.296,78.53,70.34
430,Luft,noun,"air, atmosphere",A1,0.34,78.55,70.36
431,plötzlich,adverb,"suddenly, abruptly",A1,0.521,78.56,70.41
432,Geist,noun,spirit,A1,0.436,78.57,70.44
433,Tisch,noun,table (a piece of furniture with a relatively deep surface at roughly waist or knee level),A1,0.498,78.58,70.48
434,lieb,adjective,lovable; dear; darling; sweet; good-hearted; kind,A1,0.28,78.59,70.51
435,Seele,noun,soul,A1,0.525,78.6,70.55
436,he,interjection,An exclamation to get attention; hey,A1,0.107,78.62,70.56
437,entschuldigen,verb,to excuse (something or (formal) someone),A1,0.06,78.66,70.57
438,rot,adjective,red (colour),A1,0.378,78.67,70.6
439,anfangen,verb,to begin; to commence,A1,0.209,78.69,70.61
440,ansehen,verb,"to look at, to have a look at (taking in information in doing so)",A1,0.283,78.71,70.63
441,Stück,noun,"one, item, piece, unit(of something countable; often untranslated in English)",A1,0.258,78.72,70.65
442,zwar,adverb,"Signals a following contrary clause, which is usually introduced with aber (“but”)",A1,0.325,78.73,70.68
443,manch,determiner,many a; many; some,A1,0.569,78.74,70.73
444,herum,adverb,"about, around.",A1,0.212,78.76,70.74
445,gewiss,adverb,"certainly, indeed",A1,0.624,78.77,70.79
446,Moment,noun,moment,A1,0.053,78.81,70.8
447,Haar,noun,"hair (a singular hair, not limited to the head)",A1,0.327,78.82,70.82
448,zweite,adjective,second,A1,0.245,78.83,70.85
449,fünf,number,five (numerical value represented by the Arabic numeral 5; or describing a set with five elements),A1,0.145,78.85,70.86
450,erfahren,verb,"to find out, learn, to come to know",A1,0.21,78.87,70.88
451,laut,preposition,according to,A1,0.313,78.88,70.9
452,wohnen,verb,"to live, reside, dwell (to remain or be settled permanently, or for a considerable time)",A1,0.178,78.9,70.91
453,Fenster,noun,window,A1,0.49,78.91,70.95
454,fehlen,verb,for there to be a lack [with dative ‘to someone/something’ and an (+ dative) ‘of something’],A1,0.194,78.93,70.97
455,Mund,noun,mouth of a person,A1,0.387,78.94,71.01
456,Blick,noun,"glance, look",A1,0.608,78.94,71.05
457,springen,verb,to spring; to leap; to bounce,A1,0.431,78.95,71.09
458,Kraft,noun,"power, force, strength",A1,0.322,78.97,71.11
459,früher,adjective,"former, erstwhile, previous (that which once was, but no longer is)",A1,0.2,78.98,71.13
460,Geschäft,noun,"shop, store",A1,0.232,79,71.15
461,halb,adverb,"a half-hour before, thirty minutes before (used with the number of the following hour)",A1,0.336,79.01,71.18
462,Schuld,noun,debt,A1,0.123,79.03,71.19
463,Schiff,noun,ship,A1,0.163,79.05,71.2
464,kaufen,verb,"to buy, to purchase",A1,0.094,79.07,71.21
465,raus,adverb,"out, out of there, outta there",A1,0.023,79.13,71.21
466,froh,adjective,glad; (momentarily) happy; (momentarily) cheerful,A1,0.272,79.15,71.22
467,Ehre,noun,honour,A1,0.288,79.16,71.25
468,hübsch,adjective,"pretty, handsome",A1,0.178,79.18,71.26
469,deshalb,adverb,"therefore; for that (reason), because of that",A1,0.117,79.2,71.27
470,Brief,noun,letter (written message),A1,0.325,79.21,71.3
471,damals,adverb,"at that time (in the past); at the time, then",A1,0.27,79.22,71.32
472,außer,preposition,except; besides; apart from,A1,0.233,79.24,71.33
473,brechen,verb,to break,A1,0.206,79.25,71.35
474,Monat,noun,"month (division of a year, usually one twelfth ≈ 30 days)",A1,0.071,79.28,71.35
475,wert,adjective,"worth, worthy of",A1,0.214,79.3,71.37
476,aussehen,verb,"to look, seem",A1,0.155,79.31,71.38
477,wohin,adverb,"where to, whither",A1,0.171,79.33,71.4
478,verdienen,verb,"to make money, to earn",A1,0.147,79.35,71.41
479,Eltern,noun,parents,A1,0.154,79.37,71.42
480,Pferd,noun,horse,A1,0.251,79.38,71.44
481,ne,particle,right?; is it?; is it not?; tag question,A1,0.052,79.41,71.45
482,Waffe,noun,"weapon, arm",A1,0.074,79.44,71.45
483,Muss,noun,"necessity, a must",A1,0.998,79.45,71.53
484,offen,adverb,openly,A1,0.271,79.46,71.55
485,passiert,adjective,sieved,A1,0.022,79.52,71.56
486,Feuer,noun,fire (chemical process),A1,0.175,79.53,71.57
487,bezahlen,verb,"to pay, give money",A1,0.094,79.55,71.58
488,drin,adverb,inside,A1,0.082,79.58,71.59
489,stolz,adjective,proud,A1,0.252,79.59,71.61
490,kümmern,verb,"to take care, to look after",A1,0.114,79.62,71.61
491,zuerst,adverb,"first, firstly",A1,0.155,79.63,71.62
492,lustig,adjective,"funny, humorous",A1,0.216,79.65,71.64
493,Boden,noun,"ground, soil",A1,0.279,79.66,71.66
494,fürchten,verb,to fear,A1,0.255,79.67,71.68
495,Krieg,noun,"war, warfare",A1,0.065,79.69,71.69
496,Tier,noun,animal (see usage notes below),A1,0.266,79.7,71.71
497,dumm,adjective,"dumb, stupid",A1,0.136,79.72,71.72
498,Ahnung,noun,"anticipation, inkling",A1,0.066,79.75,71.73
499,indem,conjunction,by (indicates a means),A1,0.606,79.76,71.78
500,Person,noun,"person, individual",A1,0.188,79.77,71.79
501,wenigstens,adverb,at least,A1,0.264,79.78,71.81
502,Stelle,noun,"location, spot (specific location in space, relevant in context but typically otherwise unmarked)",A1,0.204,79.79,71.83
503,Menge,noun,quantity,A1,0.151,79.81,71.84
504,Verlangen,noun,"desire, yearning, longing",A1,0.274,79.82,71.86
505,völlig,adverb,completely,A1,0.173,79.83,71.88
506,leiden,verb,"to suffer, to experience pain, sorrow, etc.",A1,0.194,79.84,71.9
507,wahrscheinlich,adverb,"probably, likely",A1,0.139,79.86,71.92
508,heiraten,verb,to marry; to get married,A1,0.092,79.88,71.92
509,heraus,adverb,out of (in the direction of the speaker); out over here; out from there,A1,0.29,79.89,71.95
510,weinen,verb,"to weep, cry",A1,0.277,79.9,71.97
511,überall,adverb,everywhere,A1,0.163,79.91,71.98
512,woher,adverb,"where from, whence",A1,0.076,79.94,71.99
513,dauern,verb,"to last, to continue, to persist (for a period of time)",A1,0.121,79.95,72
514,Weise,noun,"way, manner",A1,0.348,79.96,72.03
515,nachdem,conjunction,after (that),A1,0.201,79.97,72.04
516,gehören,verb,"to belong to, be the property of",A1,0.174,79.99,72.06
517,Schule,noun,school,A1,0.157,80.01,72.07
518,besonders,adverb,"especially, particularly",A1,0.219,80.02,72.08
519,kalt,adverb,as base rent; excluding utilities,A1,0.224,80.03,72.1
520,aufs,contraction,"auf + das, on the, upon the, onto the",A1,0.262,80.04,72.12
521,erreichen,verb,to reach (to attain by stretching),A1,0.186,80.05,72.14
522,Lächeln,noun,smile (facial expression),A1,0.447,80.06,72.17
523,verdammt,adjective,damned,A1,0.031,80.1,72.18
524,passen,verb,to fit,A1,0.073,80.12,72.18
525,seltsam,adverb,"strangely, weirdly, oddly, curiously",A1,0.205,80.13,72.2
526,dunkel,adjective,dark,A1,0.337,80.14,72.23
527,ewig,adverb,"eternally, for ever",A1,0.288,80.15,72.25
528,weniger,adverb,less,A1,0.235,80.16,72.27
529,Kleid,noun,"dress, gown (kind of woman's garment)",A1,0.267,80.17,72.29
530,Arzt,noun,"doctor, physician (male or of unspecified gender) (without necessarily having a postgraduate degree)",A1,0.113,80.18,72.3
531,Volk,noun,"people, nation, folk, tribe, race (group united by culture, history, descent, and/or language)",A1,0.345,80.19,72.33
532,Bein,noun,"leg of a person, animal, or object",A1,0.19,80.2,72.34
533,Wald,noun,forest; woods; woodland,A1,0.351,80.21,72.37
534,merken,verb,"to notice, to sense, to be able to tell (the difference in a situation or state)",A1,0.207,80.22,72.39
535,treiben,verb,to drive (e.g. livestock); to propel; to force,A1,0.274,80.23,72.41
536,tagen,verb,to meet,A1,0.199,80.24,72.42
537,leise,adverb,"quietly, softly, low",A1,0.346,80.25,72.45
538,Papa,noun,"dad, daddy",A1,0.108,80.27,72.46
539,trotzdem,conjunction,although,A1,0.133,80.28,72.47
540,rücken,verb,"to move, to push",A1,0.301,80.29,72.5
541,fassen,verb,"to gird, to surround, to confine into a form",A1,0.264,80.3,72.52
542,schrecklich,adverb,"awfully, terribly",A1,0.188,80.31,72.53
543,schließen,verb,to shut; to close; to shut down,A1,0.161,80.33,72.54
544,Spaß,noun,fun,A1,0.075,80.35,72.55
545,weh,adjective,"sore, painful",A1,0.174,80.36,72.56
546,darin,adverb,"in it, in that, therein",A1,0.337,80.37,72.59
547,Laden,noun,"shop, store",A1,0.126,80.38,72.6
548,krank,adjective,"ill, sick (in bad health)",A1,0.156,80.4,72.61
549,Kampf,noun,"struggle, battle, campaign, fight",A1,0.106,80.41,72.62
550,Freude,noun,"joy, delight, glee",A1,0.401,80.42,72.65
551,Wein,noun,wine,A1,0.258,80.43,72.67
552,leider,adverb,unfortunately,A1,0.087,80.44,72.68
553,neben,preposition,"next to, beside, alongside, adjacent to, near, near to",A1,0.353,80.45,72.71
554,zehn,number,ten (numerical value represented in Arabic numerals as 10),A1,0.114,80.46,72.72
555,Bewegung,noun,motion,A1,0.219,80.47,72.73
556,tanzen,verb,to dance,A1,0.155,80.48,72.75
557,ehrlich,adjective,"honest, truthful, true",A1,0.084,80.5,72.75
558,Glaube,noun,"belief, faith",A1,0.098,80.52,72.76
559,verkaufen,verb,to sell (something in exchange for money),A1,0.084,80.54,72.77
560,ah,interjection,expressing understanding,A1,0.039,80.56,72.77
561,drehen,verb,to turn,A1,0.133,80.57,72.79
562,behalten,verb,"to keep, to retain (money, items, etc. in one's possession)",A1,0.115,80.59,72.79
563,schießen,verb,to shoot; to fire,A1,0.076,80.61,72.8
564,küssen,verb,to kiss,A1,0.196,80.62,72.82
565,Schmerz,noun,"physical pain, ache (practically, as a sensation)",A1,0.223,80.63,72.83
566,jener,determiner,"that, that one",A1,0.736,80.63,72.9
567,hassen,verb,to hate,A1,0.073,80.65,72.9
568,erscheinen,verb,to appear,A1,0.431,80.66,72.93
569,traurig,adverb,sadly,A1,0.205,80.67,72.95
570,bekannt,adjective,"known, familiar",A1,0.224,80.68,72.97
571,dran,adverb,to be in a particular situation,A1,0.05,80.7,72.97
572,irgendein,determiner,some; any,A1,0.174,80.71,72.99
573,reich,adjective,"rich, wealthy (having a lot of money and possessions)",A1,0.249,80.72,73.01
574,fremd,adjective,strange,A1,0.373,80.73,73.04
575,wunderbar,adjective,wonderful,A1,0.144,80.74,73.05
576,erhalten,verb,"to receive (something given, sent, won, etc.)",A1,0.209,80.75,73.06
577,Reise,noun,"journey, travel",A1,0.198,80.76,73.08
578,Feind,noun,"enemy, fiend, foe (male or of unspecified gender)",A1,0.21,80.77,73.1
579,Gast,noun,guest,A1,0.279,80.78,73.12
580,danach,adverb,"after it, after that; thereafter (formal), afterwards",A1,0.121,80.79,73.13
581,nett,adjective,nice; friendly; likable,A1,0.031,80.82,73.13
582,Onkel,noun,uncle,A1,0.128,80.84,73.14
583,bestehen,verb,"to succeed, to pass (an exam)",A1,0.178,80.85,73.15
584,Versuch,noun,attempt,A1,0.086,80.87,73.16
585,sorgen,verb,"to take care of, to care for, to look after",A1,0.103,80.88,73.17
586,benutzen,verb,to make use (of),A1,0.067,80.9,73.17
587,Finger,noun,finger,A1,0.239,80.91,73.19
588,willkommen,adjective,welcome (received with gladness),A1,0.093,80.93,73.2
589,Schritt,noun,"step, footstep (a single instance of walking)",A1,0.342,80.93,73.22
590,Prinz,noun,prince,A1,0.439,80.94,73.26
591,Zug,noun,procession (larger group moving together along a common route),A1,0.205,80.95,73.28
592,Idee,noun,idea,A1,0.039,80.98,73.28
593,verrückt,adjective,"crazy, mad",A1,0.029,81.01,73.28
594,Ohr,noun,ear (the auditory organ),A1,0.254,81.02,73.3
595,Ruf,noun,"call, shout, cry",A1,0.074,81.04,73.31
596,aufhören,verb,to stop; to quit; to cease,A1,0.069,81.06,73.31
597,verzeihen,verb,to forgive; to pardon; to excuse,A1,0.117,81.07,73.32
598,Nachricht,noun,"news, piece of news, notification",A1,0.071,81.09,73.33
599,vorstellen,verb,"to introduce (someone), to present",A1,0.122,81.1,73.34
600,nötig,adverb,urgently,A1,0.17,81.11,73.35
601,erwartet,adjective,"expected, anticipated",A1,0.149,81.12,73.36
602,heilig,adjective,holy,A1,0.251,81.13,73.38
603,Sonne,noun,"a sun (a star, especially when being the center of a solar system)",A1,0.288,81.14,73.4
604,Baum,noun,tree,A1,0.261,81.15,73.43
605,sechs,number,six (numerical value represented by the Arabic numeral 6; or describing a set with six elements),A1,0.09,81.16,73.43
606,drüben,adverb,over (implying some distance from the listener),A1,0.124,81.17,73.44
607,sobald,conjunction,"as soon as, by the time",A1,0.139,81.18,73.45
608,Weile,noun,"while (uncertain duration of time, period of time)",A1,0.163,81.19,73.47
609,ehe,conjunction,"before, ere",A1,0.201,81.2,73.49
610,stimmt,interjection,correct,A1,0.018,81.24,73.49
611,Hölle,noun,hell,A1,0.096,81.26,73.5
612,Antwort,noun,answer,A1,0.173,81.27,73.51
613,Meister,noun,master,A1,0.17,81.28,73.52
614,Ziel,noun,target,A1,0.134,81.29,73.53
615,bereits,adverb,already,A1,0.085,81.3,73.54
616,Gefahr,noun,"danger, hazard, peril, risk",A1,0.12,81.31,73.55
617,Traum,noun,dream,A1,0.172,81.32,73.57
618,Schweigen,noun,silence (the lack of any sound or the lack of spoken communication),A1,0.397,81.33,73.6
619,drücken,verb,"to press, to push (a button/key; a finger or other object against something)",A1,0.223,81.33,73.62
620,acht,number,eight (numerical value represented by the Arabic numeral 8; or describing a set with eight elements),A1,0.15,81.34,73.63
621,stören,verb,"to disturb, to interfere, to bother",A1,0.108,81.36,73.64
622,bemerken,verb,"to notice, to perceive",A1,0.338,81.36,73.67
623,Wohnung,noun,domicile; dwelling; lodging; abode; accommodation (any place someone lives in for a span of time longer than a holiday),A1,0.123,81.37,73.67
624,Held,noun,hero,A1,0.233,81.38,73.69
625,lügen,verb,to tell a lie; to lie (to intentionally give false information),A1,0.082,81.4,73.7
626,persönlich,adverb,"personally, in person",A1,0.125,81.41,73.71
627,nämlich,adverb,"namely, specifically; used to further specify what exactly one was talking about just before",A1,0.261,81.41,73.73
628,Meinung,noun,opinion,A1,0.099,81.42,73.74
629,bauen,verb,"to build, to construct",A1,0.094,81.44,73.75
630,Körper,noun,"body (of a person, animal, etc.)",A1,0.104,81.45,73.76
631,greifen,verb,to grab; to grasp; to grip (something),A1,0.184,81.46,73.77
632,verstecken,verb,to conceal,A1,0.064,81.47,73.78
633,erwarten,verb,"to expect, to consider likely",A1,0.115,81.49,73.79
634,Berg,noun,"a mountain, hill",A1,0.241,81.49,73.8
635,besorgen,verb,"to deal, to manage, to procure",A1,0.079,81.51,73.81
636,wild,adjective,"wild (of animals, etc.)",A1,0.248,81.52,73.83
637,kosten,verb,to cost,A1,0.104,81.53,73.84
638,dritte,adjective,third,A1,0.235,81.53,73.86
639,träumen,verb,to dream,A1,0.165,81.54,73.87
640,Ei,noun,egg (all biological senses),A1,0.173,81.55,73.89
641,dagegen,conjunction,"however, by contrast, on the other hand",A1,0.162,81.56,73.9
642,brachte,verb,"brought; preterite of bringen, bring.",A1,0.277,81.57,73.92
643,dahin,adverb,there (to or into that place; thither),A1,0.203,81.57,73.94
644,blau,adjective,blue (color/colour),A1,0.203,81.58,73.95
645,besondere,adjective,"special, particular, extraordinary",A1,0.153,81.59,73.96
646,raten,verb,to advise; to recommend,A1,0.167,81.6,73.98
647,anziehen,verb,senses related to dressing,A1,0.128,81.61,73.99
648,hierher,adverb,"to here, here (to this place), hither",A1,0.068,81.63,73.99
649,bieten,verb,to offer; to present,A1,0.169,81.63,74.01
650,Präsident,noun,"president; chairman, chairperson, chair (male or of unspecified gender)",A1,0.139,81.64,74.02
651,hinaus,adverb,out (away from the speaker),A1,0.424,81.65,74.05
652,Tat,noun,deed,A1,0.206,81.66,74.07
653,Lust,noun,desire; the wish to do or have something,A1,0.243,81.66,74.09
654,Stein,noun,"stone, rock",A1,0.223,81.67,74.1
655,Nähe,noun,"nearness, closeness",A1,0.165,81.68,74.12
656,Geheimnis,noun,secret,A1,0.116,81.69,74.12
657,Gesellschaft,noun,company (presence of other people in general),A1,0.241,81.69,74.14
658,Plan,noun,project,A1,0.063,81.71,74.15
659,richten,verb,"to direct, to point",A1,0.254,81.72,74.17
660,handeln,verb,to act; to take action,A1,0.153,81.73,74.18
661,unmöglich,adverb,impossibly,A1,0.121,81.74,74.19
662,heben,verb,to lift; to raise,A1,0.31,81.74,74.21
663,Kirche,noun,church (building),A1,0.198,81.75,74.23
664,Gold,noun,"gold (chemical element, Au)",A1,0.211,81.76,74.25
665,stehlen,verb,to steal,A1,0.069,81.77,74.25
666,übel,adjective,"bad, evil, terrible (not good, in quality or morality)",A1,0.189,81.78,74.27
667,übrig,adjective,"rest of, remaining",A1,0.236,81.78,74.29
668,Schlaf,noun,sleep (condition of reduced consciousness),A1,0.126,81.79,74.3
669,beweisen,verb,to prove,A1,0.083,81.8,74.31
670,frisch,adverb,freshly,A1,0.199,81.81,74.32
671,gefährlich,adjective,"dangerous, hazardous",A1,0.114,81.82,74.33
672,Zukunft,noun,future,A1,0.09,81.84,74.34
673,Hoffnung,noun,"hope, the belief or expectation that something wished for can or will really happen.",A1,0.189,81.84,74.35
674,müde,adjective,tired,A1,0.163,81.85,74.37
675,vorher,adverb,"beforehand, previously, before (a previously mentioned point or action)",A1,0.119,81.86,74.37
676,Kaffee,noun,coffee (beverage made by infusing coffee beans in hot water),A1,0.074,81.87,74.38
677,übrigens,adverb,"apart from that, else, for the rest, for everything else",A1,0.222,81.88,74.4
678,Raum,noun,space,A1,0.133,81.89,74.41
679,Schlag,noun,"blow, hit",A1,0.114,81.9,74.42
680,irgendwo,adverb,somewhere,A1,0.085,81.91,74.43
681,deutsch,adjective,German (of or pertaining to the German people),A1,0.134,81.92,74.44
682,Wille,noun,will,A1,0.14,81.93,74.46
683,Glas,noun,glass,A1,0.169,81.93,74.47
684,befinden,verb,to occupy a place; to be located; to be situated,A1,0.203,81.94,74.49
685,Gespräch,noun,"conversation, chat, talk (conversing between people or parties, either for pleasure or for business)",A1,0.212,81.95,74.5
686,reiten,verb,to ride; to do horseriding,A1,0.256,81.95,74.53
687,hinten,adverb,behind; in the back,A1,0.136,81.96,74.53
688,Richter,noun,judge,A1,0.172,81.97,74.55
689,kämpfen,verb,"to fight, to struggle",A1,0.077,81.98,74.56
690,ha,interjection,Expresses laughter.,A1,0.096,81.99,74.57
691,Hallo,noun,"hullabaloo, cheering (often welcoming or celebratory)",A1,0.004,82.08,74.57
692,überlegen,verb,"to think about, to think over",A1,0.108,82.09,74.57
693,Polizei,noun,police; law enforcement,A1,0.025,82.11,74.58
694,erlauben,verb,to allow; to permit,A1,0.144,82.12,74.59
695,erschrecken,verb,to be frightened; to be startled,A1,0.273,82.13,74.61
696,Nase,noun,nose,A1,0.178,82.13,74.62
697,Zeug,noun,"stuff, gear, equipment",A1,0.093,82.15,74.63
698,gegenüber,preposition,opposite,A1,0.199,82.15,74.64
699,ändern,verb,"to change, to alter",A1,0.112,82.17,74.65
700,annehmen,verb,"to assume, to suppose (as given)",A1,0.125,82.18,74.66
701,Lied,noun,song (musical composition sung with vocals or vocal lyrics),A1,0.177,82.19,74.67
702,schwören,verb,to swear; to take an oath,A1,0.073,82.2,74.68
703,Wand,noun,"wall, partition",A1,0.232,82.2,74.7
704,Vogel,noun,a bird,A1,0.153,82.21,74.71
705,Schicksal,noun,"destiny, fate (irresistible power that predetermines events)",A1,0.185,82.22,74.72
706,wenden,verb,to turn something so as to cook or roast it from both sides,A1,0.382,82.22,74.76
707,Weib,noun,"woman, broad",A1,0.418,82.22,74.79
708,Brust,noun,chest,A1,0.321,82.23,74.82
709,Königin,noun,queen,A1,0.197,82.23,74.83
710,Bank,noun,bench (which people sit on); pew,A1,0.129,82.24,74.84
711,anrufen,verb,"to call, to ring (by telephone or similar technology)",A1,0.021,82.27,74.84
712,Tasche,noun,bag,A1,0.112,82.28,74.85
713,Fehler,noun,"fault, error, mistake",A1,0.104,82.3,74.86
714,wirken,verb,"to function, to be effective, to work",A1,0.065,82.31,74.87
715,gebären,verb,"to give birth; referring to labour, or to labour and pregnancy as a whole",A1,0.129,82.31,74.88
716,Klasse,noun,a class; a grouping,A1,0.076,82.33,74.88
717,wiederholen,verb,to repeat (to do or say again),A1,0.223,82.33,74.9
718,Gericht,noun,court (of justice),A1,0.143,82.34,74.91
719,beruhigen,verb,"to calm down, to quiet",A1,0.085,82.35,74.92
720,besitzen,verb,"to own, to possess",A1,0.154,82.36,74.93
721,wachsen,verb,to grow,A1,0.162,82.36,74.94
722,Karte,noun,"card (flat, normally rectangular piece of stiff paper, plastic etc.)",A1,0.047,82.38,74.95
723,zwingen,verb,to force; to compel; to make (someone do something),A1,0.129,82.39,74.96
724,besuchen,verb,"to visit, to see",A1,0.101,82.4,74.96
725,nicken,verb,to nod (one's head),A1,0.155,82.4,74.98
726,Hut,noun,hat,A1,0.213,82.41,74.99
727,reißen,verb,to tear (something); to pull (something) apart; to rip (something),A1,0.128,82.42,75
728,Problem,noun,problem,A1,0.006,82.47,75
729,furchtbar,adverb,"terribly, awfully",A1,0.122,82.48,75.01
730,Schlüssel,noun,a key,A1,0.067,82.49,75.02
731,Tor,noun,"gate, archway (passageway covered by an arch, particularly one made of masonry)",A1,0.18,82.49,75.03
732,Wunsch,noun,wish (an act of wishing),A1,0.134,82.5,75.05
733,klug,adjective,"intelligent, prudent, wise, smart, clever",A1,0.17,82.51,75.06
734,sieben,number,seven (numerical value represented by the Arabic numeral 7; or describing a set with seven elements),A1,0.091,82.52,75.07
735,nachdenken,verb,"to think, to reflect, to ponder",A1,0.089,82.53,75.07
736,Hals,noun,neck,A1,0.188,82.53,75.09
737,freundlich,adjective,"friendly, benign",A1,0.198,82.54,75.11
738,Soldat,noun,soldier,A1,0.086,82.55,75.12
739,Dienst,noun,service,A1,0.193,82.56,75.13
740,genießen,verb,to enjoy (an experience); to relish; to savor,A1,0.139,82.56,75.14
741,irgendwie,adverb,somehow (in some unknown or unspecific manner),A1,0.039,82.58,75.15
742,verraten,verb,"to betray, to be disloyal to",A1,0.088,82.59,75.15
743,teilen,verb,"to split, to share",A1,0.084,82.6,75.16
744,Wahl,noun,"choice, selection",A1,0.082,82.61,75.17
745,grün,adjective,green (in colour),A1,0.215,82.62,75.18
746,statt,preposition,"instead of, in one's stead",A1,0.197,82.62,75.2
747,rennen,verb,"to run; to race; to sprint (said of competing sportsmen, animals etc.)",A1,0.083,82.63,75.2
748,Rest,noun,"rest, remainder, remnant",A1,0.06,82.65,75.21
749,Besuch,noun,"visit, call",A1,0.11,82.65,75.22
750,gelten,verb,to be valid; to count; to hold true,A1,0.186,82.66,75.23
751,Major,noun,major,A1,0.139,82.67,75.24
752,übernehmen,verb,"to take over (a task, a position, responsibilities from someone else)",A1,0.058,82.68,75.25
753,Meer,noun,sea,A1,0.201,82.68,75.26
754,verfolgen,verb,"to pursue, to follow, to hunt",A1,0.092,82.69,75.27
755,Blume,noun,"flower, blossom (colorful, conspicuous reproductive structure(s) of an angiosperm)",A1,0.16,82.7,75.28
756,Vergnügen,noun,"joy, pleasure",A1,0.169,82.71,75.3
757,Frieden,noun,peace,A1,0.115,82.71,75.31
758,schenken,verb,"to give as a present, to gift",A1,0.14,82.72,75.32
759,Armer,noun,"pauper, poor person (male or of unspecified gender)",A1,0.199,82.73,75.33
760,Opfer,noun,sacrifice,A1,0.063,82.74,75.34
761,Rolle,noun,"roll, reel, spool",A1,0.109,82.75,75.35
762,Erinnerung,noun,memory (recall); remembrance,A1,0.097,82.76,75.36
763,klopfen,verb,"to knock, to rap (strike rather gently with something hard)",A1,0.142,82.76,75.37
764,Anfang,noun,"start, beginning, origin (spatially or temporally)",A1,0.096,82.77,75.37
765,Gesetz,noun,"law, legal act, bill, statute",A1,0.101,82.78,75.38
766,jagen,verb,to hunt (game),A1,0.101,82.79,75.39
767,walten,verb,"to rule, to exercise control",A1,0.185,82.79,75.41
768,Garten,noun,"garden, yard (grounds at the front or back of a house)",A1,0.268,82.8,75.43
769,voller,preposition,full of,A1,0.13,82.81,75.43
770,solange,conjunction,as long as,A1,0.074,82.82,75.44
771,Spur,noun,trace (rest of something that indicates its former presence; (by extension) any small amount),A1,0.085,82.83,75.45
772,herein,adverb,in (in the direction of the speaker),A1,0.17,82.83,75.46
773,melden,verb,"to report, to inform (about an incident or condition)",A1,0.066,82.84,75.47
774,Regen,noun,rain,A1,0.165,82.85,75.48
775,hinein,adverb,in (away from the speaker),A1,0.358,82.85,75.51
776,zählen,verb,to count (to determine the number of objects in a group),A1,0.056,82.86,75.51
777,daher,adverb,"from there, thence",A1,0.206,82.87,75.53
778,jemals,adverb,ever,A1,0.083,82.88,75.54
779,heiß,adjective,hot (having a high temperature),A1,0.077,82.89,75.54
780,Hochzeit,noun,"wedding, marriage (a ceremony in which people are married and/or a celebration thereof)",A1,0.093,82.9,75.55
781,entscheiden,verb,"to decide, to make a decision",A1,0.055,82.91,75.55
782,Dorf,noun,village (rural habitation of size between a hamlet and a town),A1,0.163,82.91,75.57
783,ans,contraction,"an + das, on(to) the, to the",A1,0.126,82.92,75.58
784,Schaden,noun,damage; harm,A1,0.108,82.93,75.59
785,warm,adjective,warm; mildly hot,A1,0.168,82.93,75.6
786,Mut,noun,courage; bravery,A1,0.244,82.94,75.62
787,Beispiel,noun,example,A1,0.109,82.95,75.63
788,Zeichen,noun,"sign, token (object representing something)",A1,0.154,82.95,75.64
789,zerstören,verb,"to destroy, demolish, devastate, eliminate",A1,0.045,82.97,75.64
790,überzeugen,verb,to convince,A1,0.119,82.97,75.65
791,riechen,verb,to smell (something); to sniff (something),A1,0.072,82.98,75.66
792,Mörder,noun,"murderer, assassin, assassinator, killer, slayer (male or of unspecified gender)",A1,0.058,82.99,75.66
793,atmen,verb,to breathe,A1,0.089,83,75.67
794,bewegt,adjective,"agitated, disturbed",A1,0.134,83.01,75.68
795,schließlich,adverb,"in the end, finally, eventually",A1,0.152,83.01,75.7
796,wozu,adverb,"for what reason, to what purpose, what for, why?",A1,0.1,83.02,75.71
797,Schluss,noun,"end, ending, conclusion, finish",A1,0.065,83.03,75.71
798,spüren,verb,"to sense, to detect, to perceive",A1,0.08,83.04,75.72
799,Lage,noun,"location, position",A1,0.147,83.05,75.73
800,Intensivstation,noun,intensive care unit,A1,0.194,83.05,75.74
801,fein,adjective,"fine (not rough, coarse, or thick)",A1,0.209,83.06,75.76
802,Gang,noun,"motion, movement, progress, way, going",A1,0.189,83.07,75.78
803,weder,conjunction,neither (only with noch),A1,0.141,83.07,75.79
804,komisch,adjective,"comedic, comic, pertaining to comedy",A1,0.05,83.08,75.79
805,vorsichtig,adverb,carefully,A1,0.059,83.1,75.8
806,tausend,number,thousand,A1,0.174,83.1,75.81
807,zahlen,verb,to pay,A1,0.067,83.12,75.81
808,Büro,noun,office (room for working),A1,0.036,83.13,75.82
809,allerdings,adverb,"but, however",A1,0.154,83.14,75.83
810,Katze,noun,"house cat, Felis silvestris catus",A1,0.115,83.14,75.84
811,Nutzen,noun,benefit,A1,0.069,83.15,75.84
812,Verbindung,noun,connection,A1,0.093,83.16,75.85
813,Lady,noun,"lady, Lady (British noblewoman)",A1,0.076,83.17,75.86
814,außerdem,adverb,"in addition; furthermore, besides",A1,0.057,83.18,75.86
815,schwach,adjective,"weak, lacking in strength",A1,0.144,83.19,75.87
816,gesund,adjective,healthy (enjoying health),A1,0.108,83.2,75.88
817,Mord,noun,murder,A1,0.054,83.21,75.89
818,bisher,adverb,"so far, until now, as yet",A1,0.096,83.22,75.89
819,Gefängnis,noun,"prison, jail (building)",A1,0.052,83.23,75.9
820,Graf,noun,count (a member of the German nobility),A1,0.552,83.23,75.94
821,trennen,verb,"to separate, sever, part, disunite, uncouple, segregate, unjoin, disjoin",A1,0.101,83.24,75.95
822,leer,adjective,empty,A1,0.138,83.24,75.96
823,schneiden,verb,to cut; to carve; to slice,A1,0.124,83.25,75.97
824,erleben,verb,to experience,A1,0.112,83.26,75.98
825,Entschuldigung,noun,apology (expression of remorse or regret),A1,0.03,83.28,75.98
826,erfüllen,verb,to fulfill / fulfil,A1,0.169,83.28,75.99
827,worauf,adverb,whereupon; upon which; on which; to which; at which; above which; upon.,A1,0.144,83.29,76.01
828,menschlich,adjective,"human, manlike",A1,0.107,83.3,76.01
829,lösen,verb,to loose; to loosen; to detach; to remove,A1,0.091,83.3,76.02
830,fern,preposition,far away from something,A1,0.219,83.31,76.04
831,aufnehmen,verb,"to pick up, lift up",A1,0.082,83.32,76.04
832,begreifen,verb,"to grasp fully; to comprehend; to conceive, to fathom",A1,0.208,83.32,76.06
833,befehlen,verb,to command; to order (someone to do something),A1,0.149,83.33,76.07
834,fröhlich,adjective,merry; cheerful; either as a character trait or fleetingly,A1,0.254,83.33,76.1
835,Madame,noun,madam,A1,0.061,83.34,76.1
836,Witz,noun,joke,A1,0.043,83.35,76.11
837,Wunder,noun,miracle,A1,0.118,83.36,76.12
838,ähnlich,adjective,"similar, alike, resembling",A1,0.137,83.37,76.13
839,See,noun,lake,A1,0.154,83.37,76.14
840,hauen,verb,"to thrust, slash (with a weapon)",A1,0.049,83.38,76.14
841,dienen,verb,to serve,A1,0.149,83.39,76.15
842,beobachten,verb,"to watch, to observe",A1,0.091,83.4,76.16
843,Lehrer,noun,"one who teaches, teacher, instructor, especially a school teacher",A1,0.125,83.4,76.17
844,obwohl,conjunction,"although, though, while",A1,0.068,83.41,76.18
845,wovon,adverb,"about what, what ... about",A1,0.052,83.42,76.18
846,einsam,adjective,"lonely, lone",A1,0.183,83.43,76.19
847,brennen,verb,to burn; to light on fire,A1,0.133,83.43,76.2
848,Leiche,noun,"dead body, corpse, cadaver, carcass",A1,0.082,83.45,76.21
849,Papier,noun,paper (material),A1,0.128,83.45,76.22
850,gucken,verb,"to look, to direct one's gaze at something",A1,0.047,83.46,76.22
851,scharf,adjective,"sharp; able to cut (of a knife, edge)",A1,0.164,83.47,76.24
852,Großvater,noun,grandfather,A1,0.17,83.47,76.25
853,diesmal,adverb,this time,A1,0.104,83.48,76.26
854,Wind,noun,wind; the movement of air usually caused by convection or differences of air pressure,A1,0.169,83.48,76.27
855,Punkt,noun,dot (marking an abbreviation),A1,0.062,83.49,76.28
856,Professor,noun,professor,A1,0.098,83.5,76.28
857,Gelegenheit,noun,"opportunity, chance, instance, occasion",A1,0.171,83.51,76.3
858,stürzen,verb,"to fall down, to drop, to tumble",A1,0.221,83.51,76.31
859,Rat,noun,"advice, counsel",A1,0.109,83.52,76.32
860,kehren,verb,to sweep,A1,0.223,83.52,76.34
861,packen,verb,"to pack (luggage, a bundle, etc.); to get packed",A1,0.087,83.53,76.35
862,danken,verb,to thank,A1,0.034,83.53,76.36
863,beten,verb,to pray,A1,0.114,83.54,76.37
864,ankommen,verb,to arrive,A1,0.102,83.55,76.38
865,Mark,noun,a usually fortified area along the border; marches,A1,0.096,83.55,76.38
866,schuldig,adjective,"[with genitive] guilty (of), culpable",A1,0.095,83.56,76.39
867,umbringen,verb,"to kill, to murder, to do away with",A1,0.015,83.58,76.39
868,stoßen,verb,to push; to shove; to thrust,A1,0.224,83.59,76.41
869,derjenige,determiner,he (who),A1,0.092,83.6,76.42
870,rund,adjective,"round, rounded, similar as in English, especially (circular)",A1,0.12,83.6,76.43
871,links,adverb,on the left,A1,0.106,83.61,76.43
872,Wesen,noun,"creature, being",A1,0.217,83.61,76.45
873,Geschenk,noun,"present, gift",A1,0.058,83.62,76.46
874,passieren,verb,to happen,A1,0.03,83.64,76.46
875,Sicherheit,noun,certainty,A1,0.066,83.65,76.46
876,entfernt,adjective,distant,A1,0.094,83.65,76.47
877,entdecken,verb,"to discover, to spot, to learn for the first time",A1,0.093,83.66,76.48
878,verschieden,adjective,different,A1,0.13,83.67,76.49
879,begleiten,verb,to accompany,A1,0.125,83.67,76.5
880,zufrieden,adjective,"satisfied, content, happy (with something)",A1,0.129,83.68,76.51
881,wiedersehen,verb,"to see again, to meet again",A1,0.051,83.69,76.51
882,Möglichkeit,noun,"possibility, likelihood",A1,0.085,83.7,76.52
883,Natur,noun,nature (the natural world),A1,0.097,83.7,76.53
884,Stern,noun,a star; a small luminous dot that can be seen on the night sky,A1,0.132,83.71,76.54
885,Engel,noun,angel,A1,0.128,83.71,76.55
886,Hof,noun,"yard, court, courtyard (open area by a house or enclosed by houses)",A1,0.254,83.71,76.57
887,beschäftigt,adjective,busy (engaged in an activity; doing a great deal),A1,0.092,83.72,76.58
888,fliehen,verb,to flee; to escape,A1,0.105,83.73,76.59
889,Beziehung,noun,"relation, relationship, connection",A1,0.058,83.74,76.59
890,Million,noun,million (10⁶),A1,0.028,83.75,76.6
891,binden,verb,"to bind, to tie, to fasten something by means of a string etc.",A1,0.132,83.76,76.61
892,verbringen,verb,"to spend, to pass (a period of time)",A1,0.046,83.77,76.61
893,mitnehmen,verb,to take with; to carry along,A1,0.049,83.78,76.61
894,leisten,verb,"to perform (a task, work), to accomplish (a task), to achieve (a goal)",A1,0.12,83.79,76.62
895,dick,adjective,thick,A1,0.121,83.79,76.63
896,verhalten,verb,to behave,A1,0.093,83.8,76.64
897,aufstehen,verb,to get up (move from a sitting or lying position to a standing position; to get up from bed),A1,0.105,83.8,76.65
898,Richtung,noun,direction,A1,0.099,83.81,76.65
899,Stuhl,noun,a chair (to sit on),A1,0.192,83.82,76.67
900,jedenfalls,adverb,in any case,A1,0.071,83.82,76.67
901,Zeitung,noun,newspaper,A1,0.079,83.83,76.68
902,ergeben,verb,"to yield, produce",A1,0.085,83.84,76.68
903,gemeinsam,adverb,"together, jointly",A1,0.065,83.85,76.69
904,daraus,adverb,"out of it, out of that, of it",A1,0.118,83.85,76.7
905,gleichen,verb,"to be like, to equal to, to resemble",A1,0.127,83.86,76.71
906,Preis,noun,price,A1,0.069,83.86,76.71
907,bewegen,verb,to motivate; to persuade; to prompt (someone or something to do something); to make,A1,0.108,83.87,76.72
908,Befehl,noun,"command, order",A1,0.065,83.88,76.72
909,einander,pronoun,Reciprocal pronoun of all three plural persons: each other,A1,0.245,83.89,76.74
910,deswegen,adverb,"therefore, because of that",A1,0.029,83.9,76.74
911,herzlich,adjective,"warm, warmhearted, friendly, affectionate, cordial",A1,0.14,83.91,76.75
912,unterwegs,adverb,"on one’s way, underway, en route, in transit, going, travelling",A1,0.053,83.92,76.76
913,Gegend,noun,"area, region",A1,0.1,83.92,76.77
914,zurückkehren,verb,to return,A1,0.115,83.93,76.77
915,empfinden,verb,to feel; to sense; to perceive something through the sense organs.,A1,0.208,83.93,76.79
916,beinahe,adverb,almost; nearly,A1,0.235,83.93,76.81
917,Flasche,noun,bottle; flask; flagon,A1,0.079,83.94,76.82
918,Zustand,noun,condition; state,A1,0.158,83.94,76.83
919,Schuh,noun,shoe,A1,0.06,83.95,76.83
920,aufhalten,verb,"to halt, to stop; to hold (someone) up",A1,0.044,83.96,76.84
921,Majestät,noun,majesty,A1,0.079,83.97,76.84
922,Sekunde,noun,A unit of time; a second.,A1,0.025,83.98,76.84
923,heim,adverb,"home, to the house; always as a direction, thus never in the sense of at home",A1,0.116,83.99,76.85
924,Kunst,noun,art,A1,0.198,84,76.87
925,begegnen,verb,"meet, to encounter, to come across",A1,0.148,84,76.88
926,schlimmer,adverb,worse,A1,0.06,84.01,76.88
927,Schatten,noun,"shade, shadow",A1,0.2,84.01,76.9
928,tatsächlich,adverb,"actually, really, indeed",A1,0.055,84.02,76.9
929,Pause,noun,"pause, break",A1,0.134,84.03,76.91
930,mächtig,adjective,"powerful, mighty",A1,0.143,84.03,76.92
931,mehrere,determiner,"multiple, several; more than one; a number of",A1,0.177,84.03,76.94
932,Firma,noun,"A company, a business.",A1,0.062,84.04,76.94
933,Schulter,noun,shoulder,A1,0.22,84.05,76.96
934,rechts,adverb,on the right,A1,0.1,84.05,76.97
935,bestellen,verb,"to order (e.g. food at a restaurant, items for delivery)",A1,0.084,84.06,76.98
936,mitten,adverb,In the middle.,A1,0.128,84.06,76.98
937,interessant,adverb,interestingly,A1,0.039,84.07,76.99
938,wählen,verb,"to choose, to select",A1,0.062,84.08,76.99
939,Gute,noun,good (as a noun),A1,0.064,84.09,77
940,Lauf,noun,"run, race",A1,0.059,84.1,77.01
941,nieder,adverb,down,A1,0.317,84.1,77.03
942,unternehmen,verb,to undertake,A1,0.084,84.1,77.04
943,Hotel,noun,hotel,A1,0.041,84.11,77.04
944,Rose,noun,rose,A1,0.088,84.12,77.05
945,Ring,noun,"a ring (a circular and hollow object, made of any material.)",A1,0.107,84.13,77.06
946,Schwert,noun,sword,A1,0.12,84.13,77.07
947,Jacke,noun,jacket,A1,0.014,84.15,77.07
948,feiern,verb,to celebrate; to party; applicable from the most solemn to the most revelrous forms,A1,0.088,84.16,77.07
949,unglaublich,adverb,"unbelievably, incredibly (to an extent not to be believed)",A1,0.031,84.17,77.07
950,verdammen,verb,"to condemn, to doom",A1,0.021,84.19,77.07
951,Ecke,noun,"corner, edge",A1,0.111,84.19,77.08
952,unschuldig,adjective,innocent,A1,0.068,84.2,77.09
953,Nummer,noun,number; see usage notes below,A1,0.016,84.22,77.09
954,langen,verb,"to reach, to grab",A1,0.17,84.22,77.11
955,Beweis,noun,proof,A1,0.042,84.23,77.11
956,vergeben,verb,to forgive,A1,0.087,84.24,77.12
957,selten,adverb,seldom; rarely,A1,0.141,84.24,77.13
958,Knie,noun,knee,A1,0.153,84.25,77.14
959,lebendig,adjective,"living, alive, animate",A1,0.15,84.25,77.15
960,behandeln,verb,to treat (medicinally),A1,0.061,84.26,77.16
961,Farbe,noun,colour,A1,0.103,84.26,77.17
962,Fluss,noun,river,A1,0.114,84.27,77.18
963,miteinander,adverb,together (with),A1,0.079,84.27,77.18
964,ausgehen,verb,to go out (to leave one's abode to go to public places),A1,0.068,84.28,77.19
965,längst,adverb,"long ago, long",A1,0.115,84.29,77.2
966,großartig,adverb,"magnificently, greatly",A1,0.022,84.3,77.2
967,Schloss,noun,"lock, padlock (something used for fastening)",A1,0.435,84.3,77.24
968,Toter,noun,cadaver; corpse (male or of unspecified gender),A1,0.025,84.31,77.24
969,Benehmen,noun,"behavior, demeanor, manners, conduct",A1,0.09,84.32,77.25
970,Ton,noun,clay,A1,0.185,84.32,77.26
971,Pass,noun,"pass, mountain pass",A1,0.04,84.33,77.26
972,Schüler,noun,"pupil, student, schoolboy (male or of unspecified gender)",A1,0.109,84.34,77.28
973,ärgern,verb,"to annoy, to make angry",A1,0.082,84.34,77.28
974,Zahn,noun,tooth,A1,0.099,84.35,77.29
975,empfangen,verb,"to receive (e.g. a present, a guest)",A1,0.167,84.35,77.31
976,merkwürdig,adjective,"strange, odd",A1,0.116,84.36,77.32
977,wach,adjective,awake,A1,0.064,84.37,77.32
978,berühren,verb,to touch,A1,0.108,84.37,77.33
979,einladen,verb,to invite,A1,0.052,84.38,77.33
980,schmecken,verb,to taste,A1,0.071,84.39,77.34
981,lächerlich,adjective,"ridiculous, risible, laughable",A1,0.086,84.39,77.34
982,Freiheit,noun,freedom,A1,0.112,84.4,77.35
983,Messer,noun,knife,A1,0.084,84.4,77.36
984,erheben,verb,"to raise, lift (one's arm, voice, glass, etc.)",A1,0.274,84.41,77.38
985,zurückkommen,verb,to return (to come back),A1,0.044,84.42,77.38
986,Küche,noun,kitchen (room),A1,0.07,84.42,77.39
987,vollkommen,adverb,completely,A1,0.127,84.43,77.4
988,Kaiser,noun,emperor (ruler of certain monarchies; highest monarch),A1,0.203,84.43,77.42
989,geschlossen,adjective,shut; closed; locked,A1,0.104,84.43,77.42
990,trotz,preposition,"in spite of, despite",A1,0.184,84.44,77.44
991,grüßen,verb,to greet,A1,0.127,84.44,77.45
992,Lüge,noun,lie,A1,0.051,84.45,77.45
993,deutlich,adverb,"distinctly, clearly",A1,0.182,84.45,77.47
994,seufzen,verb,"to sigh (to exhale audibly, usually accompanied by a deep, nasal sound of the voice)",A1,0.099,84.46,77.48
995,direkt,adverb,directly,A1,0.019,84.47,77.48
996,Bier,noun,beer (alcoholic beverage fermented from starch material; a serving of this beverage),A1,0.044,84.48,77.48
997,unterhalten,verb,to maintain,A1,0.077,84.49,77.49
998,kennenlernen,verb,"to get to know, become acquainted with (a person, place, thing); to befriend.",A1,0.034,84.5,77.49
999,betreffen,verb,"to concern, to have to do with or affect a business of",A1,0.128,84.5,77.5
1000,Gewalt,noun,strong or violent force,A1,0.123,84.51,77.51
1001,Streit,noun,"quarrel, dispute, fight, argument",A2,0.105,84.51,77.52
1002,wütend,adverb,"angrily, furiously",A2,0.046,84.52,77.52
1003,schieben,verb,to push; to shove,A2,0.135,84.52,77.53
1004,geheim,adjective,"secret, clandestine",A2,0.07,84.53,77.54
1005,bereiten,verb,"to prepare, to make",A2,0.09,84.53,77.55
1006,drinnen,adverb,inside (a room),A2,0.082,84.54,77.55
1007,mitbringen,verb,"to bring (along, with), to accompany",A2,0.06,84.55,77.56
1008,Tante,noun,aunt,A2,0.051,84.55,77.56
1009,trauen,verb,to trust,A2,0.082,84.56,77.57
1010,Beste,noun,best (female person),A2,0.065,84.57,77.57
1011,hi,interjection,hi,A2,0.006,84.6,77.57
1012,gewöhnlich,adverb,usually,A2,0.158,84.6,77.58
1013,vergehen,verb,"to pass, to elapse",A2,0.149,84.6,77.6
1014,ebenso,adverb,"equally, as much",A2,0.164,84.61,77.61
1015,beenden,verb,"to finish, to complete, to (bring/put to an) end",A2,0.037,84.62,77.61
1016,Umstand,noun,circumstance (an event; a fact; a particular incident),A2,0.125,84.62,77.62
1017,Erfolg,noun,success,A2,0.082,84.63,77.63
1018,ernsthaft,adverb,seriously,A2,0.081,84.63,77.63
1019,schade,adjective,"a pity, a shame; bummer; unfortunate; disappointing",A2,0.069,84.64,77.64
1020,aufgeben,verb,to give up on (one's efforts),A2,0.045,84.65,77.64
1021,kochen,verb,"to cook, to prepare food (chiefly hot food for lunch or supper)",A2,0.049,84.66,77.65
1022,rauchen,verb,"to smoke, give off smoke",A2,0.068,84.66,77.65
1023,Bescheid,noun,"notification, information",A2,0.06,84.67,77.65
1024,Hunger,noun,hunger,A2,0.051,84.68,77.66
1025,Treppe,noun,stairs,A2,0.184,84.68,77.67
1026,Vermögen,noun,"ability, capacity",A2,0.216,84.68,77.69
1027,dadurch,adverb,"through it, through that",A2,0.137,84.69,77.7
1028,zuletzt,adverb,finally; lastly; in the end,A2,0.178,84.69,77.72
1029,teuer,adjective,"expensive, dear (high in price)",A2,0.074,84.7,77.72
1030,rühren,verb,"to stir, to mix (a liquid or powder as in cooking)",A2,0.146,84.7,77.73
1031,Großmutter,noun,grandmother,A2,0.111,84.7,77.74
1032,herrlich,adjective,fantastic; marvelous; wonderful; splendid; glorious; lovely,A2,0.227,84.71,77.76
1033,Verzeihung,noun,forgiveness,A2,0.055,84.72,77.76
1034,Regel,noun,rule,A2,0.031,84.73,77.77
1035,dennoch,adverb,"anyhow, however",A2,0.156,84.73,77.78
1036,lauter,adverb,"in a sincere, honorable, correct manner; with integrity",A2,0.125,84.73,77.79
1037,blöd,adjective,"stupid, dim-witted",A2,0.021,84.75,77.79
1038,Nachbar,noun,neighbour,A2,0.092,84.75,77.8
1039,gering,adjective,"little, low",A2,0.161,84.75,77.81
1040,irgendetwas,pronoun,anything,A2,0.008,84.78,77.81
1041,Mond,noun,moon (a natural satellite that is orbiting its corresponding planet),A2,0.118,84.78,77.82
1042,versetzen,verb,"to move, displace, especially something heavy or fixed",A2,0.176,84.78,77.84
1043,fressen,verb,to eat; to feed on; to devour,A2,0.06,84.79,77.84
1044,Braut,noun,bride; a woman taking part in a marriage,A2,0.116,84.79,77.85
1045,Charlotte,noun,charlotte (dessert consisting of sponge cake filled with fruit),A2,0.223,84.8,77.87
1046,befreien,verb,"to free (make free), to liberate",A2,0.07,84.8,77.87
1047,Zweifel,noun,doubt,A2,0.122,84.81,77.88
1048,Boot,noun,boat,A2,0.038,84.82,77.89
1049,Interesse,noun,interest (attention and concern),A2,0.065,84.82,77.89
1050,überlassen,verb,to relinquish something (definitely or temporarily) and leave it to someone else,A2,0.084,84.83,77.9
1051,vermissen,verb,to miss (to feel the absence of someone or something),A2,0.016,84.84,77.9
1052,Nachmittag,noun,afternoon (part of the day from about 2 p.m. to about 6 p.m.),A2,0.097,84.85,77.91
1053,enden,verb,to end,A2,0.066,84.85,77.91
1054,irren,verb,"to wander (to move around aimlessly, being unable to find where one wants to go)",A2,0.06,84.86,77.92
1055,hundert,number,one hundred,A2,0.103,84.86,77.93
1056,Gnade,noun,"grace, mercy, graciousness",A2,0.137,84.87,77.94
1057,schützen,verb,to defend; to protect; to shelter; to guard,A2,0.053,84.87,77.94
1058,Feld,noun,"field (plot of open land, especially one used to grow crops)",A2,0.152,84.88,77.95
1059,sauber,adjective,clean,A2,0.045,84.88,77.96
1060,Grab,noun,grave,A2,0.107,84.89,77.96
1061,Entscheidung,noun,decision,A2,0.04,84.9,77.97
1062,streng,adverb,"strictly, very much",A2,0.155,84.9,77.98
1063,desto,conjunction,the (forming the parallel comparative with je),A2,0.133,84.91,77.99
1064,Folge,noun,sequence,A2,0.092,84.91,78
1065,Dach,noun,roof,A2,0.058,84.92,78
1066,schämen,verb,"to be ashamed or (less often) embarrassed, bashful",A2,0.114,84.92,78.01
1067,fordern,verb,"to demand, ask",A2,0.093,84.92,78.02
1068,gnädig,adjective,gracious,A2,0.278,84.93,78.04
1069,ergreifen,verb,"to seize, capture",A2,0.238,84.93,78.06
1070,Prozess,noun,lawsuit,A2,0.13,84.93,78.07
1071,verbergen,verb,"to hide, conceal from view, keep secret",A2,0.144,84.94,78.08
1072,verbrennen,verb,"to burn (to cause to be consumed by fire or flames), to incinerate, to combust",A2,0.055,84.94,78.09
1073,Mittel,noun,"agent, appliance",A2,0.117,84.95,78.1
1074,Vorsicht,noun,"caution, cautiousness",A2,0.043,84.95,78.1
1075,herkommen,verb,"to come over, come here (towards the speaker)",A2,0.04,84.96,78.1
1076,warnen,verb,"to warn, to caution, to admonish",A2,0.044,84.97,78.11
1077,sammeln,verb,to gather; to assemble; to collect,A2,0.092,84.97,78.11
1078,eng,adjective,"narrow, tight",A2,0.108,84.98,78.12
1079,Schulden,noun,debt,A2,0.044,84.99,78.12
1080,schwierig,adjective,"difficult, hard, challenging, tough",A2,0.039,84.99,78.13
1081,link,adjective,left,A2,0.092,85,78.13
1082,entschieden,adverb,"firmly, decidedly, determinedly, boldly, ambitiously",A2,0.074,85,78.14
1083,davor,adverb,in front of that/it,A2,0.066,85.01,78.15
1084,einzeln,adjective,single; lone,A2,0.133,85.01,78.16
1085,Frühstück,noun,breakfast,A2,0.08,85.02,78.16
1086,Kunde,noun,"customer, patron, client",A2,0.073,85.02,78.17
1087,nachher,adverb,"in a short while (in the near future, but not more than a few hours)",A2,0.111,85.03,78.18
1088,bestätigen,verb,"to confirm, to corroborate",A2,0.064,85.03,78.18
1089,Verbrechen,noun,"a felony, indictable offence",A2,0.053,85.04,78.18
1090,schwimmen,verb,to swim (to use swimming motions to move in the water),A2,0.074,85.04,78.19
1091,weisen,verb,to indicate; to show,A2,0.167,85.05,78.21
1092,Senator,noun,senator,A2,0.175,85.05,78.22
1093,verändert,adjective,"changed, altered",A2,0.047,85.06,78.22
1094,verheiratet,adjective,married (in a state of marriage; having a wife or a husband),A2,0.041,85.07,78.23
1095,Prinzessin,noun,"princess (female member of a royal family other than a queen, especially a daughter or granddaughter)",A2,0.065,85.07,78.23
1096,Mühe,noun,"effort, difficulty",A2,0.123,85.08,78.24
1097,fürs,contraction,"für + das, for the",A2,0.081,85.08,78.24
1098,bedenken,verb,"to consider, bethink",A2,0.159,85.09,78.26
1099,Rock,noun,skirt (garment),A2,0.138,85.09,78.27
1100,schätzen,verb,to estimate; to guess; to suppose; to assume,A2,0.03,85.1,78.27
1101,Güte,noun,"kindness, clemency",A2,0.053,85.1,78.27
1102,heftig,adjective,"fierce, heavy, vehement, severe, violent",A2,0.231,85.11,78.29
1103,ungefähr,adverb,about,A2,0.059,85.11,78.3
1104,waschen,verb,to wash,A2,0.069,85.12,78.3
1105,Zufall,noun,"chance, coincidence, randomness",A2,0.09,85.12,78.31
1106,Band,noun,"tape, ribbon",A2,0.099,85.13,78.32
1107,Gutes,noun,something good,A2,0.054,85.13,78.32
1108,zufällig,adverb,accidentally,A2,0.062,85.14,78.33
1109,Staat,noun,"country, state (politically constituted legal person wielding absolute power of a population and territory)",A2,0.054,85.14,78.33
1110,Szene,noun,scene; tableau,A2,0.086,85.15,78.34
1111,Kuss,noun,kiss,A2,0.085,85.15,78.34
1112,stöhnen,verb,"to moan, to groan, to grunt (to vocalize in a low, unarticulated manner, typically as an extension of exhaling)",A2,0.037,85.16,78.35
1113,ertragen,verb,"to bear, to stand, to endure, to take, to suffer, to tolerate, to handle",A2,0.087,85.16,78.35
1114,unbekannt,adjective,"unknown, unbeknownst",A2,0.115,85.17,78.36
1115,Grenze,noun,border,A2,0.057,85.17,78.37
1116,interessiert,adjective,interested,A2,0.018,85.18,78.37
1117,lauten,verb,"to be, to read (have a certain content or wording)",A2,0.062,85.19,78.37
1118,hell,adjective,"clear, bright, light",A2,0.192,85.19,78.39
1119,betrügen,verb,to deceive (usually deliberately),A2,0.063,85.2,78.39
1120,Form,noun,shape,A2,0.096,85.2,78.4
1121,Sturm,noun,"A strong, blustery wind; gust; gale; squall",A2,0.13,85.21,78.41
1122,vorwärts,adverb,"forwards, forward; onwards, onward",A2,0.085,85.21,78.42
1123,Hälfte,noun,half; fifty percent of something,A2,0.075,85.22,78.42
1124,Fahrt,noun,drive,A2,0.061,85.22,78.43
1125,golden,adjective,golden; gold (made of gold),A2,0.131,85.22,78.44
1126,egal,adverb,no matter,A2,0.004,85.26,78.44
1127,Leib,noun,by semantic narrowing more specifically,A2,0.257,85.26,78.46
1128,gewöhnen,verb,"to accustom, inure, make accustomed",A2,0.092,85.26,78.47
1129,Spiegel,noun,"mirror (smooth surface, usually made of glass with reflective material painted on the underside, that reflects light)",A2,0.147,85.27,78.48
1130,Inneres,noun,"inside, interior; bowels, innards",A2,0.213,85.27,78.5
1131,Tee,noun,"tea (drink made by infusing parts of a plant, especially leaves or buds of Camellia sinensis, in water)",A2,0.047,85.27,78.5
1132,Loch,noun,hole; perforation,A2,0.049,85.28,78.51
1133,zuvor,adverb,"before, previously",A2,0.057,85.29,78.51
1134,Achtung,noun,attention,A2,0.069,85.29,78.51
1135,wechseln,verb,"to change, to exchange",A2,0.077,85.3,78.52
1136,Chef,noun,"boss, chief",A2,0.03,85.3,78.52
1137,schnappen,verb,to snap (with one’s mouth),A2,0.023,85.31,78.52
1138,eh,particle,"anyway, in any case",A2,0.09,85.32,78.53
1139,verhaften,verb,"to stop moving and instead stick, or make or become bound (more or less literally or figuratively)",A2,0.025,85.33,78.53
1140,beeilen,verb,"to hurry, to hasten, to rush",A2,0.016,85.34,78.53
1141,nachts,adverb,"at night, nights",A2,0.058,85.34,78.54
1142,Oberst,noun,colonel,A2,0.075,85.35,78.55
1143,Schwein,noun,"swine, pig",A2,0.026,85.36,78.55
1144,unbedingt,adverb,"absolutely, definitely",A2,0.033,85.36,78.55
1145,Absicht,noun,intention,A2,0.081,85.37,78.56
1146,einst,adverb,"once, formerly (a long time ago)",A2,0.232,85.37,78.58
1147,soweit,conjunction,as far as (in the scope in which something holds),A2,0.05,85.38,78.58
1148,Fisch,noun,fish (cold-blooded vertebrates living in water),A2,0.075,85.38,78.58
1149,Not,noun,"need, imminence",A2,0.233,85.39,78.6
1150,vorbereiten,verb,to prepare,A2,0.041,85.39,78.61
1151,Kreis,noun,circle,A2,0.137,85.39,78.62
1152,angenehm,adjective,"pleasant, pleasing",A2,0.123,85.4,78.63
1153,Bauer,noun,farmer (male or of unspecified gender),A2,0.109,85.4,78.63
1154,überrascht,adjective,surprised,A2,0.045,85.41,78.64
1155,entlang,preposition,along; indicates location or movement,A2,0.065,85.41,78.64
1156,falls,conjunction,"if, in the event that",A2,0.064,85.43,78.64
1157,ruhen,verb,to rest; to sleep,A2,0.128,85.43,78.66
1158,Haut,noun,"skin, hide of a person, animal or (part of a) plant",A2,0.048,85.44,78.66
1159,jedoch,conjunction,but,A2,0.146,85.44,78.67
1160,Lippe,noun,lip,A2,0.174,85.44,78.69
1161,bewahren,verb,"to keep, to preserve (to maintain the condition of)",A2,0.09,85.45,78.69
1162,tränen,verb,"to water (due to irritation, pain, etc.)",A2,0.191,85.45,78.71
1163,womit,adverb,"with what, what…with",A2,0.092,85.45,78.71
1164,wahnsinnig,adverb,"incredibly, awfully",A2,0.065,85.46,78.72
1165,zuhören,verb,to listen,A2,0.062,85.46,78.72
1166,brav,adjective,"good, well-behaved or reliable, obedient",A2,0.069,85.47,78.73
1167,senden,verb,to broadcast; to transmit,A2,0.08,85.47,78.74
1168,Liebling,noun,"darling, (my) dear",A2,0.022,85.48,78.74
1169,bilden,verb,"to form, to train",A2,0.131,85.48,78.75
1170,Pflicht,noun,duty,A2,0.098,85.49,78.76
1171,Schild,noun,"shield, buckler (defensive weapon)",A2,0.095,85.49,78.76
1172,edel,adjective,noble (having a noble character),A2,0.329,85.49,78.79
1173,Brot,noun,bread,A2,0.124,85.5,78.8
1174,Aufgabe,noun,"task, job",A2,0.039,85.5,78.8
1175,geändert,adjective,changed,A2,0.057,85.51,78.81
1176,Bericht,noun,"report, account, news story",A2,0.037,85.51,78.81
1177,bessern,verb,"to improve, to better",A2,0.05,85.52,78.82
1178,Schuss,noun,shot,A2,0.031,85.53,78.82
1179,Werk,noun,"work, achievement (the result of working)",A2,0.138,85.53,78.83
1180,Sprache,noun,"language (body of words, and set of methods of combining them)",A2,0.123,85.53,78.84
1181,Sonntag,noun,Sunday,A2,0.093,85.54,78.84
1182,Erfahrung,noun,experience (event through which empirical knowledge is gained),A2,0.056,85.54,78.85
1183,Schönheit,noun,"beauty, beautifulness",A2,0.111,85.55,78.86
1184,gelingen,verb,"to turn out well, to work out, to go smoothly, to succeed, to come off",A2,0.116,85.55,78.87
1185,hingehen,verb,"to go (elsewhere, to somewhere)",A2,0.049,85.55,78.87
1186,begehen,verb,"to commit, perpetrate (a crime, an offense)",A2,0.072,85.56,78.88
1187,offenbar,adverb,"apparently, evidently; obviously",A2,0.067,85.56,78.88
1188,sanft,adjective,gentle,A2,0.152,85.57,78.89
1189,entfernen,verb,to remove,A2,0.107,85.57,78.9
1190,Eindruck,noun,impression,A2,0.123,85.57,78.91
1191,englisch,adjective,English,A2,0.058,85.58,78.92
1192,Haufen,noun,"heap, hive, pile",A2,0.067,85.58,78.92
1193,Brücke,noun,bridge,A2,0.057,85.59,78.93
1194,Heiliger,noun,saint (male or of unspecified gender),A2,0.104,85.59,78.94
1195,Wunde,noun,"sore, wound",A2,0.088,85.59,78.94
1196,wofür,adverb,"for what, wherefore, why",A2,0.029,85.6,78.95
1197,Strand,noun,beach,A2,0.076,85.61,78.95
1198,reisen,verb,to travel,A2,0.073,85.61,78.96
1199,malen,verb,to paint (do paintwork),A2,0.115,85.61,78.97
1200,Sommer,noun,summer,A2,0.069,85.62,78.97
1201,Direktor,noun,principal (administrator of a school),A2,0.066,85.62,78.98
1202,verletzt,adjective,"hurt, injured",A2,0.016,85.63,78.98
1203,verwandeln,verb,"to turn, to change, to transform",A2,0.067,85.64,78.98
1204,Rache,noun,revenge; vengeance,A2,0.082,85.64,78.99
1205,Narr,noun,"jester, fool",A2,0.104,85.65,79
1206,Stock,noun,"stick (solid, wooden, broken off twig or small branch mostly clear of leaves or smaller twigs)",A2,0.091,85.65,79
1207,klingeln,verb,to ring (to produce the sound of a bell or a similar sound),A2,0.033,85.66,79.01
1208,Sünde,noun,sin,A2,0.1,85.66,79.02
1209,unterbrechen,verb,to interrupt,A2,0.12,85.66,79.02
1210,Reihe,noun,row,A2,0.087,85.67,79.03
1211,verwenden,verb,"to use, to employ, to apply",A2,0.043,85.67,79.03
1212,Höhe,noun,"height, altitude",A2,0.204,85.67,79.05
1213,General,noun,general (officer in any general rank),A2,0.019,85.68,79.05
1214,dringend,adjective,urgent,A2,0.063,85.69,79.06
1215,folgend,adjective,"following, subsequent",A2,0.074,85.69,79.06
1216,unglücklich,adverb,"unfortunately, unhappily, unluckily, haplessly, inartfully",A2,0.141,85.7,79.07
1217,schreiten,verb,"to stride; to step, to proceed",A2,0.127,85.7,79.09
1218,dichten,verb,"to compose (a text, almost always poetry)",A2,0.14,85.7,79.1
1219,Gebäude,noun,"building, edifice, structure",A2,0.035,85.71,79.1
1220,Christ,noun,a Christian,A2,0.044,85.71,79.1
1221,hässlich,adjective,ugly,A2,0.079,85.72,79.11
1222,Neues,noun,something new,A2,0.058,85.72,79.11
1223,hoffentlich,adverb,hopefully (it is hoped that),A2,0.026,85.73,79.12
1224,blind,adjective,blind,A2,0.059,85.74,79.12
1225,flüstern,verb,to whisper,A2,0.117,85.74,79.13
1226,studieren,verb,to study at university or college level; to be a student (of),A2,0.059,85.74,79.13
1227,Decke,noun,"any cloth or cushion used as a covering; a tablecloth, blanket, quilt, duvet, etc.",A2,0.061,85.75,79.14
1228,Geliebter,noun,"lover, romantic partner (male or of unspecified gender; now usually implying an affair, otherwise somewhat poetic)",A2,0.102,85.75,79.15
1229,Wolf,noun,wolf,A2,0.056,85.75,79.15
1230,pflegen,verb,providing care or service for someone/something,A2,0.211,85.76,79.17
1231,Fleisch,noun,flesh,A2,0.052,85.76,79.18
1232,geraten,verb,to turn out; to succeed; to thrive,A2,0.104,85.76,79.18
1233,Bürgermeister,noun,"mayor (leader of a city, male or unspecified sex)",A2,0.069,85.77,79.19
1234,Teller,noun,"plate, dish",A2,0.175,85.77,79.2
1235,verderben,verb,to deprive (someone) of (something); to rob (someone) of (some feeling),A2,0.13,85.77,79.21
1236,verliebt,adjective,"in love, enamored",A2,0.031,85.78,79.22
1237,Sieg,noun,victory,A2,0.067,85.78,79.22
1238,Vorstellung,noun,"idea, image, representation (the transcript, image, or picture of a visible object that is formed by the mind)",A2,0.052,85.79,79.23
1239,Wahnsinn,noun,"insanity, madness",A2,0.06,85.79,79.23
1240,Überraschung,noun,surprise,A2,0.043,85.8,79.23
1241,nähern,verb,"to approach, to come near",A2,0.089,85.8,79.24
1242,runter,adverb,"down, down here, downstairs (towards the speaker)",A2,0.004,85.83,79.24
1243,Sitz,noun,seat,A2,0.073,85.83,79.25
1244,Mitte,noun,middle,A2,0.11,85.84,79.26
1245,streiten,verb,to argue; to fight; to quarrel,A2,0.05,85.84,79.26
1246,jawohl,interjection,yes,A2,0.041,85.85,79.26
1247,untersuchen,verb,"to examine, investigate (inspect or study carefully in order to reach a conclusion)",A2,0.039,85.85,79.27
1248,scheiden,verb,to dissolve (a marriage); to divorce (a couple),A2,0.087,85.86,79.28
1249,sinken,verb,to sink; to submerge; to set; to fall from the sky,A2,0.19,85.86,79.29
1250,willen,postposition,only used in um … willen,A2,0.058,85.86,79.3
1251,Park,noun,"park (piece of ground in or near a city or town, enclosed and kept for ornament and recreation)",A2,0.035,85.87,79.3
1252,Träume,noun,dreams,A2,0.067,85.87,79.31
1253,Aufmerksamkeit,noun,"attention, mindfulness, attentiveness",A2,0.097,85.88,79.31
1254,Hauptmann,noun,captain (male [also female] or of unspecified sex; cf. Herr / Frau Hauptmann),A2,0.194,85.88,79.33
1255,Geräusch,noun,"noise, sound",A2,0.08,85.88,79.34
1256,fett,adjective,fat,A2,0.046,85.89,79.34
1257,üben,verb,"to practice, to drill, to train",A2,0.072,85.89,79.35
1258,entwickeln,verb,"to develop, to gain (strength, a skill, a talent, an ability, etc.; slowly, often by natural growth or practice)",A2,0.046,85.9,79.35
1259,drängen,verb,"to push, press (living beings, vehicles etc. in some direction)",A2,0.189,85.9,79.36
1260,wecken,verb,"to wake, to wake up",A2,0.071,85.9,79.37
1261,Fürst,noun,prince (sovereign prince),A2,0.227,85.9,79.39
1262,schleichen,verb,"to move in a quiet and inconspicuous manner, hence often slowly and/or ducked: to crawl, to sneak, to steal",A2,0.131,85.9,79.4
1263,dankbar,adjective,"grateful, thankful",A2,0.061,85.91,79.41
1264,Lieber,noun,dear,A2,0.064,85.91,79.41
1265,dorthin,adverb,"there (to that place), thither",A2,0.06,85.92,79.42
1266,Hose,noun,trousers,A2,0.029,85.92,79.42
1267,Lager,noun,"place where one sleeps, such as a bed or a spot in a barn, etc.",A2,0.07,85.93,79.42
1268,angehen,verb,"to concern, regard",A2,0.05,85.93,79.43
1269,peinlich,adjective,"woeful, hurtful",A2,0.07,85.94,79.43
1270,Elend,noun,misery,A2,0.155,85.94,79.45
1271,zittern,verb,"to shiver, to tremble, to vibrate",A2,0.208,85.94,79.46
1272,Ritter,noun,knight,A2,0.163,85.94,79.48
1273,klappen,verb,"to clap (make a soft clapping sound, particularly of something being closed)",A2,0.013,85.95,79.48
1274,Auftritt,noun,"appearance, look, comportment, behavior",A2,0.154,85.95,79.49
1275,gemein,adjective,"mean, nasty, wicked",A2,0.068,85.96,79.5
1276,wunderschön,adjective,"gorgeous, very beautiful",A2,0.017,85.97,79.5
1277,erledigt,adjective,completed,A2,0.023,85.98,79.5
1278,Kollege,noun,"colleague, coworker, workmate, fellow worker or member",A2,0.035,85.98,79.5
1279,Tanz,noun,dance,A2,0.059,85.99,79.51
1280,heimlich,adjective,"secret, clandestine (done or kept in secret)",A2,0.155,85.99,79.52
1281,Kugel,noun,"a ball, usually solid",A2,0.032,85.99,79.52
1282,Mantel,noun,"coat, overcoat (long jacket that covers at least part of the thighs)",A2,0.114,86,79.53
1283,Schau,noun,show,A2,0.054,86.01,79.53
1284,Donnerstag,noun,Thursday,A2,0.062,86.01,79.54
1285,Krankheit,noun,"sickness, illness",A2,0.057,86.01,79.54
1286,Geburtstag,noun,birthday,A2,0.026,86.02,79.55
1287,treu,adjective,loyal; faithful; true,A2,0.154,86.02,79.56
1288,versagen,verb,"to fail, to give out, to break down",A2,0.055,86.03,79.56
1289,nackt,adjective,naked,A2,0.061,86.03,79.57
1290,entweder,conjunction,either (only with oder),A2,0.033,86.04,79.57
1291,Engländer,noun,"an English person (male or of unspecified gender), an Englander; an Englishman",A2,0.034,86.04,79.57
1292,Offizier,noun,commissioned officer (soldier from the rank of lieutenant upwards),A2,0.077,86.05,79.58
1293,vorhin,adverb,"earlier (a short time ago, typically between minutes and a few hours ago)",A2,0.052,86.05,79.58
1294,Auftrag,noun,"assignment, job, mission",A2,0.044,86.06,79.59
1295,Insel,noun,"an island, an isle",A2,0.036,86.06,79.59
1296,heilen,verb,"to heal (an injury, sickness, etc.)",A2,0.056,86.07,79.59
1297,Diener,noun,servant,A2,0.122,86.07,79.61
1298,Vergangenheit,noun,the past (time),A2,0.047,86.07,79.61
1299,öffentlich,adjective,public,A2,0.062,86.08,79.61
1300,Regierung,noun,government/administration,A2,0.035,86.09,79.62
1301,Hexe,noun,"witch, sorceress",A2,0.045,86.09,79.62
1302,erwischen,verb,to catch (often referring to catching someone in an act of wrongdoing),A2,0.015,86.1,79.62
1303,nervös,adjective,nervous (anxious),A2,0.03,86.11,79.62
1304,irgend,adverb,at all (regarding possibility/ability),A2,0.173,86.11,79.64
1305,gestehen,verb,"to confess, to admit (to a mistake, misdeed, something embarrassing); to make known",A2,0.122,86.11,79.65
1306,vernichten,verb,to destroy; to ruin; to wreck,A2,0.042,86.12,79.65
1307,Faust,noun,fist,A2,0.244,86.12,79.67
1308,neun,number,nine (numerical value represented by the Arabic numeral 9; or this many dots: •••••••••),A2,0.037,86.12,79.67
1309,Ball,noun,"ball (round or roundish object, most commonly used in games)",A2,0.035,86.13,79.67
1310,gelb,adjective,yellow,A2,0.112,86.13,79.68
1311,Scherz,noun,joke,A2,0.056,86.14,79.69
1312,heulen,verb,"to howl, to whine (make a loud, usually high-pitched sound)",A2,0.07,86.14,79.69
1313,täglich,adverb,"every day, quotidianly",A2,0.101,86.14,79.7
1314,blicken,verb,to look (usually in a certain direction toward something),A2,0.312,86.14,79.73
1315,umsonst,adverb,"free of charge, gratis",A2,0.069,86.15,79.73
1316,Blatt,noun,leaf (green and flat organ of a plant),A2,0.155,86.15,79.75
1317,verflucht,adjective,cursed,A2,0.048,86.15,79.75
1318,bedienen,verb,to serve,A2,0.105,86.16,79.76
1319,Falle,noun,"trap, snare",A2,0.034,86.16,79.76
1320,Hütte,noun,"hut, cabin, shack, cottage (small house, typically built of light materials rather than stone)",A2,0.096,86.16,79.77
1321,Miss,noun,Miss (form of address),A2,0.011,86.19,79.77
1322,besprechen,verb,to discuss (to converse or debate concerning a particular topic),A2,0.04,86.19,79.77
1323,Zunge,noun,tongue (organ in the mouth),A2,0.09,86.2,79.78
1324,Winter,noun,winter,A2,0.082,86.2,79.79
1325,Unsinn,noun,nonsense,A2,0.032,86.2,79.79
1326,zwölf,number,twelve,A2,0.08,86.21,79.8
1327,erschießen,verb,to shoot dead,A2,0.011,86.22,79.8
1328,Druck,noun,pressure,A2,0.065,86.22,79.8
1329,aussprechen,verb,"to pronounce (sound a word, give it a pronunciation)",A2,0.117,86.23,79.81
1330,Theater,noun,theater (a place or building consisting of a stage and seats),A2,0.069,86.23,79.82
1331,Freundschaft,noun,friendship,A2,0.082,86.23,79.82
1332,entlassen,verb,to release,A2,0.057,86.24,79.83
1333,entgegen,adverb,against,A2,0.242,86.24,79.84
1334,streichen,verb,to stroke,A2,0.096,86.24,79.85
1335,Respekt,noun,"respect, regard, reverence",A2,0.033,86.25,79.85
1336,unterscheiden,verb,"to distinguish, differentiate",A2,0.065,86.25,79.86
1337,achten,verb,"to care about, to pay attention to",A2,0.075,86.25,79.87
1338,Ross,noun,horse,A2,0.093,86.26,79.87
1339,seitdem,conjunction,"since, ever since",A2,0.055,86.26,79.88
1340,verboten,adjective,"forbidden, prohibited, banned",A2,0.052,86.26,79.88
1341,voraus,adverb,"in front, ahead",A2,0.071,86.27,79.89
1342,worüber,adverb,generally corresponding to über was; mainly (over what),A2,0.034,86.27,79.89
1343,überleben,verb,to survive,A2,0.011,86.28,79.89
1344,soviel,conjunction,"as far as, so far as",A2,0.116,86.29,79.9
1345,Zeuge,noun,"witness, wit (slang), deponent, attestor (attester), voucher (male or of unspecified gender)",A2,0.042,86.29,79.91
1346,Mille,noun,"synonym of tausend (“thousand”), almost exclusively used of money: grand",A2,0.082,86.29,79.91
1347,Maul,noun,mouth of an animal,A2,0.042,86.3,79.92
1348,drohen,verb,to threaten,A2,0.07,86.3,79.92
1349,vieles,pronoun,"much, many things",A2,0.053,86.3,79.93
1350,Schwierigkeit,noun,"difficulty, problem",A2,0.027,86.31,79.93
1351,Erklärung,noun,explanation,A2,0.049,86.31,79.93
1352,braun,adjective,brown,A2,0.121,86.32,79.94
1353,Jude,noun,Jew,A2,0.06,86.32,79.95
1354,Kuh,noun,cow (female bovine animal at or near adulthood),A2,0.055,86.32,79.95
1355,normal,adverb,"ordinarily, normally, in a normal fashion",A2,0.007,86.34,79.95
1356,vernünftig,adjective,"reasonable, sensible",A2,0.057,86.34,79.96
1357,beißen,verb,to bite,A2,0.041,86.34,79.96
1358,Gabe,noun,"gift, present, donation, alms",A2,0.069,86.35,79.97
1359,begrüßen,verb,to welcome,A2,0.08,86.35,79.97
1360,einverstanden,adjective,"in agreement, agreeing",A2,0.036,86.36,79.98
1361,sauer,adjective,sour; acid; acidic,A2,0.02,86.36,79.98
1362,Bart,noun,beard,A2,0.103,86.37,79.99
1363,sichern,verb,to secure,A2,0.045,86.37,79.99
1364,rechnen,verb,"to count, reckon, calculate, compute",A2,0.059,86.37,80
1365,ungewöhnlich,adverb,unusually,A2,0.064,86.38,80
1366,bewusst,adjective,"conscious, aware",A2,0.063,86.38,80
1367,inzwischen,adverb,"since then, by now, in the meantime (contrasting between the current state and a known past state)",A2,0.077,86.38,80.01
1368,herrschen,verb,"to rule, to reign, to have dominion",A2,0.081,86.39,80.02
1369,Sack,noun,"sack (large bag, especially one made of fabric)",A2,0.063,86.39,80.02
1370,eilig,adjective,"speedy, hasty",A2,0.103,86.39,80.03
1371,täuschen,verb,to deceive,A2,0.061,86.4,80.04
1372,Strom,noun,a large river,A2,0.082,86.4,80.04
1373,betreten,verb,"to enter, to go or come into",A2,0.079,86.4,80.05
1374,prüfen,verb,"to check, test, examine",A2,0.053,86.41,80.05
1375,immerhin,adverb,after all (explaining another statement),A2,0.069,86.41,80.06
1376,anbieten,verb,"to offer, to provide",A2,0.032,86.41,80.06
1377,bücken,verb,"to bend down, to stoop",A2,0.275,86.41,80.08
1378,erfreuen,verb,to please; to make happy,A2,0.068,86.42,80.09
1379,Leidenschaft,noun,passion (powerful emotion),A2,0.125,86.42,80.1
1380,herausfinden,verb,to find out,A2,0.006,86.44,80.1
1381,Maschine,noun,machine,A2,0.023,86.44,80.1
1382,Wetter,noun,weather,A2,0.05,86.45,80.11
1383,weich,adjective,soft,A2,0.1,86.45,80.12
1384,doppelt,adjective,double (made up of two matching or complementary elements),A2,0.054,86.45,80.12
1385,Dieb,noun,thief (male or of unspecified gender),A2,0.043,86.46,80.12
1386,versichern,verb,to insure (to provide for compensation if some specified risk occurs),A2,0.086,86.46,80.13
1387,Kiste,noun,"chest, box",A2,0.042,86.46,80.13
1388,verbinden,verb,"to join, to combine, to connect, to interlink",A2,0.049,86.47,80.14
1389,Mittag,noun,"noon, midday, late morning, early afternoon (time from about 11 a.m. to 2 p.m)",A2,0.082,86.47,80.14
1390,Angelegenheit,noun,"matter, issue, affair",A2,0.066,86.47,80.15
1391,lehnen,verb,to lean,A2,0.155,86.48,80.16
1392,Rom,noun,"Rom (member of the Roma people), Romani",A2,0.044,86.48,80.17
1393,beschreiben,verb,to describe,A2,0.06,86.48,80.17
1394,Weihnachten,noun,Christmas,A2,0.02,86.49,80.17
1395,begraben,verb,to bury (also figuratively),A2,0.056,86.49,80.18
1396,Ausdruck,noun,"expression, term",A2,0.142,86.49,80.19
1397,wundern,verb,"to surprise, to astonish (of sights, behaviors, outcomes)",A2,0.088,86.5,80.2
1398,erledigen,verb,"to finish, to finalize, to complete, to see to, to handle with the result of completed work",A2,0.019,86.51,80.2
1399,erwähnen,verb,to mention [with accusative or (archaic) genitive ‘something’] (speak of something),A2,0.029,86.51,80.2
1400,Stimmung,noun,mood (emotional state),A2,0.098,86.51,80.21
1401,Wache,noun,"wake, vigil",A2,0.039,86.52,80.21
1402,anhalten,verb,to stop (cease moving),A2,0.038,86.52,80.21
1403,spinnen,verb,"to spin (a thread, a web, a cocoon, etc.)",A2,0.038,86.53,80.22
1404,Club,noun,club (association of members),A2,0.025,86.53,80.22
1405,einfallen,verb,"to occur (to someone), to come (to someone); to come to mind [with dative ‘to someone’]",A2,0.06,86.54,80.22
1406,Gruppe,noun,group,A2,0.024,86.54,80.22
1407,weshalb,adverb,why,A2,0.053,86.55,80.23
1408,beleidigen,verb,"to offend, to insult, to annoy",A2,0.056,86.55,80.23
1409,Unrecht,noun,injustice,A2,0.074,86.55,80.24
1410,Dämon,noun,demon,A2,0.018,86.56,80.24
1411,starren,verb,"to stare, to gaze",A2,0.103,86.56,80.25
1412,fließen,verb,to flow,A2,0.09,86.56,80.26
1413,Jungfrau,noun,"virgin (person, especially female, who has never had sexual intercourse)",A2,0.103,86.57,80.26
1414,Vorteil,noun,"advantage, plus, benefit, perk (of a job)",A2,0.08,86.57,80.27
1415,Schutz,noun,protection,A2,0.039,86.57,80.27
1416,brach,adjective,fallow,A2,0.139,86.58,80.29
1417,verhindern,verb,"to prevent, to inhibit, to keep (something) from happening.",A2,0.034,86.58,80.29
1418,liefern,verb,"to supply, provide",A2,0.043,86.59,80.29
1419,Gras,noun,grass (plant),A2,0.076,86.59,80.3
1420,durcheinander,adjective,"disordered, confused",A2,0.049,86.59,80.3
1421,Kapitel,noun,chapter (section of a text),A2,0.17,86.59,80.32
1422,französisch,adjective,French,A2,0.031,86.6,80.32
1423,tja,interjection,"well, hmm",A2,0.007,86.61,80.32
1424,matt,adjective,dull (not shiny),A2,0.058,86.62,80.32
1425,Eis,noun,ice,A2,0.029,86.62,80.33
1426,festhalten,verb,to hold on (to) (to keep another object or person in place),A2,0.042,86.63,80.33
1427,betrunken,adjective,"drunk, inebriated",A2,0.026,86.63,80.33
1428,fischen,verb,to fish,A2,0.083,86.63,80.34
1429,neugierig,adverb,"inquisitively, full of curiosity",A2,0.077,86.64,80.35
1430,hinterlassen,verb,"to leave, to leave behind (after leaving a location)",A2,0.021,86.64,80.35
1431,Jäger,noun,hunter (male or of unspecified sex),A2,0.071,86.65,80.35
1432,schlau,adjective,clever in a way that enables one to achieve one's goals; slightly sly or cunning,A2,0.036,86.65,80.36
1433,unheimlich,adverb,"extremely, incredibly; a strong intensifier",A2,0.068,86.65,80.36
1434,zusehen,verb,to watch,A2,0.05,86.66,80.37
1435,witzig,adjective,"funny, humorous, witty",A2,0.018,86.66,80.37
1436,Krankenhaus,noun,hospital,A2,0.009,86.68,80.37
1437,vermutlich,adverb,presumably,A2,0.031,86.68,80.37
1438,stets,adverb,always; constantly; the whole time (very often),A2,0.114,86.69,80.38
1439,Milch,noun,milk (white liquid produced by female mammals for their young to consume),A2,0.049,86.69,80.38
1440,ausziehen,verb,"to move out, to vacate",A2,0.046,86.69,80.39
1441,welch,determiner,what,A2,0.079,86.7,80.39
1442,ahnen,verb,"to suspect, guess",A2,0.089,86.7,80.4
1443,Flucht,noun,"escape, flight (act of fleeing)",A2,0.057,86.7,80.41
1444,wundervoll,adjective,wonderful,A2,0.028,86.71,80.41
1445,probieren,verb,to try,A2,0.019,86.71,80.41
1446,Unglück,noun,unhappiness; sorrow,A2,0.11,86.71,80.42
1447,Gewissen,noun,conscience (moral sense or faculty),A2,0.098,86.72,80.43
1448,aufwachen,verb,"to awake, to wake up",A2,0.024,86.72,80.43
1449,ermordet,adjective,murdered,A2,0.02,86.73,80.43
1450,abholen,verb,"to collect, pick up or fetch someone or something",A2,0.02,86.74,80.43
1451,Tatsache,noun,fact (a true observation),A2,0.029,86.74,80.43
1452,Grad,noun,degree,A2,0.051,86.74,80.44
1453,Huhn,noun,chicken,A2,0.037,86.75,80.44
1454,tauchen,verb,to dive,A2,0.036,86.75,80.44
1455,vierte,adjective,fourth,A2,0.077,86.75,80.45
1456,Verhältnis,noun,"relation, ratio",A2,0.165,86.76,80.47
1457,betrachten,verb,"to look at, to consider, to behold",A2,0.073,86.76,80.47
1458,Mädel,noun,girl (especially member of a group of female friends),A2,0.02,86.76,80.47
1459,pfeifen,verb,to whistle (with one's mouth or a whistle),A2,0.064,86.77,80.48
1460,ordentlich,adjective,"tidy, orderly",A2,0.096,86.77,80.49
1461,ebenfalls,adverb,"also, likewise, as well",A2,0.06,86.77,80.49
1462,Ärger,noun,"annoyance, anger",A2,0.043,86.78,80.49
1463,durchaus,adverb,"absolutely, fully, entirely",A2,0.182,86.78,80.51
1464,Schande,noun,"disgrace, infamy, dishonour",A2,0.059,86.78,80.51
1465,zweimal,adverb,twice,A2,0.046,86.79,80.51
1466,langweilig,adjective,"boring, dull, tedious",A2,0.029,86.79,80.52
1467,Mist,noun,manure (domestic animals’ excrement mixed with hay),A2,0.006,86.81,80.52
1468,abgesehen,adverb,"except (for), apart (from), other (than)",A2,0.041,86.81,80.52
1469,Flügel,noun,"wing (of a bird, airplane, etc.)",A2,0.101,86.81,80.53
1470,Jugend,noun,youth (quality or state of being young; part of life following childhood),A2,0.126,86.82,80.54
1471,Gehirn,noun,brain,A2,0.026,86.82,80.54
1472,behauptet,adjective,"asserted, alleged",A2,0.066,86.82,80.54
1473,Abendessen,noun,"dinner, supper (the evening meal)",A2,0.023,86.83,80.55
1474,absolut,adverb,absolutely,A2,0.009,86.84,80.55
1475,schütteln,verb,to shake,A2,0.165,86.84,80.56
1476,Vorschlag,noun,"suggestion, proposal (something proposed)",A2,0.041,86.84,80.56
1477,Spitze,noun,cusp,A2,0.082,86.85,80.57
1478,Marie,noun,money,A2,0.054,86.85,80.57
1479,Koffer,noun,a case; a suitcase or briefcase,A2,0.037,86.85,80.58
1480,berichten,verb,"to relate, to tell, to give an account of",A2,0.049,86.86,80.58
1481,wetten,verb,to bet,A2,0.04,86.86,80.58
1482,dünn,adjective,"thin, slender, slim",A2,0.079,86.87,80.59
1483,Gegenteil,noun,opposite (contrary thing),A2,0.053,86.87,80.59
1484,Rechnung,noun,"bill, restaurant bill",A2,0.042,86.87,80.6
1485,erwachsen,verb,"to grow up, to grow",A2,0.027,86.88,80.6
1486,halben,postposition,"for the sake of, because of",A2,0.063,86.88,80.6
1487,Bursche,noun,"boy, young man",A2,0.074,86.88,80.61
1488,Bedauern,noun,regret,A2,0.061,86.89,80.61
1489,verändern,verb,"to alter, to change",A2,0.034,86.89,80.62
1490,Don,noun,"don (honorific title, especially in Spain and Italy)",A2,0.02,86.9,80.62
1491,gen,preposition,in the direction; to; towards (a place or time),A2,0.104,86.9,80.63
1492,satt,adjective,"not hungry, satiated, full, done",A2,0.043,86.9,80.63
1493,albern,adjective,"goofy, silly, childish (inappropriately funny)",A2,0.053,86.91,80.63
1494,aufmachen,verb,"to open (a container, a door or window)",A2,0.034,86.91,80.64
1495,Quelle,noun,spring,A2,0.049,86.91,80.64
1496,irre,adjective,"crazy, insane, mad, mental",A2,0.032,86.92,80.64
1497,Bauch,noun,"abdomen, belly",A2,0.055,86.92,80.65
1498,Unterhaltung,noun,conversation,A2,0.068,86.92,80.65
1499,frank,adjective,frank,A2,0.019,86.93,80.65
1500,Bär,noun,bear (animal),A2,0.032,86.94,80.66
1501,zugeben,verb,"to admit, confess (to own up to something)",A2,0.036,86.94,80.66
1502,Welle,noun,wave (of water),A2,0.062,86.94,80.67
1503,Figur,noun,"figure, figurine",A2,0.067,86.95,80.67
1504,Wolke,noun,cloud (a visible mass of water droplets suspended in the air),A2,0.12,86.95,80.68
1505,betrachtet,adjective,"considered, regarded",A2,0.154,86.95,80.69
1506,Urlaub,noun,"holiday, vacation",A2,0.03,86.95,80.7
1507,sparen,verb,"to save up; to accumulate, to put aside (for a specific purpose)",A2,0.035,86.96,80.7
1508,räumen,verb,"to clear an area of debris, snow, mines, or other impediments",A2,0.046,86.96,80.7
1509,Keller,noun,cellar,A2,0.029,86.97,80.7
1510,Größe,noun,"size, height",A2,0.055,86.97,80.71
1511,darunter,adverb,"below it, below that, thereunder",A2,0.073,86.97,80.71
1512,stammen,verb,"to descend, to originate, to be derived",A2,0.042,86.98,80.72
1513,beschützen,verb,"to protect, to guard, to defend",A2,0.011,86.99,80.72
1514,Ewigkeit,noun,eternity,A2,0.073,86.99,80.72
1515,fantastisch,adjective,fantastic,A2,0.015,87,80.72
1516,verlegen,verb,"to misplace, to mislay",A2,0.071,87,80.73
1517,Krone,noun,crown,A2,0.074,87,80.74
1518,zerbrechen,verb,"to break into pieces, to shatter, to snap (to cause an object to come apart into discrete pieces)",A2,0.071,87,80.74
1519,Hass,noun,"hatred, hate",A2,0.075,87.01,80.75
1520,Geduld,noun,patience,A2,0.052,87.01,80.75
1521,irgendwelche,pronoun,any (no matter which),A2,0.018,87.02,80.75
1522,Geschmack,noun,taste,A2,0.063,87.02,80.76
1523,füllen,verb,to fill,A2,0.073,87.02,80.76
1524,Staub,noun,dust,A2,0.1,87.02,80.77
1525,übergeben,verb,to hand over,A2,0.035,87.03,80.78
1526,vorhaben,verb,"to intend, to have (something) planned, to have (something) to do",A2,0.038,87.03,80.78
1527,Ereignis,noun,event (occurrence of social or personal importance),A2,0.066,87.03,80.78
1528,erwachen,verb,to awake (also figuratively),A2,0.173,87.03,80.8
1529,billig,adjective,"appropriate, meet, fair",A2,0.051,87.04,80.8
1530,Bad,noun,bath,A2,0.027,87.04,80.8
1531,gelangen,verb,"to reach, get to, end up in (a place, location)",A2,0.094,87.04,80.81
1532,neulich,adverb,recently (in the recent past),A2,0.039,87.05,80.81
1533,Bürger,noun,"citizen, inhabitant, resident; legally recognized inhabitant of a city or state",A2,0.064,87.05,80.82
1534,Wut,noun,rage; fury; outrage,A2,0.065,87.05,80.82
1535,Verlust,noun,"loss (all senses, except defeat, for which Niederlage is used)",A2,0.045,87.06,80.83
1536,vertreten,verb,"to step in, fill (a stead, gap)",A2,0.044,87.06,80.83
1537,eintreten,verb,"to enter, to come into",A2,0.154,87.06,80.84
1538,Polizist,noun,police officer (male or female); policeman,A2,0.01,87.07,80.84
1539,Kette,noun,"chain (series of interconnected rings, usually of metal)",A2,0.058,87.07,80.85
1540,unterschreiben,verb,to sign (write one’s signature),A2,0.017,87.08,80.85
1541,Gift,noun,poison; toxin; venom,A2,0.05,87.08,80.85
1542,weggehen,verb,"to go away, leave, scram",A2,0.041,87.08,80.86
1543,abnehmen,verb,to take off (to remove something that is attached to something or on top of it),A2,0.045,87.09,80.86
1544,wiederkommen,verb,"to return, to come back, to come again",A2,0.061,87.09,80.87
1545,gewohnt,adjective,"usual, customary, familiar",A2,0.069,87.09,80.87
1546,flehen,verb,"to entreat, to beg",A2,0.067,87.1,80.88
1547,anstellen,verb,"to queue, to line up",A2,0.028,87.1,80.88
1548,blasen,verb,to blow,A2,0.067,87.1,80.89
1549,Schlange,noun,snake,A2,0.045,87.11,80.89
1550,Team,noun,team,A2,0.007,87.12,80.89
1551,Riese,noun,giant,A2,0.038,87.12,80.89
1552,unterstützen,verb,"to support, to assist, to help, to aid",A2,0.023,87.13,80.89
1553,breit,adjective,"broad, wide",A2,0.136,87.13,80.9
1554,allgemein,adjective,"general (common, basic, usual), universal",A2,0.139,87.13,80.92
1555,Schlacht,noun,battle,A2,0.054,87.13,80.92
1556,Schnee,noun,snow,A2,0.067,87.13,80.93
1557,quälen,verb,"to torture, to torment, to agonize",A2,0.087,87.14,80.93
1558,Bord,noun,shelf (board fixed to the wall),A2,0.017,87.14,80.93
1559,national,adjective,national (being part of a nation's identity or character),A2,0.076,87.14,80.94
1560,Anblick,noun,"view, sight, look",A2,0.147,87.15,80.95
1561,Schwanz,noun,tail,A2,0.024,87.15,80.95
1562,selbstverständlich,adverb,naturally,A2,0.039,87.15,80.96
1563,verletzen,verb,"to hurt, to injure (cause bodily harm to someone)",A2,0.019,87.16,80.96
1564,Heil,noun,"health, salvation, well-being, happiness, a state of intactness and prosperity",A2,0.057,87.16,80.96
1565,auffallen,verb,"to stand out, to be noticeable",A2,0.048,87.16,80.97
1566,Gerechtigkeit,noun,justice,A2,0.046,87.17,80.97
1567,lehren,verb,"to teach (a class, a subject); to be a teacher",A2,0.089,87.17,80.98
1568,entkommen,verb,to escape,A2,0.017,87.17,80.98
1569,segnen,verb,to bless,A2,0.048,87.18,80.98
1570,anhören,verb,"to listen to the end, to hear out",A2,0.039,87.18,80.99
1571,Künstler,noun,artist,A2,0.061,87.18,80.99
1572,wandern,verb,"to hike, to go trekking",A2,0.101,87.19,81
1573,Holding,noun,holding company,A2,0.057,87.19,81.01
1574,dringen,verb,to insist; to press,A2,0.134,87.19,81.02
1575,Nerv,noun,nerve,A2,0.026,87.19,81.02
1576,wahren,verb,"to protect, to safeguard",A2,0.052,87.2,81.02
1577,Aue,noun,"flood meadow, floodplain (a flat grassy area adjacent to a river bed, subject to seasonal flooding)",A2,0.023,87.2,81.03
1578,grausam,adverb,"cruelly, brutally, ferociously",A2,0.06,87.2,81.03
1579,auseinander,adverb,apart,A2,0.061,87.21,81.04
1580,Fluch,noun,"curse, malediction, bane",A2,0.057,87.21,81.04
1581,reizend,adjective,lovely,A2,0.061,87.21,81.04
1582,einschlafen,verb,to fall asleep,A2,0.05,87.21,81.05
1583,erweisen,verb,"to prove, to show (itself or oneself)",A2,0.068,87.22,81.05
1584,Unfall,noun,accident,A2,0.01,87.22,81.05
1585,Abenteuer,noun,adventure,A2,0.064,87.23,81.06
1586,umgehen,verb,"to avoid, bypass, to go around (a physical obstacle)",A2,0.029,87.23,81.06
1587,schmutzig,adjective,"dirty, filthy, grimy",A2,0.037,87.23,81.07
1588,ausdrücken,verb,"to squeeze, to squeeze out",A2,0.061,87.24,81.07
1589,Wange,noun,cheek (on the face),A2,0.131,87.24,81.08
1590,mitteilen,verb,"to inform about, to tell, to disclose, to impart, to report, to announce",A2,0.062,87.24,81.08
1591,Fleck,noun,"stain, spot, blot, fleck, smear",A2,0.058,87.24,81.09
1592,eilen,verb,"to hurry, to rush (on foot, in a determined and purposeful manner)",A2,0.193,87.24,81.11
1593,ausgezeichnet,adverb,excellently,A2,0.033,87.25,81.11
1594,notwendig,adjective,necessary; essential; indispensable,A2,0.071,87.25,81.11
1595,Besitz,noun,ownership,A2,0.046,87.25,81.12
1596,riesig,adjective,"gigantic, huge",A2,0.02,87.26,81.12
1597,Furcht,noun,fear; fright; anxiety,A2,0.13,87.26,81.13
1598,woran,adverb,"on what, at what",A2,0.032,87.26,81.13
1599,Unterschied,noun,difference,A2,0.039,87.27,81.14
1600,Aussage,noun,proposition,A2,0.024,87.27,81.14
1601,opfern,verb,"to sacrifice, to give up (for a goal or cause)",A2,0.022,87.28,81.14
1602,Heimat,noun,"home, home town, homeland, native land",A2,0.065,87.28,81.15
1603,Stich,noun,"sting, prick, stitch, stab",A2,0.04,87.28,81.15
1604,Holz,noun,wood (material),A2,0.061,87.28,81.15
1605,Löwe,noun,lion,A2,0.052,87.29,81.16
1606,Glocke,noun,bell (percussive instrument),A2,0.076,87.29,81.16
1607,Laune,noun,"mood, humor",A2,0.088,87.29,81.17
1608,rächen,verb,to revenge; to avenge,A2,0.055,87.29,81.18
1609,Zorn,noun,anger; wrath,A2,0.125,87.29,81.19
1610,Toilette,noun,toilet,A2,0.029,87.3,81.19
1611,Beruf,noun,"occupation, profession, trade, job, career",A2,0.045,87.3,81.19
1612,ehren,verb,to honor,A2,0.065,87.3,81.2
1613,Nass,noun,moisture,A2,0.057,87.31,81.2
1614,Urteil,noun,"judgment (the preferred spelling in a legal context), verdict, sentence (court decision)",A2,0.056,87.31,81.21
1615,Affe,noun,monkey or ape (male or female or of unspecified sex),A2,0.034,87.31,81.21
1616,My,noun,mu (Greek letter),A2,0.016,87.32,81.21
1617,Kreuz,noun,cross,A2,0.061,87.32,81.22
1618,verbunden,adjective,"related, connected, interconnected",A2,0.04,87.32,81.22
1619,verteidigen,verb,to defend (from attack),A2,0.031,87.32,81.22
1620,politisch,adjective,political (concerning or related to politics),A2,0.045,87.33,81.22
1621,gewaltig,adjective,"enormous, huge",A2,0.093,87.33,81.23
1622,Flamme,noun,flame (visible part of fire),A2,0.077,87.33,81.24
1623,tapfer,adjective,"brave, dauntless, hardy, tough (strong in the face of hardship, pain, danger)",A2,0.05,87.33,81.24
1624,leiten,verb,to lead,A2,0.028,87.34,81.24
1625,Strafe,noun,punishment,A2,0.055,87.34,81.25
1626,gleichzeitig,adverb,"at the same time, simultaneously",A2,0.053,87.34,81.25
1627,stimmen,verb,"to be right, to be correct, to be proper, to be true",A2,0.064,87.35,81.26
1628,hinweg,adverb,away,A2,0.119,87.35,81.27
1629,Stirn,noun,"forehead, brow (often used as an indicator of emotion)",A2,0.175,87.35,81.28
1630,verschaffen,verb,"to provide, supply, procure",A2,0.055,87.35,81.28
1631,Graben,noun,ditch,A2,0.049,87.35,81.29
1632,angreifen,verb,to attack,A2,0.019,87.36,81.29
1633,Ursache,noun,cause (source or reason of an event or action),A2,0.061,87.36,81.29
1634,eröffnen,verb,to open (to the public),A2,0.047,87.36,81.3
1635,Akte,noun,file (collection of papers),A2,0.013,87.37,81.3
1636,ums,contraction,um + das,A2,0.039,87.37,81.3
1637,Schrank,noun,"cabinet (storage closet either separate from, or built into, a wall), or (specifically)",A2,0.055,87.38,81.31
1638,schlechter,adverb,worse,A2,0.029,87.38,81.31
1639,Untersuchung,noun,"examination, investigation",A2,0.03,87.38,81.31
1640,verabschieden,verb,to say goodbye (to); to take leave (of),A2,0.037,87.39,81.31
1641,decken,verb,"to cover (a roof, with a blanket, etc.)",A2,0.04,87.39,81.32
1642,anständig,adjective,"decent, decorous, reputable, civilized, honest, moral, of integrity",A2,0.038,87.39,81.32
1643,eignen,verb,"to suit, to be apt for",A2,0.142,87.39,81.33
1644,Moor,noun,"marsh, mire, bog",A2,0.231,87.4,81.35
1645,vollständig,adverb,"completely, fully",A2,0.081,87.4,81.36
1646,entstehen,verb,"to come into being, to arise, to be produced",A2,0.074,87.4,81.36
1647,heran,adverb,"near, close to the speaker, over to (to the direction of the speaker or an object)",A2,0.169,87.4,81.38
1648,vorne,adverb,at the front,A2,0.037,87.41,81.38
1649,wehren,verb,to defend oneself,A2,0.068,87.41,81.38
1650,Mitternacht,noun,midnight,A2,0.057,87.41,81.39
1651,weichen,verb,"to move farther away, to make room, to yield",A2,0.125,87.41,81.4
1652,Situation,noun,"situation, circumstances",A2,0.012,87.42,81.4
1653,Student,noun,student (person attending lectures at a university; male or of unspecified sex),A2,0.044,87.42,81.4
1654,Meile,noun,mile (unit of distance),A2,0.024,87.43,81.4
1655,gründen,verb,"to found, to establish (a community, settlement, organization, company, etc.)",A2,0.036,87.43,81.41
1656,verurteilen,verb,"to convict, condemn, sentence",A2,0.027,87.43,81.41
1657,aufheben,verb,to pick up (something lying on the ground),A2,0.062,87.43,81.41
1658,einstellen,verb,to hire (to add someone to a position of employment),A2,0.022,87.44,81.42
1659,Zigarette,noun,cigarette,A2,0.028,87.44,81.42
1660,Hemd,noun,shirt,A2,0.035,87.45,81.42
1661,innerlich,adjective,"internal, inward",A2,0.079,87.45,81.43
1662,Kuchen,noun,"pie; cake; tart (foodstuff made of baked dough, other than bread)",A2,0.034,87.45,81.43
1663,genügen,verb,"to suffice, to be enough",A2,0.044,87.45,81.43
1664,Baron,noun,baron,A2,0.093,87.46,81.44
1665,Strahl,noun,"beam, ray (e.g. of light)",A2,0.289,87.46,81.46
1666,Talent,noun,talent,A2,0.031,87.46,81.47
1667,vermeiden,verb,"to avoid (something happening, doing something)",A2,0.058,87.46,81.47
1668,unterrichten,verb,"to teach, to school",A2,0.054,87.46,81.47
1669,Telefon,noun,telephone,A2,0.003,87.48,81.47
1670,Bedeutung,noun,"meaning, sense",A2,0.052,87.48,81.48
1671,Arbeiter,noun,worker (male or of unspecified gender),A2,0.038,87.49,81.48
1672,verwirrt,adjective,confused,A2,0.041,87.49,81.49
1673,verantwortlich,adjective,responsible,A2,0.018,87.5,81.49
1674,Saal,noun,hall or large room (chiefly for gatherings or performances by large groups of people),A2,0.251,87.5,81.51
1675,Muster,noun,example,A2,0.095,87.5,81.52
1676,Fantasie,noun,imagination,A2,0.044,87.5,81.52
1677,Atem,noun,breath,A2,0.096,87.5,81.53
1678,empfehlen,verb,"to propose, to advise in favor of",A2,0.045,87.5,81.53
1679,Jahrhundert,noun,a century (period of 100 years),A2,0.026,87.51,81.53
1680,enthalten,verb,"to contain, comprise",A2,0.075,87.51,81.54
1681,wachen,verb,to be awake,A2,0.035,87.51,81.54
1682,Typ,noun,type,A2,0.002,87.53,81.54
1683,berühmt,adjective,"famous, well-known, renowned, celebrated, noted",A2,0.041,87.53,81.55
1684,aufmerksam,adjective,"attentive, alert, observant",A2,0.097,87.54,81.55
1685,blond,adjective,"blond; fair; unlike English, not commonly used of anything other than hair (except beer, see hereunder)",A2,0.053,87.54,81.56
1686,Priester,noun,priest,A2,0.033,87.54,81.56
1687,entführen,verb,"to abduct, kidnap, seize (a person or animal)",A2,0.009,87.55,81.56
1688,Kleiner,noun,"boy, young man",A2,0.046,87.55,81.57
1689,versehen,verb,to perform (a service or duty),A2,0.076,87.55,81.57
1690,Chance,noun,chance,A2,0.002,87.57,81.57
1691,Tal,noun,valley,A2,0.091,87.58,81.58
1692,verursachen,verb,"to cause, to induce",A2,0.026,87.58,81.58
1693,bequem,adjective,"comfortable, convenient",A2,0.061,87.58,81.59
1694,hinauf,adverb,"up; upward; upwards (from the own location upwards, in direction away from the speaker)",A2,0.248,87.58,81.61
1695,interessieren,verb,to interest,A2,0.023,87.59,81.61
1696,Markt,noun,market (gathering for sale and purchase),A2,0.046,87.59,81.61
1697,Verstand,noun,intellect,A2,0.039,87.59,81.62
1698,Juli,noun,July,A2,0.015,87.6,81.62
1699,außerhalb,preposition,"outside (of), beyond",A2,0.026,87.6,81.62
1700,klagen,verb,"to complain (to express feelings of pain, dissatisfaction, or resentment)",A2,0.115,87.6,81.63
1701,auftauchen,verb,"to come up (of a subject or name in conversation, a difficulty in a project, etc.)",A2,0.012,87.61,81.63
1702,gerecht,adjective,"just, fair",A2,0.068,87.61,81.64
1703,Treue,noun,"faithfulness, loyalty",A2,0.104,87.61,81.64
1704,rasch,adverb,quickly,A2,0.276,87.61,81.67
1705,stechen,verb,"to be sharp, to stick out",A2,0.047,87.61,81.67
1706,vorgehen,verb,to walk to the front (of a room or area),A2,0.047,87.62,81.67
1707,bereuen,verb,"to regret, to rue",A2,0.028,87.62,81.68
1708,Mitglied,noun,member,A2,0.022,87.62,81.68
1709,Schlafzimmer,noun,"bedroom (bed-room), bedchamber (bed-chamber)",A2,0.038,87.63,81.68
1710,Gruß,noun,greeting,A2,0.066,87.63,81.69
1711,offensichtlich,adverb,obviously,A2,0.01,87.64,81.69
1712,Schweizer,noun,"Swiss person, Swiss (male)",A2,0.078,87.64,81.69
1713,abgeben,verb,"to give up, relinquish, let go, concede, hand over, etc. (power, money, valuable objects, etc.)",A2,0.03,87.64,81.7
1714,Herrschaft,noun,"lordship, reign, rule, dominion",A2,0.088,87.64,81.7
1715,sperren,verb,to bar (entry to a place or system),A2,0.034,87.65,81.7
1716,aufziehen,verb,[auxiliary haben],A2,0.037,87.65,81.71
1717,schief,adverb,"crookedly, at an angle",A2,0.037,87.65,81.71
1718,Lärm,noun,"noise, din, racket",A2,0.083,87.65,81.72
1719,Flug,noun,flight (in the air),A2,0.023,87.66,81.72
1720,anlegen,verb,to create,A2,0.044,87.66,81.72
1721,praktisch,adverb,virtually (almost but not quite),A2,0.031,87.66,81.72
1722,Kapitän,noun,captain,A2,0.026,87.67,81.73
1723,Adresse,noun,address,A2,0.012,87.67,81.73
1724,ablehnen,verb,"to decline, refuse, reject, turn down",A2,0.031,87.68,81.73
1725,stumm,adjective,mute; dumb (unable to speak),A2,0.128,87.68,81.74
1726,Gerücht,noun,rumor / rumour,A2,0.041,87.68,81.74
1727,spazieren,verb,"to take a walk, to stroll, to walk leisurely",A2,0.037,87.68,81.75
1728,Botschaft,noun,message,A2,0.021,87.69,81.75
1729,Mönch,noun,monk,A2,0.138,87.69,81.76
1730,Gedicht,noun,poem,A2,0.065,87.69,81.76
1731,perfekt,adjective,perfect,A2,0.003,87.71,81.76
1732,Armee,noun,army (large tactical contingent consisting of several divisions),A2,0.067,87.71,81.76
1733,Rad,noun,rad (non-SI unit of absorbed dose of radiation),A2,0.043,87.71,81.77
1734,Turm,noun,"tower, spire (very tall building or structure, especially with a tapering top)",A2,0.088,87.72,81.78
1735,Aussicht,noun,"scenery, view, outlook (also figuratively)",A2,0.077,87.72,81.78
1736,eifersüchtig,adjective,jealous,A2,0.025,87.72,81.78
1737,Fass,noun,"barrel, keg, cask",A2,0.041,87.73,81.79
1738,löschen,verb,"to quench (fire, thirst, or lime)",A2,0.028,87.73,81.79
1739,hervor,adverb,forth (in the direction of the speaker),A2,0.239,87.73,81.81
1740,Pastor,noun,pastor (clergyman who serves a parish),A2,0.17,87.73,81.82
1741,umarmen,verb,"to embrace, to hug",A2,0.056,87.73,81.82
1742,verschlossen,adjective,locked,A2,0.081,87.74,81.83
1743,stinken,verb,to stink,A2,0.02,87.74,81.83
1744,freiwillig,adjective,voluntary,A2,0.029,87.74,81.83
1745,Sarg,noun,coffin,A2,0.051,87.74,81.84
1746,Bühne,noun,a stage,A2,0.033,87.75,81.84
1747,Bewusstsein,noun,"consciousness, awareness",A2,0.079,87.75,81.85
1748,Schauspieler,noun,actor,A2,0.042,87.75,81.85
1749,Höhle,noun,cave,A2,0.072,87.75,81.86
1750,zunächst,adverb,"first, first of all, in the first place, to begin with, initially",A2,0.078,87.76,81.86
1751,Zweck,noun,purpose,A2,0.05,87.76,81.87
1752,hinunter,adverb,"down, downwards (from the own location downwards)",A2,0.158,87.76,81.88
1753,zeichnen,verb,"to draw, to sketch",A2,0.052,87.76,81.88
1754,zweifeln,verb,"to doubt, to be doubtful",A2,0.069,87.76,81.89
1755,überfallen,verb,"to attack, to assault",A2,0.043,87.77,81.89
1756,Kloster,noun,"convent, monastery, cloister",A2,0.108,87.77,81.9
1757,Jeans,noun,"A pair of jeans, denim trousers",A2,0.039,87.77,81.9
1758,ersetzen,verb,to replace,A2,0.037,87.77,81.91
1759,einnehmen,verb,"to take, take up, assume, span (a position, space, area)",A2,0.045,87.77,81.91
1760,Maske,noun,mask,A2,0.034,87.78,81.91
1761,Fremder,noun,stranger (someone whom one does not know) (male or of unspecified gender),A2,0.086,87.78,81.92
1762,Sand,noun,sand (particles of rock),A2,0.056,87.78,81.92
1763,Wurm,noun,worm,A2,0.108,87.78,81.93
1764,leihen,verb,to borrow,A2,0.025,87.79,81.93
1765,wiegen,verb,to weigh; to be of a certain weight,A2,0.079,87.79,81.94
1766,Geburt,noun,birth,A2,0.034,87.79,81.94
1767,bewundern,verb,"to admire, to highly respect (something of high quality)",A2,0.052,87.79,81.95
1768,Stufe,noun,"step, tread (of a stair or ladder)",A2,0.061,87.8,81.95
1769,mischen,verb,to mix,A2,0.041,87.8,81.96
1770,grau,adjective,"grey, gray",A2,0.102,87.8,81.96
1771,aufgeregt,adjective,excited,A2,0.026,87.8,81.97
1772,Roman,noun,novel,A2,0.039,87.81,81.97
1773,Verbrecher,noun,criminal,A2,0.038,87.81,81.97
1774,behaupten,verb,"to claim, maintain, assert",A2,0.028,87.81,81.97
1775,Übersetzung,noun,translation,A2,0.031,87.81,81.98
1776,bemühen,verb,to make an effort,A2,0.06,87.82,81.98
1777,total,adverb,"totally, absolutely, completely, utterly",A2,0.003,87.83,81.98
1778,anschauen,verb,to look at; to behold; to observe (visually); to view,A2,0.036,87.83,81.98
1779,gebrauchen,verb,to use,A2,0.038,87.84,81.99
1780,Magen,noun,"stomach, maw",A2,0.049,87.84,81.99
1781,ausmachen,verb,"to turn off, switch off",A2,0.025,87.84,81.99
1782,Mauer,noun,"a wall, usually one made of stone or concrete",A2,0.068,87.84,82
1783,Bedingung,noun,"requirement, prerequisite",A2,0.034,87.85,82
1784,Schrei,noun,"shout, cry, scream",A2,0.039,87.85,82
1785,zögern,verb,"to hesitate, to pause before doing something",A2,0.071,87.85,82.01
1786,amüsieren,verb,to be amused,A2,0.026,87.85,82.01
1787,Erlaubnis,noun,permission (authorisation),A2,0.031,87.86,82.01
1788,meistens,adverb,mostly (for the most part),A2,0.047,87.86,82.02
1789,eingehen,verb,"to arrive (of everything that can be received such postal items, reports, messages and payments)",A2,0.04,87.86,82.02
1790,Zelle,noun,cell (segregated room),A2,0.02,87.87,82.02
1791,abends,adverb,"in the evening, at night, see Abend",A2,0.043,87.87,82.03
1792,Fähigkeit,noun,"ability, capability",A2,0.029,87.87,82.03
1793,Knabe,noun,"knave, boy, lad",A2,0.219,87.87,82.05
1794,vorüber,adverb,"gone, over, past",A2,0.148,87.87,82.06
1795,schluchzen,verb,to sob,A2,0.061,87.88,82.06
1796,Knochen,noun,bone,A2,0.026,87.88,82.06
1797,Abschied,noun,"parting, farewell",A2,0.09,87.88,82.07
1798,sowie,conjunction,as well as,A2,0.1,87.88,82.08
1799,Menschheit,noun,"humanity, mankind (human beings at large)",A2,0.041,87.89,82.08
1800,übertreiben,verb,to exaggerate,A2,0.027,87.89,82.08
1801,Job,noun,"job, position, employment",A2,0.001,87.91,82.08
1802,gewählt,adjective,"chosen, elected",A2,0.032,87.92,82.09
1803,nochmal,adverb,once again,A2,0.045,87.93,82.09
1804,schwingen,verb,to swing (to move back and forth),A2,0.06,87.93,82.09
1805,Einfluss,noun,"inflow, influx",A2,0.047,87.93,82.1
1806,Publikum,noun,"audience, those who see, hear, read some work or performance (crowd, viewership, readership etc.)",A2,0.036,87.93,82.1
1807,Schrecken,noun,fright,A2,0.081,87.94,82.11
1808,Gebiet,noun,"area, region",A2,0.036,87.94,82.11
1809,Geruch,noun,"smell, odour",A2,0.045,87.94,82.12
1810,fesseln,verb,"to chain, to bind",A2,0.044,87.94,82.12
1811,allzu,adverb,all too,A2,0.08,87.94,82.13
1812,Pläne,noun,"synonym of Ebene (“level surface, plain, flatland”)",A2,0.017,87.95,82.13
1813,dahinter,adverb,behind it/that,A2,0.035,87.95,82.13
1814,Pistole,noun,"pistol, gun",A2,0.02,87.96,82.13
1815,versammeln,verb,"to gather, to assemble (a group of people for an event, meeting etc.)",A2,0.074,87.96,82.14
1816,daheim,adverb,"home, at home (adverb)",A2,0.059,87.96,82.14
1817,morden,verb,to commit murder,A2,0.026,87.96,82.14
1818,Gebet,noun,prayer,A2,0.059,87.96,82.15
1819,Mitleid,noun,"pity, compassion",A2,0.062,87.97,82.15
1820,leeren,verb,to empty,A2,0.058,87.97,82.16
1821,Satz,noun,sentence,A2,0.045,87.97,82.16
1822,Pfarrer,noun,pastor (clergyman who serves a parish),A2,0.052,87.97,82.17
1823,bellen,verb,to bark (like a canine),A2,0.019,87.98,82.17
1824,Rosa,noun,pink (color),A2,0.05,87.98,82.17
1825,Verantwortung,noun,responsibility,A2,0.014,87.98,82.17
1826,Amt,noun,agency; department; office (state institution responsible for specified concerns),A2,0.069,87.98,82.18
1827,zumindest,adverb,at least,A2,0.007,87.99,82.18
1828,Blitz,noun,a bolt of lightning,A2,0.077,87.99,82.18
1829,Stoff,noun,"stuff, matter, substance",A2,0.033,88,82.19
1830,Stärke,noun,strength,A2,0.045,88,82.19
1831,Glückwunsch,noun,congratulation,A2,0.01,88,82.19
1832,ungeheuer,adjective,enormous,A2,0.117,88.01,82.2
1833,Last,noun,"load, burden",A2,0.057,88.01,82.21
1834,Verdacht,noun,suspicion,A2,0.044,88.01,82.21
1835,begeben,verb,to go; to make one's way; to repair,A2,0.089,88.01,82.22
1836,elf,number,eleven,A2,0.036,88.01,82.22
1837,leuchten,verb,to shine,A2,0.087,88.02,82.23
1838,Einheit,noun,unit,A2,0.015,88.02,82.23
1839,weiblich,adjective,female,A2,0.049,88.02,82.23
1840,Anteil,noun,"share, portion",A2,0.035,88.02,82.23
1841,kräftig,adjective,"bold, intense, powerful, robust, strong, sturdy, vigorous, vivid",A2,0.079,88.03,82.24
1842,loswerden,verb,to get rid of,A2,0.018,88.03,82.24
1843,Gegenwart,noun,the present,A2,0.081,88.03,82.25
1844,Linie,noun,line,A2,0.037,88.03,82.25
1845,Block,noun,bloc,A2,0.036,88.04,82.25
1846,Öl,noun,oil,A2,0.049,88.04,82.26
1847,vorkommen,verb,"to appear, to occur (in a given location or situation)",A2,0.066,88.04,82.26
1848,Gewehr,noun,"rifle, long gun",A2,0.019,88.04,82.26
1849,knapp,adverb,"narrowly, just, barely",A2,0.028,88.05,82.27
1850,beschäftigen,verb,"to occupy, to keep occupied, to employ, to engage (possess or use the time, capacity or service of)",A2,0.09,88.05,82.27
1851,trocken,adjective,dry (not wet; lacking water),A2,0.04,88.05,82.28
1852,bescheiden,verb,"to confer the decision or fate formally, to announce, to proclaim",A2,0.062,88.05,82.28
1853,fähig,adjective,capable (having the general capability to),A2,0.028,88.06,82.28
1854,brüllen,verb,"to shout, roar",A2,0.034,88.06,82.29
1855,zurückziehen,verb,"to pull back, to withdraw",A2,0.055,88.06,82.29
1856,fünfte,adjective,fifth,A2,0.05,88.06,82.3
1857,Liste,noun,list,A2,0.024,88.07,82.3
1858,Kleidung,noun,clothing; apparel,A2,0.044,88.07,82.3
1859,Charakter,noun,character; the totality of someone's personal qualities,A2,0.073,88.07,82.31
1860,Angriff,noun,"attack, offensive, strike, assault, onslaught, raid, offence",A2,0.014,88.08,82.31
1861,erstaunen,verb,"to astonish, astound",A2,0.164,88.08,82.32
1862,Gesundheit,noun,health (state of being in good physical condition and free from illness),A2,0.038,88.08,82.32
1863,existieren,verb,to exist,A2,0.012,88.09,82.33
1864,beschlossen,adjective,"decided, agreed",A2,0.038,88.09,82.33
1865,Schein,noun,"shine, gleam, flash",A2,0.085,88.09,82.34
1866,Hügel,noun,hill,A2,0.061,88.09,82.34
1867,Hamburger,noun,Hamburger (person),A2,0.088,88.09,82.35
1868,Ausgang,noun,exit (passage from inside to outside),A2,0.053,88.09,82.35
1869,Tasse,noun,"cup, mug (drinking vessel)",A2,0.032,88.1,82.35
1870,Gestalt,noun,"shape, form, figure, outline",A2,0.189,88.1,82.37
1871,Bande,noun,gang (group of people united for some immoral or criminal objective),A2,0.054,88.1,82.37
1872,Zahl,noun,"number, numeral, figure",A2,0.021,88.1,82.38
1873,Angeklagter,noun,defendant (person prosecuted or sued) (male or of unspecified gender),A2,0.076,88.1,82.38
1874,mitkommen,verb,"to come with, to join and come along with (another person)",A2,0.009,88.11,82.38
1875,offiziell,adjective,official,A2,0.014,88.11,82.38
1876,Wissenschaft,noun,science (a branch of knowledge or academic discipline dealing with a systematic body of facts or truths),A2,0.041,88.12,82.39
1877,Puppe,noun,doll,A2,0.029,88.12,82.39
1878,äußerst,adverb,"utmostly, extremely",A2,0.042,88.12,82.39
1879,umdrehen,verb,"to twist, to turn, to turn around",A2,0.026,88.12,82.4
1880,verfluchen,verb,to curse,A2,0.029,88.13,82.4
1881,Wirkung,noun,effect,A2,0.023,88.13,82.4
1882,entschlossen,adjective,"determined, set, resolute",A2,0.068,88.13,82.41
1883,Klang,noun,"sound, tone",A2,0.059,88.13,82.41
1884,Beamter,noun,"government employee, (government) official, civil servant, public servant, (police) officer",A2,0.043,88.13,82.42
1885,umgeben,verb,to surround (to encircle or simultaneously extend on all sides of something),A2,0.078,88.13,82.42
1886,Energie,noun,energy,A2,0.012,88.14,82.42
1887,ruinieren,verb,"to ruin (to destroy or make dysfunctional, e.g. of health, relationships or financially)",A2,0.012,88.14,82.43
1888,unangenehm,adverb,unpleasantly,A2,0.039,88.15,82.43
1889,erholen,verb,"to relax, to recover, to recuperate",A2,0.045,88.15,82.43
1890,besiegen,verb,to defeat (to overcome in battle or contest),A2,0.02,88.15,82.43
1891,kaputt,adjective,"destroyed, broken, out of order",A2,0.006,88.16,82.43
1892,Brunnen,noun,well,A2,0.092,88.16,82.44
1893,köstlich,adjective,costly; precious,A2,0.045,88.16,82.45
1894,männlich,adjective,male,A2,0.031,88.17,82.45
1895,Flur,noun,"hall, hallway, corridor, stairwell",A2,0.056,88.17,82.45
1896,Lösung,noun,solution (answer to a riddle or problem),A2,0.016,88.17,82.45
1897,gegenseitig,adverb,mutually,A2,0.026,88.18,82.46
1898,vermuten,verb,"to assume, suppose, presume, suspect, (US) guess",A2,0.023,88.18,82.46
1899,schmeißen,verb,to throw; to fling; to hurl,A2,0.017,88.18,82.46
1900,grauen,verb,to cause terror,A2,0.13,88.18,82.47
1901,Märchen,noun,fairy tale (folk tale),A2,0.061,88.19,82.48
1902,Lampe,noun,"lamp, light (piece of furniture, or fixture mounted on a wall or ceiling, holding one or more electric light sockets)",A2,0.066,88.19,82.48
1903,enttäuscht,adjective,disappointed (defeated of hope or expectation),A2,0.021,88.19,82.48
1904,hungrig,adjective,hungry (desirous of food),A2,0.026,88.19,82.48
1905,Klappe,noun,"flap, every technical or natural implement that is bound in front of something or a body part of someone or a beast t",A2,0.024,88.2,82.48
1906,Stiefel,noun,boot (shoe),A2,0.054,88.2,82.49
1907,aufpassen,verb,"to watch out, to be alert",A2,0.006,88.21,82.49
1908,düster,adjective,"dark, dim, gloomy, obscure",A2,0.055,88.21,82.49
1909,beides,conjunction,both,A2,0.036,88.21,82.5
1910,angegriffen,adjective,attacked,A2,0.017,88.22,82.5
1911,aha,interjection,aha,A2,0.012,88.22,82.5
1912,verdächtigen,verb,to suspect,A2,0.021,88.23,82.5
1913,verloben,verb,to betroth; to get engaged (optional [with mit (+ dative) ‘someone’]),A2,0.031,88.23,82.5
1914,Montag,noun,Monday,A2,0.024,88.23,82.5
1915,Kerze,noun,candle,A2,0.053,88.24,82.51
1916,scheinbar,adverb,apparently (seemingly),A2,0.052,88.24,82.51
1917,beliebt,adjective,popular,A2,0.041,88.24,82.52
1918,Herrgott,noun,"God, the Lord",A2,0.025,88.24,82.52
1919,Sprung,noun,"jump, leap",A2,0.065,88.24,82.52
1920,deuten,verb,"to interpret (e.g. dreams), to understand, to read (e.g. signs)",A2,0.065,88.25,82.53
1921,System,noun,system,A2,0.009,88.25,82.53
1922,Uniform,noun,uniform (distinctive outfit as a means of identifying members of a group),A2,0.026,88.25,82.53
1923,dreimal,adverb,"thrice, three times",A2,0.056,88.26,82.53
1924,üblich,adjective,usual,A2,0.021,88.26,82.54
1925,Agent,noun,agent (male or of unspecified gender),A2,0.003,88.27,82.54
1926,ringen,verb,to wrestle,A2,0.055,88.27,82.54
1927,Tropfen,noun,drop,A2,0.06,88.27,82.55
1928,Erbe,noun,inheritance; heritage; legacy; bequest (property that is bequeathed and inherited),A2,0.045,88.28,82.55
1929,Gedächtnis,noun,memory (ability to recall),A2,0.044,88.28,82.55
1930,Apfel,noun,apple (fruit),A2,0.043,88.28,82.56
1931,Sage,noun,"saga, legend, myth, story, tale",A2,0.021,88.28,82.56
1932,unendlich,adjective,infinite,A2,0.071,88.29,82.57
1933,kriechen,verb,to creep; to crawl,A2,0.066,88.29,82.57
1934,Summe,noun,sum (maths),A2,0.042,88.29,82.57
1935,fügen,verb,to join,A2,0.095,88.29,82.58
1936,Unterricht,noun,"lesson, class, instruction, education",A2,0.035,88.29,82.58
1937,vertragen,verb,"to tolerate, bear",A2,0.027,88.29,82.59
1938,angetan,adjective,be taken with something; have taken a shine,A2,0.012,88.3,82.59
1939,schwanger,adjective,pregnant (of humans),A2,0.036,88.31,82.59
1940,glatt,adjective,"without roughness or unevenness: smooth; sleek, slick; even; clean (of a shave or cut); straight (of hair)",A2,0.058,88.31,82.59
1941,Text,noun,text (writing consisting of several sentences and forming a discrete unit),A2,0.031,88.31,82.6
1942,Kamerad,noun,comrade (fellow soldier),A2,0.061,88.31,82.6
1943,geheimnisvoll,adjective,"mysterious, cryptic, arcane, enigmatic",A2,0.076,88.31,82.61
1944,Wüste,noun,desert,A2,0.056,88.31,82.61
1945,Projekt,noun,project,A2,0.016,88.32,82.61
1946,abschneiden,verb,to cut off,A2,0.032,88.32,82.61
1947,bestrafen,verb,to punish,A2,0.016,88.32,82.62
1948,Sklave,noun,slave,A2,0.031,88.33,82.62
1949,ausführen,verb,"to take out, to take or lead outside",A2,0.047,88.33,82.62
1950,heiter,adjective,"cheerful, light-hearted",A2,0.122,88.33,82.63
1951,Wette,noun,bet,A2,0.027,88.33,82.63
1952,zart,adjective,tender,A2,0.11,88.33,82.64
1953,mutig,adjective,courageous,A2,0.021,88.34,82.64
1954,Konsul,noun,consul,A2,0.496,88.34,82.68
1955,überwinden,verb,"to overcome, to get over",A2,0.074,88.34,82.69
1956,herunter,adverb,"down, downwards (to the own location downwards)",A2,0.098,88.34,82.7
1957,Thema,noun,"topic, subject, issue",A2,0.01,88.35,82.7
1958,Fieber,noun,fever (heightened body temperature),A2,0.042,88.35,82.7
1959,innerhalb,preposition,"within, inside (of)",A2,0.021,88.35,82.7
1960,Norden,noun,north (direction),A2,0.021,88.35,82.7
1961,verzweifelt,adverb,desperately,A2,0.034,88.36,82.71
1962,soeben,adverb,"just now, quite recently (moments ago)",A2,0.068,88.36,82.71
1963,Partei,noun,political party,A2,0.055,88.36,82.72
1964,stillen,verb,"to nurse, suckle, breastfeed (a baby)",A2,0.106,88.36,82.73
1965,Felsen,noun,rock,A2,0.067,88.36,82.73
1966,Wirklichkeit,noun,reality,A2,0.017,88.36,82.74
1967,abhalten,verb,"to keep off, away, or out; to hold off",A2,0.028,88.37,82.74
1968,widerstehen,verb,"to withstand, to resist",A2,0.055,88.37,82.74
1969,erwidern,verb,"to reciprocate, return, to react with something analogous",A2,0.194,88.37,82.76
1970,anscheinend,adverb,apparently,A2,0.013,88.37,82.76
1971,landen,verb,"to land (to reach solid ground in an air, water or space vessel)",A2,0.014,88.38,82.76
1972,ersticken,verb,to smother,A2,0.045,88.38,82.76
1973,Jagd,noun,"hunt, hunting",A2,0.034,88.38,82.77
1974,daneben,adverb,"next to it, next to that",A2,0.039,88.38,82.77
1975,fürchterlich,adverb,"terribly, awfully",A2,0.092,88.38,82.78
1976,Rätsel,noun,"riddle, puzzle, mystery, enigma",A2,0.041,88.39,82.78
1977,verschwenden,verb,"to waste, to squander",A2,0.017,88.39,82.78
1978,Maler,noun,one who does this: to paint,A2,0.171,88.39,82.79
1979,Brauch,noun,custom,A2,0.01,88.39,82.8
1980,kleiden,verb,"to dress, to clothe",A2,0.11,88.4,82.8
1981,italienisch,adjective,Italian,A2,0.036,88.4,82.81
1982,Anspruch,noun,"entitlement, demand, expectation of what should come from someone or something",A2,0.063,88.4,82.81
1983,mindestens,adverb,at least (at a lower limit),A2,0.014,88.4,82.81
1984,herstellen,verb,"to produce, manufacture",A2,0.029,88.41,82.82
1985,königlich,adjective,"royal, regal, kingly",A2,0.041,88.41,82.82
1986,Verwandter,noun,relative (male or of unspecified gender),A2,0.055,88.41,82.82
1987,wobei,adverb,Introduces a comitative sentence,A2,0.096,88.41,82.83
1988,weiterhin,adverb,still,A2,0.019,88.41,82.83
1989,Bote,noun,messenger (male or of unspecified gender),A2,0.103,88.42,82.84
1990,sicherlich,adverb,certainly,A2,0.022,88.42,82.84
1991,Zelt,noun,"tent, marquee",A2,0.041,88.42,82.85
1992,läuten,verb,"to ring, toll (a bell)",A2,0.042,88.42,82.85
1993,Wirt,noun,pubkeeper; innkeeper,A2,0.143,88.42,82.86
1994,einsetzen,verb,to put in; set in; insert,A2,0.016,88.43,82.86
1995,Lehre,noun,"teaching, tenet",A2,0.078,88.43,82.87
1996,außen,adverb,outside,A2,0.047,88.43,82.87
1997,Feder,noun,feather,A2,0.068,88.43,82.88
1998,überraschen,verb,to surprise,A2,0.021,88.43,82.88
1999,erfunden,adjective,"invented, contrived",A2,0.028,88.43,82.88
2000,Leutnant,noun,lieutenant,A2,0.052,88.44,82.89
2001,verteilen,verb,to distribute,B1,0.024,88.44,82.89
2002,friedlich,adjective,"peaceful, placid, tranquil",B1,0.034,88.44,82.89
2003,Einladung,noun,invitation,B1,0.02,88.44,82.9
2004,Gräfin,noun,countess,B1,0.091,88.45,82.9
2005,entsprechen,verb,"to correspond (be equivalent or similar in character, etc.)",B1,0.043,88.45,82.91
2006,Pfeil,noun,arrow (missile),B1,0.059,88.45,82.91
2007,Veränderung,noun,change (process of becoming different),B1,0.035,88.45,82.91
2008,Partner,noun,"partner, associate (male or of unspecified gender)",B1,0.004,88.46,82.91
2009,Kammer,noun,chamber; room,B1,0.107,88.46,82.92
2010,Durst,noun,thirst,B1,0.05,88.46,82.93
2011,Bulle,noun,bull (male cattle),B1,0.004,88.47,82.93
2012,lebend,adjective,living,B1,0.026,88.47,82.93
2013,befragen,verb,"to question, to interview, to interrogate",B1,0.022,88.48,82.93
2014,Vorwurf,noun,reproach,B1,0.058,88.48,82.94
2015,blass,adjective,pale,B1,0.101,88.48,82.94
2016,Empfang,noun,"receipt, acceptance, welcome (act of receiving someone or something)",B1,0.038,88.48,82.95
2017,erfassen,verb,"to grasp, to grip, to seize (with one's hands)",B1,0.06,88.48,82.95
2018,aushalten,verb,"to stand, to endure something or someone (to stand, to take, to endure)",B1,0.045,88.48,82.95
2019,zulassen,verb,to allow,B1,0.01,88.49,82.96
2020,feucht,adjective,"wet, humid, moist, soggy, dank",B1,0.067,88.49,82.96
2021,ertönen,verb,to sound; to ring out,B1,0.031,88.49,82.96
2022,Strecke,noun,stretch,B1,0.055,88.49,82.97
2023,beschließen,verb,"to conclude, end; to terminate",B1,0.073,88.5,82.97
2024,beibringen,verb,to teach,B1,0.011,88.5,82.97
2025,entspannen,verb,to relax,B1,0.005,88.51,82.97
2026,Spruch,noun,"short saying, expression or dictum that is remembered or is meaningful in itself",B1,0.045,88.51,82.98
2027,gestatten,verb,to allow,B1,0.034,88.51,82.98
2028,ständig,adjective,"permanent, constant (without breaks)",B1,0.004,88.52,82.98
2029,Trost,noun,consolation,B1,0.08,88.52,82.99
2030,Gesang,noun,"singing, vocals",B1,0.063,88.52,82.99
2031,verzichten,verb,"to give up, to go without, to live without, to make do without, to do without, to forgo, to dispense with",B1,0.033,88.53,82.99
2032,schweben,verb,"to hover, soar, float, drift",B1,0.082,88.53,83
2033,Führer,noun,"guide (person who assists people by providing information, giving directions, etc.)",B1,0.042,88.53,83
2034,Post,noun,"mail, post (sent and received letters etc.)",B1,0.022,88.53,83
2035,Wächter,noun,guard (person who guards),B1,0.056,88.53,83.01
2036,Weisheit,noun,wisdom,B1,0.069,88.53,83.02
2037,himmlisch,adjective,"celestial, heavenly",B1,0.088,88.54,83.02
2038,Verfügung,noun,"disposal, disposition (control over something)",B1,0.034,88.54,83.03
2039,Esel,noun,"ass, donkey",B1,0.063,88.54,83.03
2040,lenken,verb,"to steer, drive",B1,0.036,88.54,83.03
2041,Stamm,noun,"tree trunk, main stem of a plant (but never used of thin stalks or twigs)",B1,0.042,88.54,83.04
2042,Frucht,noun,fruit (seed-bearing part of a plant),B1,0.065,88.54,83.04
2043,Schreibtisch,noun,"desk, cabinet (any table, frame, or case for the use of writers and readers; also a place for storing the papers)",B1,0.032,88.55,83.05
2044,bezeichnen,verb,"to name (give a name to), to call, to designate, to denote",B1,0.042,88.55,83.05
2045,Vertrag,noun,"contract, agreement",B1,0.024,88.55,83.05
2046,widerlich,adverb,"disgustingly, distastefully, abhorrently, detestably",B1,0.043,88.56,83.05
2047,Ideal,noun,"ideal (perfect standard, standard of excellence)",B1,0.046,88.56,83.06
2048,russisch,adjective,Russian,B1,0.01,88.56,83.06
2049,Leiter,noun,ladder,B1,0.017,88.56,83.06
2050,kündigen,verb,"to cancel, to terminate (a continuous obligation)",B1,0.023,88.57,83.06
2051,darstellen,verb,to depict; represent,B1,0.061,88.57,83.06
2052,putzen,verb,"to clean, especially by rubbing with something wet, to brush (one's teeth)",B1,0.032,88.57,83.07
2053,weigern,verb,to refuse,B1,0.028,88.57,83.07
2054,pro,preposition,"per, each",B1,0.007,88.58,83.07
2055,modern,adjective,modern,B1,0.028,88.58,83.07
2056,übersehen,verb,"to overlook, disregard, ignore",B1,0.037,88.58,83.08
2057,Vorfall,noun,incident (event or occurrence),B1,0.037,88.58,83.08
2058,Gegenstand,noun,"object, item, thing, article",B1,0.079,88.59,83.08
2059,loben,verb,to praise,B1,0.077,88.59,83.09
2060,ertrinken,verb,to drown,B1,0.023,88.59,83.09
2061,aufrichtig,adjective,"candid, frank, sincere, genuine, honest",B1,0.061,88.59,83.1
2062,Posten,noun,"post, station",B1,0.022,88.59,83.1
2063,Umgebung,noun,"environment (area around something), vicinity, surroundings",B1,0.052,88.59,83.1
2064,pflanzen,verb,to plant,B1,0.039,88.6,83.11
2065,Brille,noun,"glasses, spectacles (frames bearing two lenses worn in front of the eyes to correct vision)",B1,0.025,88.6,83.11
2066,entsetzlich,adverb,"horribly, terribly",B1,0.115,88.6,83.12
2067,Original,noun,original,B1,0.032,88.6,83.12
2068,faul,adjective,"foul, rotten, rancid",B1,0.042,88.6,83.12
2069,ausgeben,verb,"to spend, to expend; to pay out",B1,0.018,88.61,83.12
2070,hindern,verb,"to impede, hinder",B1,0.057,88.61,83.13
2071,Tugend,noun,virtue,B1,0.164,88.61,83.14
2072,ran,adverb,"near, close to, over to",B1,0.006,88.62,83.14
2073,Lohn,noun,wage,B1,0.064,88.62,83.15
2074,Pater,noun,father (monk who is a priest),B1,0.024,88.62,83.15
2075,wegnehmen,verb,"to take away from, to remove from",B1,0.02,88.62,83.15
2076,ächzen,verb,to groan,B1,0.021,88.63,83.15
2077,geistig,adjective,mental,B1,0.067,88.63,83.16
2078,Knopf,noun,button (fastener),B1,0.034,88.63,83.16
2079,innen,adverb,within,B1,0.048,88.63,83.16
2080,romantisch,adjective,romantic,B1,0.015,88.63,83.17
2081,nützlich,adjective,useful; helpful,B1,0.023,88.64,83.17
2082,feststellen,verb,"to determine, to ascertain, to establish, to find, to see",B1,0.034,88.64,83.17
2083,umkehren,verb,to turn around,B1,0.043,88.64,83.17
2084,reifen,verb,"to ripen, to mature",B1,0.034,88.64,83.18
2085,nebenan,adverb,next door,B1,0.036,88.64,83.18
2086,Neuigkeit,noun,news (item of),B1,0.008,88.65,83.18
2087,Eile,noun,hurry,B1,0.049,88.65,83.18
2088,Zeitpunkt,noun,"moment (instant of time), point in time, a timepoint",B1,0.01,88.66,83.18
2089,Prüfung,noun,an official test or examination on a subject,B1,0.033,88.66,83.19
2090,Karriere,noun,career (occupational path),B1,0.013,88.66,83.19
2091,hüten,verb,to watch,B1,0.084,88.66,83.19
2092,weitergehen,verb,"to proceed, progress, continue",B1,0.022,88.67,83.2
2093,Fabrik,noun,plant (factory or industrial facility),B1,0.029,88.67,83.2
2094,Räuber,noun,"robber, thief; pirate; sucker",B1,0.075,88.67,83.2
2095,Ergebnis,noun,"result, outcome, conclusion, finding, fruit, consequence, upshot, answer",B1,0.014,88.67,83.21
2096,nachsehen,verb,"to check, to look into, to investigate, to explore, to consider",B1,0.022,88.68,83.21
2097,Palast,noun,palace,B1,0.035,88.68,83.21
2098,Schmied,noun,smith,B1,0.073,88.68,83.22
2099,Idiot,noun,idiot; moron,B1,0.002,88.69,83.22
2100,erschaffen,verb,to create; to produce; to make,B1,0.016,88.7,83.22
2101,Kranker,noun,"sick person, sufferer (from a disease), patient, invalid (male or of unspecified gender)",B1,0.039,88.7,83.22
2102,Minister,noun,minister (a person who is commissioned by the government for public service),B1,0.021,88.7,83.22
2103,verlieben,verb,to fall in love,B1,0.026,88.7,83.23
2104,Helm,noun,helmet,B1,0.068,88.7,83.23
2105,nochmals,adverb,"again, once more",B1,0.027,88.71,83.24
2106,tauschen,verb,"to trade, to exchange, to swap, to barter",B1,0.031,88.71,83.24
2107,unsichtbar,adjective,invisible,B1,0.037,88.71,83.24
2108,Ruhm,noun,"fame, glory",B1,0.054,88.71,83.25
2109,voran,adverb,"forth, ahead, forwards",B1,0.034,88.71,83.25
2110,Hafen,noun,harbour/harbor; port; haven,B1,0.032,88.72,83.25
2111,geschäftlich,adjective,"business, commercial",B1,0.033,88.72,83.25
2112,Korb,noun,"basket, creel",B1,0.064,88.72,83.26
2113,niedrig,adjective,low,B1,0.059,88.72,83.26
2114,okay,adjective,OK,B1,0,88.85,83.26
2115,Kohle,noun,coal (material; either stone coal or charcoal),B1,0.024,88.85,83.26
2116,Suppe,noun,soup,B1,0.031,88.86,83.27
2117,Van,noun,van,B1,0.011,88.86,83.27
2118,Nagel,noun,"A nail, the horny plate on fingers and toes of humans and certain animals which mostly consists of keratin.",B1,0.036,88.86,83.27
2119,klettern,verb,to climb (e.g. up a tree),B1,0.035,88.86,83.27
2120,dicke,adverb,"amply, sufficiently",B1,0.045,88.87,83.28
2121,entgehen,verb,to slip past (someone),B1,0.044,88.87,83.28
2122,Mittagessen,noun,lunch,B1,0.02,88.87,83.28
2123,Stille,noun,"stillness, silence",B1,0.105,88.87,83.29
2124,hinterher,adverb,behind,B1,0.021,88.87,83.29
2125,Stätte,noun,"venue, place, spot, site",B1,0.057,88.87,83.3
2126,gespannt,adjective,"curious, excited (of a person; about seeing how something will turn out)",B1,0.069,88.88,83.3
2127,erschöpft,adjective,exhausted,B1,0.043,88.88,83.31
2128,trösten,verb,"to console, to comfort, to support someone (emotionally)",B1,0.072,88.88,83.31
2129,ängstlich,adjective,"fearful, anxious",B1,0.048,88.88,83.32
2130,zugleich,adverb,"at the same time, simultaneously",B1,0.192,88.88,83.34
2131,Spaziergang,noun,walk (trip made by walking),B1,0.06,88.88,83.34
2132,Hintergrund,noun,background,B1,0.039,88.88,83.34
2133,Dichter,noun,poet (male or of unspecified gender),B1,0.108,88.88,83.35
2134,antun,verb,"to put on, to dress",B1,0.013,88.89,83.35
2135,Eingang,noun,entrance (doorway or passageway into a building or other enclosed space),B1,0.05,88.89,83.36
2136,Osten,noun,East,B1,0.023,88.89,83.36
2137,ausruhen,verb,"to rest, to recover (through rest and relaxation)",B1,0.023,88.89,83.36
2138,bewachen,verb,"to guard, to watch over",B1,0.023,88.9,83.36
2139,stattfinden,verb,"to take place, to happen",B1,0.029,88.9,83.37
2140,Genie,noun,genius,B1,0.018,88.9,83.37
2141,Schwäche,noun,weakness,B1,0.041,88.9,83.37
2142,Antrag,noun,"application, request",B1,0.025,88.91,83.37
2143,klären,verb,"to clarify, to clear up (an issue or misunderstanding), to fill in unknown details, to resolve, to sort out",B1,0.011,88.91,83.37
2144,lasten,verb,"to weigh on, to bear on",B1,0.044,88.91,83.38
2145,harmlos,adjective,harmless,B1,0.044,88.91,83.38
2146,Qual,noun,"agony, anguish, torment, torture (that one suffers)",B1,0.072,88.92,83.39
2147,Zwerg,noun,dwarf (creature),B1,0.044,88.92,83.39
2148,anstatt,preposition,instead of,B1,0.02,88.92,83.39
2149,Haltung,noun,posture (manner of holding one's body),B1,0.04,88.92,83.4
2150,Melde,noun,message,B1,0.022,88.92,83.4
2151,verhandeln,verb,"to negotiate, to debate",B1,0.022,88.93,83.4
2152,erhöhen,verb,"to heighten, raise",B1,0.031,88.93,83.4
2153,verstorben,adjective,"deceased, late",B1,0.037,88.93,83.41
2154,strecken,verb,"to stretch (oneself, for example after waking up)",B1,0.117,88.93,83.42
2155,Locke,noun,curl (single loop in hair),B1,0.041,88.93,83.42
2156,ersparen,verb,"to save, save up, put aside (money)",B1,0.029,88.93,83.42
2157,keuchen,verb,to gasp,B1,0.031,88.94,83.43
2158,Staatsanwalt,noun,"public prosecutor (UK), district attorney (US)",B1,0.025,88.94,83.43
2159,mitmachen,verb,"to take part, to participate, to join in",B1,0.018,88.94,83.43
2160,hold,adjective,"affectionate, devoted, faithful, loyal",B1,0.103,88.94,83.44
2161,Streich,noun,stroke (act of striking e.g. with a hand or a cutting weapon),B1,0.046,88.94,83.44
2162,aufstellen,verb,"to establish, to postulate",B1,0.037,88.95,83.45
2163,kühn,adjective,daring; audacious,B1,0.246,88.95,83.46
2164,überreden,verb,"to talk over, to talk into, to persuade",B1,0.026,88.95,83.47
2165,Ferne,noun,distance,B1,0.102,88.95,83.48
2166,verlaufen,verb,"to get lost, stray",B1,0.034,88.95,83.48
2167,erziehen,verb,to nurture,B1,0.05,88.95,83.48
2168,sowieso,adverb,"anyway, anyhow, in any case",B1,0.004,88.96,83.48
2169,Kummer,noun,"grief, sorrow",B1,0.024,88.96,83.49
2170,Sofa,noun,"sofa, couch (upholstered seat with a raised back that accommodates at least two people)",B1,0.061,88.96,83.49
2171,Segen,noun,blessing,B1,0.044,88.96,83.5
2172,Rauschen,noun,a murmur,B1,0.112,88.96,83.5
2173,gewünscht,adjective,"desired, wanted",B1,0.039,88.97,83.51
2174,eintreffen,verb,to arrive,B1,0.036,88.97,83.51
2175,Kissen,noun,cushion; pillow (bag filled with soft material used to sit or rest one’s head on),B1,0.049,88.97,83.51
2176,Mai,noun,May (month),B1,0.025,88.97,83.52
2177,Gegner,noun,"adversary, opponent, enemy",B1,0.023,88.97,83.52
2178,bewaffnet,adjective,armed,B1,0.018,88.98,83.52
2179,leugnen,verb,to deny (assert the untruth of),B1,0.057,88.98,83.52
2180,Dutzend,noun,dozen,B1,0.02,88.98,83.53
2181,Teppich,noun,"rug, carpet (cloth covering for a floor)",B1,0.041,88.98,83.53
2182,bedeckt,adjective,"covered, coated, capped",B1,0.09,88.98,83.54
2183,Amen,noun,amen (the formula),B1,0.017,88.99,83.54
2184,Husten,noun,cough,B1,0.023,88.99,83.54
2185,Verdienst,noun,merit (something worthy of a high rating),B1,0.033,88.99,83.54
2186,bluten,verb,to bleed,B1,0.025,88.99,83.54
2187,lohnen,verb,to be worthwhile,B1,0.028,89,83.55
2188,nirgends,adverb,nowhere (in no place),B1,0.044,89,83.55
2189,Untertitel,noun,subheading,B1,0.006,89,83.55
2190,Sehnsucht,noun,"yearning, longing; pining",B1,0.103,89,83.56
2191,überprüfen,verb,"to check, to verify",B1,0.003,89.01,83.56
2192,Klauen,noun,stealing,B1,0.008,89.02,83.56
2193,Rasen,noun,lawn,B1,0.041,89.02,83.56
2194,Bedürfnis,noun,"desire, urge",B1,0.046,89.02,83.57
2195,Anruf,noun,a (phone) call,B1,0.004,89.03,83.57
2196,erstaunlich,adjective,"amazing, impressive, surprising (contrary to or surpassing expectations, in a positive or neutral framing)",B1,0.037,89.03,83.57
2197,Entfernung,noun,distance,B1,0.051,89.03,83.57
2198,Reiter,noun,rider (one who rides a horse),B1,0.056,89.03,83.58
2199,Süden,noun,south (direction),B1,0.019,89.04,83.58
2200,bang,adjective,"scared, frightened, afraid, fearful",B1,0.068,89.04,83.58
2201,ungern,adverb,"unwillingly; usually expressed in English through verb phrases such as ""doesn't like"", ""don't want"", etc.",B1,0.031,89.04,83.59
2202,dazwischen,adverb,between them,B1,0.071,89.04,83.59
2203,anklagen,verb,to indict (to make a formal accusation or indictment against (a party) by the findings of a jury),B1,0.029,89.04,83.59
2204,Politik,noun,politics,B1,0.02,89.05,83.6
2205,Schneider,noun,cutter (a person or device that cuts),B1,0.074,89.05,83.6
2206,Rand,noun,"edge, brink, rim (outer part of something)",B1,0.052,89.05,83.61
2207,beugen,verb,"to bend something, to bow something",B1,0.097,89.05,83.62
2208,beantworten,verb,to answer (a question),B1,0.014,89.05,83.62
2209,geliebt,adjective,loved,B1,0.049,89.05,83.62
2210,Künstlerin,noun,artist (female),B1,0.193,89.05,83.64
2211,Ansicht,noun,"view (a depiction of a subject, especially from a specific perspective)",B1,0.042,89.06,83.64
2212,sonderbar,adjective,"strange, odd",B1,0.165,89.06,83.65
2213,ausschließen,verb,"to exclude, to debar",B1,0.031,89.06,83.65
2214,Ankunft,noun,arrival,B1,0.042,89.06,83.66
2215,sprengen,verb,"to blow up, to blast",B1,0.026,89.06,83.66
2216,Rauch,noun,"smoke, fume",B1,0.029,89.06,83.66
2217,regnen,verb,to rain,B1,0.024,89.07,83.66
2218,Programm,noun,program (set of structured ideas or activities; a list thereof),B1,0.01,89.07,83.67
2219,korrekt,adjective,correct,B1,0.024,89.07,83.67
2220,Unschuld,noun,innocence,B1,0.058,89.07,83.67
2221,nahen,verb,"to approach, to come near",B1,0.074,89.07,83.68
2222,Fortschritt,noun,"progress, advancement",B1,0.02,89.08,83.68
2223,Gelächter,noun,"laughter, laughing",B1,0.05,89.08,83.68
2224,kühl,adjective,cool,B1,0.067,89.08,83.69
2225,Wohnzimmer,noun,living room,B1,0.042,89.08,83.69
2226,Fuchs,noun,fox (animal),B1,0.047,89.08,83.7
2227,Patient,noun,patient (male or of unspecified sex or female),B1,0.004,89.09,83.7
2228,Schmuck,noun,jewelry,B1,0.045,89.09,83.7
2229,regeln,verb,to regulate,B1,0.014,89.09,83.7
2230,Rückkehr,noun,return,B1,0.03,89.1,83.7
2231,Vorhang,noun,curtain,B1,0.05,89.1,83.71
2232,Westen,noun,west,B1,0.018,89.1,83.71
2233,Witwe,noun,widow,B1,0.04,89.1,83.71
2234,schlucken,verb,to swallow,B1,0.023,89.1,83.72
2235,verwunden,verb,"to wound (hurt by piercing the skin, especially with a weapon)",B1,0.034,89.11,83.72
2236,körperlich,adjective,"bodily, physical",B1,0.036,89.11,83.72
2237,häufig,adverb,"frequently, often",B1,0.04,89.11,83.72
2238,loslassen,verb,"to let loose, let go (physically or emotionally)",B1,0.017,89.11,83.73
2239,Aufregung,noun,excitement,B1,0.03,89.11,83.73
2240,feige,adverb,cowardly,B1,0.04,89.12,83.73
2241,füttern,verb,to feed (to give food to),B1,0.021,89.12,83.73
2242,Papst,noun,pope (head of the Roman Catholic Church; title of other religious leaders such as the Coptic Pope),B1,0.033,89.12,83.74
2243,Type,noun,a type in typesetting,B1,0.002,89.13,83.74
2244,schleppen,verb,to tow; to haul; to drag,B1,0.047,89.13,83.74
2245,Bach,noun,"brook, stream",B1,0.055,89.13,83.74
2246,Tempel,noun,temple (edifice dedicated to one or multiple deities),B1,0.036,89.14,83.75
2247,aussuchen,verb,"to select, to choose, to pick",B1,0.014,89.14,83.75
2248,Rollen,noun,scroll lock,B1,0.046,89.14,83.75
2249,Andere,noun,the other / different one (female),B1,0.133,89.14,83.76
2250,flüchtig,adjective,fleeting,B1,0.067,89.14,83.77
2251,erleichtern,verb,"to facilitate, make easier",B1,0.036,89.14,83.77
2252,Liebhaber,noun,"aficionado, enthusiast, lover",B1,0.04,89.15,83.78
2253,beherrschen,verb,to master,B1,0.028,89.15,83.78
2254,beachten,verb,"to note, notice, observe",B1,0.022,89.15,83.78
2255,abwarten,verb,to await; to wait for,B1,0.035,89.15,83.78
2256,Position,noun,"position, location",B1,0.006,89.16,83.78
2257,Ehemann,noun,"married man, husband",B1,0.005,89.16,83.78
2258,plaudern,verb,to chat,B1,0.063,89.16,83.79
2259,bedürfen,verb,"to require, to need",B1,0.088,89.17,83.79
2260,gehorchen,verb,to obey,B1,0.045,89.17,83.8
2261,Angesicht,noun,"face, visage, countenance",B1,0.054,89.17,83.8
2262,winzig,adjective,"minute, tiny (very small)",B1,0.026,89.17,83.81
2263,Handschuh,noun,"any handwear; glove, mitten, mitt, gauntlet",B1,0.036,89.17,83.81
2264,langweilen,verb,to bore (inspire boredom in someone),B1,0.02,89.17,83.81
2265,Schaf,noun,sheep,B1,0.031,89.18,83.81
2266,Kindheit,noun,childhood,B1,0.029,89.18,83.81
2267,Prinzip,noun,principle,B1,0.033,89.18,83.82
2268,Verfahren,noun,"procedure, process",B1,0.036,89.18,83.82
2269,Kehle,noun,throat (front of the neck),B1,0.036,89.18,83.82
2270,unverständlich,adjective,incomprehensible,B1,0.029,89.18,83.82
2271,Verkauf,noun,sale,B1,0.013,89.19,83.83
2272,vögeln,verb,"to catch birds (compare ""angeln"")",B1,0.022,89.19,83.83
2273,gütig,adjective,"kind, gracious, benign, benevolent",B1,0.043,89.19,83.83
2274,Backofen,noun,oven,B1,0.047,89.19,83.83
2275,beschweren,verb,"to weight, to weight down",B1,0.031,89.2,83.84
2276,grob,adjective,"coarse, rough",B1,0.046,89.2,83.84
2277,umher,adverb,"around, round, about",B1,0.158,89.2,83.85
2278,verbieten,verb,"to forbid, prohibit (someone from doing something)",B1,0.031,89.2,83.85
2279,Kandidat,noun,candidate,B1,0.041,89.2,83.86
2280,frech,adjective,"cheeky, barefaced, rude, saucy",B1,0.043,89.2,83.86
2281,schüchtern,adverb,"timidly, shyly",B1,0.038,89.2,83.86
2282,meinetwegen,adverb,because of me; for my sake,B1,0.025,89.21,83.87
2283,Übung,noun,practice (degree of being used to and proficient in some activity),B1,0.027,89.21,83.87
2284,locken,verb,"to lure, to entice, to tempt",B1,0.044,89.21,83.87
2285,jederzeit,adverb,anytime,B1,0.014,89.21,83.87
2286,erteilen,verb,to issue to; to give to (especially orders),B1,0.029,89.21,83.88
2287,rechtzeitig,adverb,in time,B1,0.017,89.22,83.88
2288,prächtig,adjective,"splendid, wonderful",B1,0.069,89.22,83.88
2289,Ratte,noun,rat,B1,0.011,89.22,83.88
2290,Frosch,noun,frog,B1,0.039,89.22,83.89
2291,Dunkelheit,noun,darkness,B1,0.035,89.23,83.89
2292,einziehen,verb,"to thread (elastic, thread etc.)",B1,0.024,89.23,83.89
2293,verachten,verb,"to despise, to scorn",B1,0.08,89.23,83.9
2294,Gefangener,noun,"prisoner, captive, detainee, prison inmate, incarceree (male or of unspecified gender)",B1,0.018,89.23,83.9
2295,sowohl,conjunction,"both (only in combination with a contrasting second element, see derived terms)",B1,0.07,89.23,83.9
2296,höflich,adjective,polite (well-mannered),B1,0.039,89.23,83.91
2297,glänzend,adjective,"shiny, glossy",B1,0.1,89.23,83.91
2298,jenseits,preposition,"beyond, on the other side of",B1,0.041,89.24,83.92
2299,verdächtig,adjective,"suspicious, suspect",B1,0.015,89.24,83.92
2300,Fang,noun,"catch, capture",B1,0.012,89.24,83.92
2301,Verkehr,noun,"correspondence, traffic (interaction involving the exchange of performances or messages)",B1,0.047,89.24,83.92
2302,Gouverneur,noun,governor (male or of unspecified gender),B1,0.02,89.25,83.93
2303,senken,verb,to lower,B1,0.103,89.25,83.93
2304,Verteidigung,noun,defence,B1,0.021,89.25,83.93
2305,sämtlich,adjective,all,B1,0.046,89.25,83.94
2306,Ufer,noun,"shore, shoreline",B1,0.072,89.25,83.94
2307,betragen,verb,"to amount to, to be (a numerical value)",B1,0.046,89.25,83.95
2308,zustimmen,verb,to agree,B1,0.02,89.25,83.95
2309,Streifen,noun,stripe,B1,0.057,89.26,83.95
2310,selig,adjective,very or deeply happy; overjoyed,B1,0.14,89.26,83.97
2311,Probe,noun,trial,B1,0.019,89.26,83.97
2312,Vorsitzender,noun,"chairman, chairperson, chair, board chairman (male or of unspecified gender)",B1,0.039,89.26,83.97
2313,Trauer,noun,"grief, sorrow",B1,0.032,89.26,83.97
2314,Vernunft,noun,"reason, good sense",B1,0.049,89.26,83.98
2315,vernehmen,verb,to hear,B1,0.21,89.26,83.99
2316,umsehen,verb,to look around,B1,0.051,89.26,84
2317,abbrechen,verb,to break off (remove by breaking),B1,0.028,89.27,84
2318,unerwartet,adjective,unexpected,B1,0.047,89.27,84
2319,baden,verb,"to bathe, to give a bath to or have a bath.",B1,0.034,89.27,84.01
2320,Station,noun,"stop, stopover, station (a place where one stops on the way; the act of stopping itself)",B1,0.012,89.27,84.01
2321,Horn,noun,horn (musical instrument),B1,0.045,89.27,84.01
2322,abgeschlossen,adjective,"separate, enclosed",B1,0.014,89.28,84.01
2323,bekämpfen,verb,"to fight (against something), to combat",B1,0.017,89.28,84.01
2324,Irrtum,noun,"error, mistake",B1,0.036,89.28,84.02
2325,Winkel,noun,"angle, nook; corner (seen from the inside)",B1,0.074,89.28,84.02
2326,begeistert,adjective,"enthusiastic, thrilled",B1,0.018,89.28,84.02
2327,dunkeln,verb,to darken,B1,0.047,89.28,84.03
2328,tödlich,adjective,"deadly, mortal, lethal, fatal",B1,0.015,89.29,84.03
2329,reparieren,verb,to repair,B1,0.006,89.29,84.03
2330,fällen,verb,"to cut down, to chop down, to fell (a tree)",B1,0.017,89.29,84.03
2331,kichern,verb,"to giggle, snicker",B1,0.035,89.3,84.03
2332,Stil,noun,style,B1,0.017,89.3,84.04
2333,einrichten,verb,to establish,B1,0.039,89.3,84.04
2334,Handel,noun,deal,B1,0.034,89.3,84.04
2335,Tiefe,noun,depth,B1,0.077,89.3,84.05
2336,Nebel,noun,"fog, mist, haze",B1,0.044,89.3,84.05
2337,Gemeinde,noun,municipality,B1,0.025,89.31,84.05
2338,zwanzig,number,twenty,B1,0.059,89.31,84.06
2339,gemütlich,adverb,"unhurried, leisurely",B1,0.038,89.31,84.06
2340,vertreiben,verb,"to force to leave, to drive away",B1,0.026,89.31,84.06
2341,sinnlos,adjective,"meaningless, pointless, senseless",B1,0.022,89.31,84.06
2342,höchstens,adverb,at most,B1,0.029,89.31,84.07
2343,Wäsche,noun,"wash, washing, laundry (the act of cleaning with water; an instance thereof)",B1,0.023,89.32,84.07
2344,befürchten,verb,"to fear (something), be afraid of",B1,0.019,89.32,84.07
2345,abziehen,verb,"to subtract, to deduct",B1,0.024,89.32,84.07
2346,verdanken,verb,"to owe, to attribute to",B1,0.025,89.32,84.07
2347,Rettung,noun,rescue,B1,0.019,89.32,84.08
2348,erbärmlich,adjective,"pitiful, miserable, pathetic, wretched",B1,0.039,89.32,84.08
2349,unterliegen,verb,to be defeated [with dative ‘by’],B1,0.02,89.33,84.08
2350,verschweigen,verb,"to conceal (to hide something by remaining silent about it), to fail to mention, to keep (information) quiet",B1,0.038,89.33,84.08
2351,durchmachen,verb,"to go through, to endure, to suffer",B1,0.009,89.33,84.09
2352,Angebot,noun,"offer, proposition",B1,0.006,89.34,84.09
2353,beunruhigen,verb,"to worry, to trouble, to alarm",B1,0.026,89.34,84.09
2354,Schöne,noun,"beautiful, lovely, pretty, handsome (as a noun)",B1,0.042,89.34,84.09
2355,Käse,noun,cheese,B1,0.02,89.34,84.09
2356,göttlich,adjective,"divine, godly",B1,0.043,89.34,84.1
2357,teilnehmen,verb,to participate (in),B1,0.034,89.35,84.1
2358,Lügner,noun,liar (one who tells lies) (male or of unspecified gender),B1,0.011,89.35,84.1
2359,Behandlung,noun,treatment,B1,0.017,89.35,84.1
2360,schick,adjective,"elegant, dressy",B1,0.019,89.36,84.1
2361,einlassen,verb,to let in; to admit; to grant entry,B1,0.036,89.36,84.11
2362,Daten,noun,"data, plural of Datum (“piece of information”)",B1,0.003,89.36,84.11
2363,Besitzer,noun,owner (one who owns),B1,0.025,89.36,84.11
2364,anfassen,verb,to touch,B1,0.007,89.37,84.11
2365,gedenken,verb,"to remember, to commemorate",B1,0.074,89.37,84.12
2366,allmählich,adverb,"gradually, little by little",B1,0.1,89.37,84.12
2367,verwirren,verb,to confuse,B1,0.042,89.37,84.13
2368,Persönlichkeit,noun,personality,B1,0.029,89.37,84.13
2369,Truppe,noun,"troupe (company of actors, etc.)",B1,0.015,89.38,84.13
2370,spanisch,adjective,Spanish,B1,0.021,89.38,84.13
2371,Klavier,noun,piano,B1,0.035,89.38,84.13
2372,hinzu,adverb,"in addition, besides",B1,0.129,89.38,84.14
2373,Haupt,noun,chief,B1,0.207,89.38,84.16
2374,geplant,adjective,"proposed, scheduled, planned",B1,0.007,89.39,84.16
2375,hinüber,adverb,"across, over, there (towards a different side; in direction away from the speaker)",B1,0.114,89.39,84.17
2376,Netz,noun,"net; web; mesh (construction of interwoven fibres, e.g. that of a fisher, a spider, etc.)",B1,0.026,89.39,84.17
2377,Begriff,noun,"term, word",B1,0.078,89.39,84.18
2378,Scheidung,noun,separation,B1,0.028,89.39,84.18
2379,Anführer,noun,"leader, head, chief, commander; person in charge of a group or organisation",B1,0.014,89.39,84.18
2380,Vision,noun,vision,B1,0.018,89.4,84.18
2381,Luke,noun,"hatch (opening in the ceiling/floor of a room, in the deck of a ship, etc.)",B1,0.007,89.4,84.18
2382,As,noun,"as, a unit and a Roman coin",B1,0.049,89.4,84.19
2383,Verhandlung,noun,negotiation,B1,0.021,89.4,84.19
2384,blutig,adjective,"bloody, bleeding and/or covered in blood",B1,0.042,89.41,84.19
2385,finster,adjective,dark,B1,0.091,89.41,84.2
2386,Presse,noun,press (device used to apply pressure),B1,0.013,89.41,84.2
2387,Kreatur,noun,creature,B1,0.019,89.41,84.2
2388,Pech,noun,pitch (sticky substance),B1,0.014,89.41,84.2
2389,Gasse,noun,"alley, ginnel, twitchel",B1,0.077,89.41,84.21
2390,Anklage,noun,charge,B1,0.021,89.42,84.21
2391,wegwerfen,verb,"to throw away, to discard",B1,0.026,89.42,84.21
2392,Neffe,noun,nephew (son of one's sibling or sibling-in-law),B1,0.022,89.42,84.22
2393,Zauberer,noun,"(male) magician, wizard, warlock, sorcerer",B1,0.03,89.42,84.22
2394,prost,interjection,cheers (the usual toast when drinking alcohol),B1,0.012,89.43,84.22
2395,erfinden,verb,to invent,B1,0.029,89.43,84.22
2396,Thron,noun,throne,B1,0.036,89.43,84.22
2397,bunt,adjective,multi-colored; colorful; variegated,B1,0.13,89.43,84.23
2398,Mahlzeit,noun,meal,B1,0.04,89.43,84.24
2399,wahrlich,adverb,"truly, really, verily",B1,0.109,89.43,84.25
2400,Hauptsache,noun,"main thing, most important thing",B1,0.032,89.43,84.25
2401,hervorragend,adjective,"outstanding, superb",B1,0.015,89.43,84.26
2402,Schädel,noun,skull,B1,0.018,89.44,84.26
2403,Zauber,noun,"charm, spell, an instance of magic action",B1,0.021,89.44,84.26
2404,Hirn,noun,brain (organ),B1,0.02,89.44,84.26
2405,aufgehen,verb,"to open, come undone",B1,0.053,89.44,84.26
2406,möglicherweise,adverb,"possibly, potentially",B1,0.011,89.45,84.27
2407,Zweiter,noun,runner-up (male or of unspecified gender),B1,0.027,89.45,84.27
2408,Tuch,noun,"cloth; piece of fabric or tissue of any kind: scarf, kerchief, blanket, towel, etc.",B1,0.073,89.45,84.27
2409,verleihen,verb,"to award (someone an honor, a medal, etc); to confer (a title or degree upon someone)",B1,0.032,89.45,84.28
2410,ablegen,verb,to take off,B1,0.029,89.45,84.28
2411,Gewicht,noun,weight,B1,0.025,89.45,84.28
2412,gönnen,verb,"to bestow, to indulge (someone's wishes), to treat to, to spoil",B1,0.053,89.45,84.28
2413,aufbrechen,verb,"to break open, through",B1,0.03,89.46,84.29
2414,bestimmen,verb,to determine,B1,0.028,89.46,84.29
2415,gratulieren,verb,to congratulate,B1,0.01,89.46,84.29
2416,dulden,verb,to endure,B1,0.06,89.46,84.29
2417,Hitze,noun,heat,B1,0.032,89.46,84.3
2418,präsentieren,verb,"to present, to showcase",B1,0.011,89.47,84.3
2419,Hoheit,noun,Highness,B1,0.011,89.47,84.3
2420,Zucker,noun,sugar,B1,0.036,89.47,84.3
2421,ergehen,verb,forms the perfect with sein,B1,0.071,89.47,84.31
2422,Palme,noun,palm tree,B1,0.02,89.47,84.31
2423,endgültig,adjective,"final, ultimate",B1,0.028,89.48,84.31
2424,würdig,adjective,worthy,B1,0.064,89.48,84.31
2425,Krieger,noun,warrior,B1,0.011,89.48,84.32
2426,hiermit,adverb,hereby (formal phrase),B1,0.015,89.48,84.32
2427,frieren,verb,"to be cold, feel cold [auxiliary haben] (unlike English freeze neither informal nor expressing extreme cold.)",B1,0.034,89.48,84.32
2428,widmen,verb,"to dedicate, to devote",B1,0.031,89.49,84.32
2429,Cousine,noun,female cousin,B1,0.02,89.49,84.32
2430,Frühling,noun,spring,B1,0.042,89.49,84.33
2431,Duft,noun,"aroma, fragrance",B1,0.06,89.49,84.33
2432,aufrecht,adjective,"upright, erect, tall",B1,0.055,89.49,84.34
2433,verehren,verb,"to revere, to venerate",B1,0.045,89.49,84.34
2434,Bahnhof,noun,"railway depot, railroad station, railway station, train station",B1,0.026,89.49,84.34
2435,wertvoll,adjective,valuable,B1,0.012,89.5,84.34
2436,entziehen,verb,to revoke (a right or permission),B1,0.06,89.5,84.35
2437,biegen,verb,to bend something (to form something into a curve),B1,0.051,89.5,84.35
2438,Bekannter,noun,"acquaintance, friend (male or of unspecified gender)",B1,0.042,89.5,84.35
2439,Burg,noun,"castle, fortification",B1,0.046,89.5,84.36
2440,rauben,verb,"to rob, to steal (criminal act)",B1,0.037,89.5,84.36
2441,währen,verb,"to last, persist",B1,0.043,89.5,84.37
2442,ausdenken,verb,"to come up with, to think up, to make up (a story, a plan, a strategy, lies etc.)",B1,0.023,89.5,84.37
2443,Hammer,noun,"hammer, mallet",B1,0.015,89.51,84.37
2444,vornehmen,verb,to undertake,B1,0.062,89.51,84.37
2445,verabreden,verb,to arrange,B1,0.018,89.51,84.38
2446,pünktlich,adjective,"punctual, on time",B1,0.014,89.51,84.38
2447,Studium,noun,study (the act of studying in general),B1,0.025,89.51,84.38
2448,Nadel,noun,"needle; hook (implement for sewing, knitting, or crocheting)",B1,0.028,89.52,84.38
2449,überstehen,verb,"to endure, to overcome, to survive, to pull through",B1,0.022,89.52,84.38
2450,Geschlecht,noun,sex,B1,0.065,89.52,84.39
2451,eindringen,verb,to intrude,B1,0.031,89.52,84.39
2452,Verzweiflung,noun,desperation,B1,0.079,89.52,84.4
2453,elegant,adjective,elegant,B1,0.044,89.52,84.4
2454,ausbrechen,verb,to break out,B1,0.03,89.52,84.4
2455,Elle,noun,ulna (bone of the forearm),B1,0.01,89.53,84.4
2456,aussteigen,verb,"to exit, get off (especially a vehicle)",B1,0.014,89.53,84.4
2457,Religion,noun,religion,B1,0.026,89.53,84.41
2458,moralisch,adjective,moral,B1,0.032,89.53,84.41
2459,sacht,adverb,gently,B1,0.028,89.53,84.41
2460,verschieben,verb,"to move, to shift",B1,0.018,89.54,84.41
2461,Einsamkeit,noun,loneliness,B1,0.056,89.54,84.42
2462,losgehen,verb,to leave,B1,0.017,89.54,84.42
2463,zurücklassen,verb,to leave behind,B1,0.019,89.54,84.42
2464,aufräumen,verb,to tidy up,B1,0.023,89.54,84.42
2465,angeblich,adverb,"allegedly, supposedly, reportedly, reputedly",B1,0.013,89.54,84.42
2466,Asche,noun,ash; ashes,B1,0.026,89.55,84.43
2467,Titel,noun,title,B1,0.018,89.55,84.43
2468,künstlich,adjective,artificial,B1,0.037,89.55,84.43
2469,bitter,adjective,bitter (having a bitter taste),B1,0.039,89.55,84.44
2470,eingreifen,verb,"to intervene, to interfere",B1,0.033,89.55,84.44
2471,Paradies,noun,paradise,B1,0.031,89.55,84.44
2472,Bahn,noun,"route, trail",B1,0.036,89.55,84.44
2473,Kleinigkeit,noun,"bagatelle, trifle, little something, minor thing (insignificant, minor, or little thing)",B1,0.024,89.56,84.45
2474,Herzog,noun,duke,B1,0.037,89.56,84.45
2475,Chinese,noun,"A Chinese person, particularly a Han Chinese person",B1,0.015,89.56,84.45
2476,Schrift,noun,"writing, script",B1,0.046,89.56,84.45
2477,Johannes,noun,penis; cock,B1,0.085,89.56,84.46
2478,Hahn,noun,"cock, rooster",B1,0.033,89.56,84.46
2479,Beute,noun,booty; spoils; haul (something robbed),B1,0.028,89.56,84.47
2480,Pfeife,noun,whistle,B1,0.038,89.57,84.47
2481,Tafel,noun,"panel, board (e.g., wooden panel)",B1,0.061,89.57,84.47
2482,vorbeikommen,verb,to come over; to drop by,B1,0.011,89.57,84.48
2483,Störung,noun,"disturbance, disruption, nuisance, bother",B1,0.021,89.57,84.48
2484,Nacken,noun,nape of the neck,B1,0.044,89.57,84.48
2485,flach,adjective,shallow (wide and not deep),B1,0.05,89.57,84.48
2486,verkünden,verb,"to proclaim, pronounce (to officially declare)",B1,0.044,89.58,84.49
2487,horchen,verb,"to listen closely (to try to hear, especially a weak sound)",B1,0.114,89.58,84.5
2488,gründlich,adverb,"thoroughly, completely",B1,0.024,89.58,84.5
2489,Widerstand,noun,"resistance (act of resisting, or the capacity to resist)",B1,0.03,89.58,84.5
2490,kompliziert,adjective,"complicated, complex",B1,0.006,89.58,84.5
2491,Brett,noun,"board, plank",B1,0.028,89.58,84.5
2492,erstens,adverb,"first, firstly, in the first place",B1,0.02,89.59,84.51
2493,verbreitet,adjective,"common, widespread, prevalent",B1,0.045,89.59,84.51
2494,vergiftet,adjective,poisoned,B1,0.02,89.59,84.51
2495,schmeicheln,verb,to flatter to an exaggerated degree,B1,0.055,89.59,84.51
2496,Ausweg,noun,"way out, escape route",B1,0.027,89.59,84.52
2497,Brand,noun,"fire, blaze (destructive occurrence)",B1,0.034,89.59,84.52
2498,Viertel,noun,"quarter, fourth",B1,0.015,89.6,84.52
2499,namens,preposition,on behalf of,B1,0.012,89.6,84.52
2500,Bogen,noun,bow (weapon),B1,0.062,89.6,84.53
2501,privat,adjective,private,B1,0.006,89.6,84.53
2502,Säule,noun,"column, pillar",B1,0.039,89.6,84.53
2503,Zuschauer,noun,spectator; viewer,B1,0.026,89.61,84.53
2504,Villa,noun,villa,B1,0.033,89.61,84.54
2505,Kurs,noun,course (direction),B1,0.006,89.61,84.54
2506,Anlass,noun,"cause, starting, motive, occasion",B1,0.029,89.61,84.54
2507,Bestie,noun,"a wild and very dangerous animal, a beast, monster",B1,0.018,89.61,84.54
2508,steif,adjective,"stiff, rigid",B1,0.052,89.62,84.54
2509,brillant,adjective,brilliant,B1,0.017,89.62,84.54
2510,Möbel,noun,piece of furniture,B1,0.034,89.62,84.55
2511,Maß,noun,measure (standard against which something can be judged),B1,0.062,89.62,84.55
2512,Rechte,noun,right (right hand or side),B1,0.045,89.62,84.56
2513,sozusagen,adverb,"so to speak, in a manner of speaking",B1,0.028,89.62,84.56
2514,ablenken,verb,to divert,B1,0.012,89.63,84.56
2515,Gewohnheit,noun,habit,B1,0.055,89.63,84.56
2516,schräg,adjective,"skewed, oblique, slanted (neither parallel nor at a right angle to some implied line)",B1,0.035,89.63,84.57
2517,Zeile,noun,"line, row",B1,0.048,89.63,84.57
2518,europäisch,adjective,European,B1,0.014,89.63,84.57
2519,Gewinn,noun,"profit, gain, yield",B1,0.029,89.63,84.57
2520,Jammer,noun,misery,B1,0.058,89.63,84.58
2521,Taube,noun,"pigeon, dove (male or female bird of the Columba genus)",B1,0.03,89.63,84.58
2522,aufbauen,verb,"to build, to construct, to erect",B1,0.01,89.64,84.58
2523,Operation,noun,operation,B1,0.004,89.64,84.58
2524,erregen,verb,to thrill; arouse; excite; titillate,B1,0.065,89.64,84.59
2525,Zettel,noun,"a small or loose piece of paper, slip",B1,0.037,89.65,84.59
2526,zurückhalten,verb,to hold back,B1,0.036,89.65,84.59
2527,Termin,noun,date (day on which a certain event takes place),B1,0.005,89.65,84.59
2528,Wurst,noun,sausage,B1,0.023,89.65,84.6
2529,überwachen,verb,"to control, to monitor, to supervise",B1,0.009,89.66,84.6
2530,Handlung,noun,plot (e.g. of a play),B1,0.037,89.66,84.6
2531,anvertrauen,verb,to entrust in various ways (to entrust),B1,0.035,89.66,84.6
2532,Reichtum,noun,"wealth, richness",B1,0.046,89.66,84.61
2533,vereinigt,adjective,united,B1,0.025,89.66,84.61
2534,Einrichtung,noun,"facility, institution",B1,0.032,89.66,84.61
2535,jugendlich,adjective,youthful,B1,0.039,89.66,84.61
2536,funktionieren,verb,"to work, function",B1,0.001,89.68,84.61
2537,Scheibe,noun,flat piece or surface,B1,0.035,89.68,84.62
2538,Information,noun,"a piece of information; (in the plural) information, intelligence (things to be known about a topic)",B1,0.001,89.7,84.62
2539,lauern,verb,"lurk; to follow, watch, or spy in hiding or in the background",B1,0.027,89.7,84.62
2540,Gentleman,noun,"gentleman (well-mannered, charming man)",B1,0.004,89.7,84.62
2541,Schütze,noun,shooter,B1,0.017,89.7,84.62
2542,Dummheit,noun,stupidity,B1,0.017,89.71,84.62
2543,Bestes,noun,best (thing),B1,0.019,89.71,84.62
2544,beklagen,verb,"to pity, to lament",B1,0.053,89.71,84.63
2545,Lunge,noun,"lung, lungs",B1,0.018,89.71,84.63
2546,dergleichen,pronoun,such,B1,0.112,89.71,84.64
2547,günstig,adjective,"favourable, propitious, opportune",B1,0.054,89.71,84.64
2548,vertraulich,adjective,"confidential, private",B1,0.024,89.71,84.64
2549,vergleichen,verb,to compare,B1,0.025,89.72,84.65
2550,feindlich,adjective,enemy,B1,0.034,89.72,84.65
2551,Pfad,noun,path,B1,0.042,89.72,84.65
2552,Nordost,noun,northeast,B1,0.007,89.72,84.65
2553,Anwalt,noun,"attorney, lawyer",B1,0.001,89.73,84.65
2554,Verräter,noun,traitor (male or of unspecified gender),B1,0.011,89.74,84.65
2555,Ausnahme,noun,exception,B1,0.027,89.74,84.66
2556,begehren,verb,to desire,B1,0.052,89.74,84.66
2557,kreischen,verb,"to squeal, to shriek, to scream",B1,0.029,89.74,84.66
2558,lebhaft,adjective,"lively, active, buoyant or agile",B1,0.138,89.74,84.67
2559,reizen,verb,to irritate (to cause or induce displeasure or irritation),B1,0.054,89.74,84.68
2560,akzeptieren,verb,"to accept, to approve, to take, to agree to (e.g. a proposal)",B1,0.005,89.75,84.68
2561,morgens,adverb,"in the morning, a.m.",B1,0.028,89.75,84.68
2562,Krebs,noun,"crustacean, crab, crayfish",B1,0.01,89.75,84.68
2563,Mütze,noun,cap,B1,0.04,89.75,84.68
2564,anfangs,adverb,"initially, at the beginning",B1,0.028,89.75,84.69
2565,andererseits,adverb,on the other hand,B1,0.04,89.75,84.69
2566,verführen,verb,"to seduce, to debauch, to ensnare, to entrap",B1,0.037,89.76,84.69
2567,versorgen,verb,to look after,B1,0.014,89.76,84.69
2568,erhoben,adjective,raised,B1,0.09,89.76,84.7
2569,anzeigen,verb,"to display, to show (a measurement e.g. time, temperature, speed etc.)",B1,0.022,89.76,84.7
2570,regelmäßig,adverb,"regularly, periodically, on a regular basis, routinely",B1,0.036,89.76,84.71
2571,Warte,noun,"lookout, guarding post",B1,0.012,89.77,84.71
2572,Bibel,noun,"Bible, bible",B1,0.019,89.77,84.71
2573,Gespenst,noun,"ghost, spectre",B1,0.058,89.77,84.71
2574,Feigling,noun,"coward, chicken",B1,0.009,89.77,84.71
2575,Kauf,noun,purchase,B1,0.011,89.77,84.71
2576,Werkzeug,noun,tool,B1,0.02,89.77,84.72
2577,Sitzung,noun,meeting,B1,0.025,89.78,84.72
2578,Lord,noun,"lord, Lord (British nobleman)",B1,0.005,89.78,84.72
2579,Gepäck,noun,"luggage, baggage",B1,0.019,89.78,84.72
2580,abhauen,verb,to cut off (with a cutting weapon),B1,0.003,89.79,84.72
2581,winken,verb,to wave one's hand,B1,0.087,89.79,84.73
2582,Warnung,noun,warning,B1,0.014,89.79,84.73
2583,Geisel,noun,hostage,B1,0.01,89.79,84.73
2584,herab,adverb,"down, downwards (to the own location downwards)",B1,0.135,89.8,84.74
2585,anwesend,adjective,present (in the immediate vicinity),B1,0.023,89.8,84.74
2586,fleißig,adverb,"diligently, industriously, assiduously, sedulously",B1,0.057,89.8,84.75
2587,stützen,verb,"to support, to underpin (to keep from falling)",B1,0.091,89.8,84.75
2588,Maus,noun,mouse (animal),B1,0.016,89.8,84.76
2589,auftreten,verb,"to occur, appear, arise (suddenly)",B1,0.027,89.8,84.76
2590,Kompliment,noun,compliment,B1,0.02,89.8,84.76
2591,Genosse,noun,"partner in something, mate",B1,0.025,89.8,84.76
2592,unruhig,adverb,fitfully,B1,0.084,89.81,84.77
2593,Angestellter,noun,"employee, worker, clerk, servant, staffer, staff member (male or of unspecified gender)",B1,0.016,89.81,84.77
2594,wonach,adverb,after what,B1,0.01,89.81,84.77
2595,Selbstmord,noun,suicide,B1,0.008,89.81,84.77
2596,Nichte,noun,niece,B1,0.034,89.81,84.77
2597,Aufenthalt,noun,stay; residence; presence (the state of being in a place),B1,0.06,89.82,84.78
2598,untergehen,verb,to set (of a heavenly body: to disappear below the horizon),B1,0.036,89.82,84.78
2599,Buchstabe,noun,letter (of the alphabet),B1,0.031,89.82,84.78
2600,wandeln,verb,"to wander, to stroll",B1,0.095,89.82,84.79
2601,vielmehr,conjunction,on the contrary,B1,0.121,89.82,84.8
2602,sehnen,verb,"to yearn, to long",B1,0.053,89.82,84.8
2603,Seil,noun,"rope, line, cord",B1,0.013,89.82,84.8
2604,Puls,noun,pulse,B1,0.024,89.82,84.81
2605,einschließen,verb,to lock up,B1,0.02,89.83,84.81
2606,kleben,verb,to glue,B1,0.02,89.83,84.81
2607,Flut,noun,"flow, flood, high tide (rising movement of the tide; the time around when it reaches its peak)",B1,0.065,89.83,84.82
2608,zucken,verb,to jerk,B1,0.099,89.83,84.82
2609,Kenntnis,noun,knowledge,B1,0.034,89.83,84.83
2610,Behörde,noun,authority (governmental institution),B1,0.015,89.83,84.83
2611,helle,adjective,"clever, smart, bright",B1,0.07,89.83,84.83
2612,Katastrophe,noun,"catastrophe, disaster, calamity",B1,0.018,89.83,84.84
2613,Zigarre,noun,cigar,B1,0.037,89.84,84.84
2614,Unterstützung,noun,"support, assistance, backing, also endorsement",B1,0.009,89.84,84.84
2615,falten,verb,to fold,B1,0.094,89.84,84.85
2616,ohnmächtig,adjective,"unconscious (Having lost consciousness for a short time as in ohnmächtig werden (""to faint, to pass out"").)",B1,0.028,89.84,84.85
2617,nötigen,verb,to coerce (force someone through violence or threat),B1,0.066,89.84,84.85
2618,übernachten,verb,"to stay overnight, to overnight, stay the night, sleep over",B1,0.019,89.84,84.86
2619,Nation,noun,nation (community of people),B1,0.014,89.84,84.86
2620,Dokument,noun,document,B1,0.014,89.85,84.86
2621,neigen,verb,"to incline, slant, tilt, bend, lower (move something in some direction by bowing or turning slightly)",B1,0.068,89.85,84.86
2622,Hai,noun,shark,B1,0.028,89.85,84.87
2623,Vieh,noun,"livestock; farm animals (animals kept for their milk, meat, skin, etc.)",B1,0.032,89.85,84.87
2624,prima,adjective,"great, super",B1,0.005,89.85,84.87
2625,verbessern,verb,"to improve (to make better), to enhance",B1,0.014,89.86,84.87
2626,Feier,noun,celebration,B1,0.021,89.86,84.87
2627,beteiligen,verb,to let someone take part in something,B1,0.016,89.86,84.87
2628,genial,adjective,"genius, ingenious, genial (in the sense of genius)",B1,0.01,89.86,84.87
2629,Beginn,noun,"start, beginning",B1,0.024,89.86,84.88
2630,sorgfältig,adjective,"careful, meticulous, thorough, diligent",B1,0.064,89.87,84.88
2631,aufwachsen,verb,to grow up,B1,0.01,89.87,84.88
2632,rückwärts,adverb,backwards,B1,0.047,89.87,84.89
2633,reif,adjective,ripe,B1,0.03,89.87,84.89
2634,Bau,noun,"building, construction (the act of constructing)",B1,0.02,89.87,84.89
2635,Faden,noun,"yarn, thread",B1,0.037,89.87,84.89
2636,nutzlos,adjective,useless,B1,0.018,89.87,84.89
2637,bedroht,adjective,threatened,B1,0.011,89.88,84.9
2638,Revolution,noun,revolution,B1,0.018,89.88,84.9
2639,bedanken,verb,"to thank, to express thanks",B1,0.012,89.88,84.9
2640,durchsuchen,verb,to search,B1,0.006,89.88,84.9
2641,Geschrei,noun,"yelling, hue, clamor",B1,0.05,89.89,84.9
2642,erleiden,verb,"to suffer, to experience (a negative event or treatment)",B1,0.024,89.89,84.9
2643,Degen,noun,"rapier, smallsword",B1,0.291,89.89,84.93
2644,zerreißen,verb,"to rip, to tear",B1,0.045,89.89,84.93
2645,Abgrund,noun,"abyss, precipice",B1,0.073,89.89,84.94
2646,Zusammenhang,noun,"coherence, cohesion",B1,0.032,89.89,84.94
2647,vergangen,adjective,"past, bygone",B1,0.021,89.89,84.94
2648,Ziege,noun,goat,B1,0.02,89.89,84.94
2649,entsetzen,verb,"to shock, horrify, appall",B1,0.106,89.89,84.95
2650,dumpf,adjective,dull,B1,0.099,89.89,84.96
2651,Segel,noun,sail,B1,0.026,89.89,84.96
2652,tückisch,adjective,"dangerous, perilous",B1,0.025,89.9,84.96
2653,schelten,verb,to scold (someone); to rebuke; to chide,B1,0.058,89.9,84.97
2654,übertragen,verb,"to transfer, transmit",B1,0.015,89.9,84.97
2655,Kai,noun,"wharf, quay",B1,0.047,89.9,84.97
2656,Laute,noun,lute,B1,0.033,89.9,84.98
2657,äußern,verb,to utter; to say; to express,B1,0.06,89.9,84.98
2658,momentan,adverb,at the moment,B1,0.011,89.9,84.99
2659,verständigen,verb,"to notify, inform, advise, warn, alert",B1,0.053,89.9,84.99
2660,zünden,verb,to kindle,B1,0.021,89.91,84.99
2661,Öffentlichkeit,noun,public,B1,0.021,89.91,84.99
2662,messen,verb,to measure (something) (to ascertain a quantity),B1,0.031,89.91,85
2663,Käfig,noun,cage,B1,0.015,89.91,85
2664,just,adverb,just,B1,0.035,89.91,85
2665,gelehrt,adjective,"learned, scholarly",B1,0.043,89.91,85
2666,gießen,verb,"to pour; usually only of liquids, especially of large quantities",B1,0.041,89.91,85.01
2667,Arsch,noun,"arse, posterior, buttocks",B1,0.001,89.93,85.01
2668,Bemerkung,noun,remark,B1,0.072,89.93,85.01
2669,Kinn,noun,chin,B1,0.079,89.93,85.02
2670,scherzen,verb,to joke; to jest; to frolic,B1,0.028,89.93,85.02
2671,Appetit,noun,appetite,B1,0.018,89.94,85.02
2672,Ferien,noun,"holidays during which an institution (especially a school, university) or a business is closed; break",B1,0.022,89.94,85.02
2673,Nahrung,noun,"nourishment, food",B1,0.032,89.94,85.03
2674,großzügig,adverb,generously,B1,0.013,89.94,85.03
2675,breiten,verb,to spread,B1,0.111,89.94,85.04
2676,rüber,adverb,over here,B1,0.002,89.95,85.04
2677,Bräutigam,noun,bridegroom (a man with regard to his wedding),B1,0.052,89.95,85.04
2678,vorlesen,verb,to read (aloud),B1,0.024,89.95,85.04
2679,Erwartung,noun,"expectation, expectancy",B1,0.039,89.95,85.05
2680,Note,noun,note (character indicating the length and pitch of a tone),B1,0.018,89.95,85.05
2681,irgendwann,adverb,"sometime, somewhen, anytime",B1,0.002,89.96,85.05
2682,technisch,adjective,technical,B1,0.006,89.97,85.05
2683,Humor,noun,humor (something funny),B1,0.017,89.97,85.05
2684,Angel,noun,"tackle, fishing rod (angler's tool consisting of hook (Haken), line (Schnur), and rod (Rute))",B1,0.008,89.97,85.05
2685,Grimm,noun,"wrath, deep-rooted anger, rage",B1,0.086,89.97,85.06
2686,Stift,noun,"pin (short rod of metal, wood etc., used e.g. for fastening)",B1,0.019,89.97,85.06
2687,gewähren,verb,"to grant, to allow",B1,0.051,89.97,85.06
2688,Paket,noun,"packet, package, parcel (the term is almost exclusively used for packages sent by mail)",B1,0.017,89.98,85.06
2689,Spieler,noun,player,B1,0.017,89.98,85.06
2690,flüchten,verb,to flee (to run away; to escape) [with vor (+ dative) ‘from a threat’],B1,0.024,89.98,85.07
2691,Verständnis,noun,"understanding, comprehension",B1,0.024,89.98,85.07
2692,spannend,adjective,"thrilling, exciting, gripping, enthralling, spellbinding",B1,0.028,89.99,85.07
2693,Gemälde,noun,painting,B1,0.025,89.99,85.07
2694,erwecken,verb,"to awake, to arouse",B1,0.042,89.99,85.07
2695,Aufnahme,noun,reception,B1,0.017,89.99,85.07
2696,Satan,noun,"Satan, the Devil",B1,0.041,89.99,85.08
2697,Kasten,noun,crate (e.g. for bottles),B1,0.037,89.99,85.08
2698,Panik,noun,panic,B1,0.007,90,85.08
2699,Signal,noun,signal,B1,0.006,90,85.08
2700,widersprechen,verb,to object; to disagree,B1,0.034,90,85.08
2701,schmal,adjective,"narrow, slender (not wide, comparatively long), small",B1,0.119,90,85.09
2702,Mäuse,noun,money,B1,0.014,90,85.09
2703,Schluck,noun,"sip, swallow, small drink",B1,0.02,90.01,85.1
2704,Chaos,noun,chaos,B1,0.007,90.01,85.1
2705,trocknen,verb,"to dry (to become dry, cease being wet)",B1,0.048,90.01,85.1
2706,respektieren,verb,to respect,B1,0.007,90.01,85.1
2707,weglaufen,verb,to run away,B1,0.006,90.02,85.1
2708,mauern,verb,"to build a wall, to lay bricks",B1,0.041,90.02,85.1
2709,erschlagen,verb,"to slay, to strike dead",B1,0.057,90.02,85.11
2710,Perle,noun,pearl (concretion from oysters or imitation thereof),B1,0.034,90.02,85.11
2711,reichlich,adverb,"abundantly, copiously",B1,0.047,90.02,85.12
2712,benötigen,verb,"to need, to require",B1,0.007,90.02,85.12
2713,angeln,verb,"to angle, to fish (with a fishing rod)",B1,0.006,90.03,85.12
2714,Stab,noun,"rod, staff, baton",B1,0.043,90.03,85.12
2715,Glied,noun,external body part,B1,0.102,90.03,85.13
2716,Täter,noun,"perpetrator, delinquent",B1,0.008,90.03,85.13
2717,Diamant,noun,diamond (allotrope of carbon),B1,0.012,90.03,85.13
2718,regieren,verb,to govern,B1,0.015,90.03,85.13
2719,online,adjective,online,B1,0.004,90.04,85.13
2720,Drohung,noun,threat (expression of intent to injure or punish another),B1,0.03,90.04,85.13
2721,Akt,noun,"act, deed",B1,0.031,90.04,85.14
2722,Klient,noun,client,B1,0.009,90.04,85.14
2723,keineswegs,adverb,"in no way, by no means, not at all, not a bit",B1,0.064,90.04,85.14
2724,kostbar,adjective,precious,B1,0.037,90.04,85.15
2725,verwickelt,adjective,"involved, embroiled",B1,0.021,90.05,85.15
2726,Kate,noun,"hut, cot, cottage",B1,0.004,90.05,85.15
2727,knallen,verb,"to bang, to pop (to produce a loud, sharp, percussive sound)",B1,0.013,90.05,85.15
2728,Dreck,noun,dirt,B1,0.006,90.06,85.15
2729,Anlage,noun,"public green area, site, park, garden",B1,0.028,90.06,85.15
2730,hüpfen,verb,"to hop, to skip, to bounce (of a ball)",B1,0.047,90.06,85.16
2731,zukünftig,adjective,future,B1,0.018,90.06,85.16
2732,sechste,adjective,sixth,B1,0.048,90.06,85.16
2733,Inhalt,noun,content,B1,0.047,90.06,85.16
2734,taub,adjective,deaf (not hearing),B1,0.02,90.06,85.17
2735,Spion,noun,spy,B1,0.008,90.07,85.17
2736,auflegen,verb,to lay on,B1,0.015,90.07,85.17
2737,reinigen,verb,to clean,B1,0.018,90.07,85.17
2738,unsicher,adjective,uncertain,B1,0.03,90.07,85.17
2739,erbarmen,verb,"to take pity on, to have mercy for",B1,0.046,90.07,85.18
2740,zurückgeben,verb,"to give back, return",B1,0.012,90.07,85.18
2741,abhängen,verb,to depend (as a necessary condition),B1,0.021,90.07,85.18
2742,vorläufig,adverb,provisionally; temporarily; for the time being,B1,0.054,90.08,85.18
2743,Bus,noun,bus (public transport),B1,0.005,90.08,85.18
2744,äußere,adjective,"outer, outside, exterior",B1,0.039,90.08,85.19
2745,womöglich,adverb,possibly,B1,0.016,90.08,85.19
2746,zurückbringen,verb,"to bring back, recall, restore",B1,0.008,90.09,85.19
2747,betteln,verb,"to beg (alms), to panhandle",B1,0.025,90.09,85.19
2748,Instrument,noun,instrument,B1,0.031,90.09,85.19
2749,Gegensatz,noun,"opposition, antagonism",B1,0.027,90.09,85.19
2750,dar,adverb,only used in darstellen etc.,B1,0.037,90.09,85.2
2751,Erscheinung,noun,appearance (way of being perceived by others),B1,0.086,90.09,85.21
2752,Versammlung,noun,"gathering, meeting, assembly, congregation",B1,0.04,90.09,85.21
2753,Eid,noun,oath,B1,0.038,90.09,85.21
2754,kürzlich,adverb,"recently, lately (in the recent past)",B1,0.021,90.09,85.21
2755,Pfund,noun,"a metric pound, 500 grams, half a kilogram",B1,0.006,90.1,85.21
2756,Risiko,noun,risk,B1,0.003,90.1,85.21
2757,Anweisung,noun,"directive, order",B1,0.009,90.11,85.21
2758,August,noun,August (month),B1,0.019,90.11,85.22
2759,Anschlag,noun,attack (terror attack or assassination),B1,0.022,90.11,85.22
2760,erschüttern,verb,"to shake, to rock",B1,0.053,90.11,85.22
2761,Gemahl,noun,spouse; husband,B1,0.077,90.11,85.23
2762,Krachen,noun,"coombe, dell",B1,0.021,90.11,85.23
2763,Bombe,noun,bomb (explosive device),B1,0.002,90.12,85.23
2764,Kaufmann,noun,"merchant, businessman, trader",B1,0.151,90.12,85.24
2765,sichtbar,adjective,visible,B1,0.06,90.12,85.25
2766,beziehen,verb,"to refer, to relate",B1,0.023,90.12,85.25
2767,Schoß,noun,lap (area between the waist and knees of a seated person),B1,0.095,90.12,85.26
2768,Herbst,noun,"autumn, fall",B1,0.041,90.12,85.26
2769,belügen,verb,"to lie to, to tell someone a lie, to tell someone lies",B1,0.009,90.12,85.26
2770,Sultan,noun,sultan,B1,0.058,90.13,85.26
2771,Hüfte,noun,hip; hips,B1,0.031,90.13,85.27
2772,dramatisch,adjective,dramatic,B1,0.009,90.13,85.27
2773,munter,adjective,"merry, awake, brisk, cheery",B1,0.081,90.13,85.27
2774,kratzen,verb,"to scratch (rub a surface with a sharp, pointy rough object, especially to remove itching)",B1,0.015,90.13,85.28
2775,wesentlich,adjective,essential (concerning the essence or true nature of something),B1,0.023,90.13,85.28
2776,büßen,verb,"to pay for, to make amends for",B1,0.034,90.13,85.28
2777,knurren,verb,"to growl, to grunt, to grumble",B1,0.01,90.14,85.28
2778,gefährden,verb,"to endanger, compromise",B1,0.011,90.14,85.28
2779,erobern,verb,"to conquer, to capture",B1,0.018,90.14,85.28
2780,Geständnis,noun,confession (open admittance of having done something),B1,0.02,90.14,85.28
2781,gebieten,verb,to demand,B1,0.06,90.14,85.29
2782,Motiv,noun,motive,B1,0.01,90.14,85.29
2783,bevorzugen,verb,"to favor, to prefer",B1,0.015,90.15,85.29
2784,Griechisch,noun,"Greek, anal sex",B1,0.035,90.15,85.29
2785,durchführen,verb,"to perform, to conduct (a study, a ceremony, an operation, etc.)",B1,0.013,90.15,85.29
2786,vorschlagen,verb,"to propose, to suggest",B1,0.017,90.15,85.3
2787,Vergleich,noun,comparison,B1,0.02,90.15,85.3
2788,jedermann,pronoun,everyone,B1,0.05,90.15,85.3
2789,Bereich,noun,"area, realm, range, scope",B1,0.01,90.16,85.3
2790,Enkel,noun,ankle,B1,0.017,90.16,85.3
2791,schonen,verb,to spare (not harm),B1,0.045,90.16,85.31
2792,unterdrücken,verb,"to suppress, to oppress",B1,0.032,90.16,85.31
2793,Versicherung,noun,insurance; an insurance policy,B1,0.025,90.16,85.31
2794,außerordentlich,adverb,"extraordinarily, exceptionally",B1,0.075,90.16,85.32
2795,versinken,verb,"to sink, to descend",B1,0.074,90.16,85.32
2796,zischen,verb,"to hiss, to sizzle, to whiz",B1,0.032,90.16,85.32
2797,Generation,noun,generation,B1,0.01,90.17,85.33
2798,Tiger,noun,tiger,B1,0.011,90.17,85.33
2799,Schüssel,noun,"bowl, platter",B1,0.045,90.17,85.33
2800,erlösen,verb,"to deliver, to set free",B1,0.037,90.17,85.33
2801,erneut,adverb,"again, anew",B1,0.012,90.17,85.33
2802,beurteilen,verb,"to form an opinion on, to judge",B1,0.024,90.17,85.34
2803,vorübergehend,adjective,temporary,B1,0.031,90.17,85.34
2804,ordnen,verb,"to put in order, to order, to arrange",B1,0.042,90.18,85.34
2805,wehen,verb,"to blow (of wind, a storm, etc.)",B1,0.047,90.18,85.35
2806,Vorgesetzter,noun,"boss, superior (male or of unspecified gender)",B1,0.02,90.18,85.35
2807,siegen,verb,"to be victorious, to win",B1,0.023,90.18,85.35
2808,mehrmals,adverb,"several times, repeatedly",B1,0.044,90.18,85.35
2809,wildern,verb,to poach,B1,0.039,90.18,85.36
2810,Unruhe,noun,"turbulence, perturbation, moving more than biding, budging more than considered pleasant",B1,0.057,90.18,85.36
2811,Leistung,noun,"performance, accomplishment, achievement",B1,0.017,90.18,85.36
2812,Prozent,noun,percent,B1,0.006,90.19,85.36
2813,zärtlich,adverb,tenderly,B1,0.082,90.19,85.37
2814,Sitte,noun,"custom, tradition, common practice, rite",B1,0.081,90.19,85.37
2815,ausrichten,verb,to align,B1,0.015,90.19,85.38
2816,blenden,verb,to dazzle; to blind (confuse someone’s sight by means of excessive brightness),B1,0.039,90.19,85.38
2817,verpassen,verb,to miss (be late for; be unable to use or attend),B1,0.001,90.2,85.38
2818,Experiment,noun,experiment,B1,0.009,90.2,85.38
2819,besetzt,adjective,occupied,B1,0.024,90.2,85.38
2820,Café,noun,"a café, a coffee shop",B1,0.015,90.2,85.38
2821,erfolgreich,adjective,successful,B1,0.005,90.21,85.38
2822,bezweifeln,verb,"to doubt, to question (Used with either a noun or dass.)",B1,0.01,90.21,85.38
2823,Leitung,noun,"cable, line, wire",B1,0.014,90.21,85.38
2824,Hintern,noun,"The backside, bottom, butt, behind, hinder",B1,0.034,90.22,85.38
2825,gelegentlich,adverb,occasionally,B1,0.045,90.22,85.39
2826,betreiben,verb,"to run, to operate (a business, an engine, etc.)",B1,0.019,90.22,85.39
2827,platt,adjective,flat,B1,0.016,90.22,85.39
2828,belästigen,verb,"to molest, to harass",B1,0.009,90.22,85.39
2829,riskieren,verb,to risk,B1,0.003,90.23,85.39
2830,Klinke,noun,door handle,B1,0.02,90.23,85.39
2831,korrigieren,verb,to correct,B1,0.015,90.23,85.39
2832,Gans,noun,goose,B1,0.038,90.23,85.4
2833,preisen,verb,"to hail, laud, praise",B1,0.033,90.23,85.4
2834,verkehrt,adjective,wrong,B1,0.034,90.23,85.4
2835,Herde,noun,"herd, flock (group of livestock or other large mammals)",B1,0.032,90.24,85.41
2836,Sessel,noun,"armchair, easy chair (comfortable chair with supports for the arms or elbows)",B1,0.087,90.24,85.41
2837,drucken,verb,"to print (a book, newspaper etc.)",B1,0.029,90.24,85.42
2838,frühstücken,verb,"to have breakfast, to breakfast (to eat the morning meal)",B1,0.023,90.24,85.42
2839,naiv,adjective,green (inexperienced),B1,0.027,90.24,85.42
2840,Wehe,noun,"labour pain, contraction",B1,0.044,90.24,85.42
2841,Kopie,noun,"a copy, the result of copying something, a duplicate",B1,0.009,90.24,85.42
2842,Busch,noun,"bush, shrub",B1,0.03,90.24,85.43
2843,Nest,noun,nest,B1,0.031,90.25,85.43
2844,verhungern,verb,to starve to death,B1,0.012,90.25,85.43
2845,unnötig,adjective,unnecessary,B1,0.018,90.25,85.43
2846,worum,adverb,about what,B1,0.003,90.25,85.43
2847,Krug,noun,mug,B1,0.067,90.25,85.44
2848,April,noun,April,B1,0.01,90.26,85.44
2849,Gürtel,noun,belt (band worn around the waist),B1,0.025,90.26,85.44
2850,Herrin,noun,lady (female equivalent of a lord),B1,0.031,90.26,85.44
2851,aufregend,adjective,"exciting, captivating (evoking giddiness or thrill)",B1,0.019,90.26,85.44
2852,Lokal,noun,"A restaurant, especially when small and/or traditional; a pub that serves hot food; an inn.",B1,0.015,90.26,85.44
2853,Küste,noun,coast,B1,0.021,90.27,85.45
2854,mieten,verb,"to hire, to rent",B1,0.016,90.27,85.45
2855,worin,adverb,"in what, wherein",B1,0.076,90.27,85.45
2856,Henker,noun,"hangman, an executioner, particularly for executions where blood is not shed",B1,0.036,90.27,85.46
2857,Element,noun,element,B1,0.026,90.27,85.46
2858,durchgehen,verb,to go through; to walk through,B1,0.011,90.27,85.46
2859,unerträglich,adjective,"unbearable, intolerable",B1,0.042,90.27,85.46
2860,Silber,noun,silver (chemical element with the symbol Ag),B1,0.035,90.27,85.46
2861,ansprechen,verb,to speak to; to address,B1,0.014,90.28,85.47
2862,rauskommen,verb,to come out,B1,0.002,90.28,85.47
2863,schalten,verb,to switch,B1,0.018,90.28,85.47
2864,murmeln,verb,"to mumble, to murmur, to mutter (a word, sentence, etc.)",B1,0.051,90.28,85.47
2865,geradezu,adverb,downright,B1,0.065,90.28,85.48
2866,verweigern,verb,"to refuse, to deny [with accusative ‘’] and [with dative ‘’] (often as the necessary requirements have not been met)",B1,0.017,90.29,85.48
2867,positiv,adjective,positive,B1,0.007,90.29,85.48
2868,Front,noun,the front end or side of something.,B1,0.018,90.29,85.48
2869,nähen,verb,to sew,B1,0.023,90.29,85.48
2870,Marsch,noun,march,B1,0.029,90.29,85.48
2871,planen,verb,to plan (some action or event),B1,0.009,90.3,85.48
2872,telefonieren,verb,to have a telephone call,B1,0.004,90.3,85.48
2873,saugen,verb,to suck (to create underpressure with a tube-like object such as one's mouth),B1,0.024,90.3,85.49
2874,freilich,adverb,"however, albeit",B1,0.223,90.3,85.51
2875,Restaurant,noun,restaurant,B1,0.003,90.31,85.51
2876,steuern,verb,"to steer, to navigate, to pilot, to operate, to control",B1,0.009,90.31,85.51
2877,gleichfalls,adverb,likewise,B1,0.054,90.31,85.52
2878,Butter,noun,butter,B1,0.026,90.31,85.52
2879,Militär,noun,military,B1,0.013,90.31,85.52
2880,Kutsche,noun,"carriage, coach (a wagon, usually upholstered, pulled by horses)",B1,0.026,90.31,85.52
2881,gefüllt,adjective,"stuffed, filled",B1,0.034,90.32,85.52
2882,Erkenntnis,noun,"realization, recognition, insight, perception",B1,0.051,90.32,85.53
2883,Null,noun,zero (a numeral; numeric symbol of zero),B1,0.007,90.32,85.53
2884,erregt,adverb,excitedly,B1,0.044,90.32,85.53
2885,fortfahren,verb,"to drive away, drive off",B1,0.042,90.32,85.53
2886,laufend,adjective,"current, ongoing, pending",B1,0.013,90.32,85.54
2887,Busen,noun,a woman’s breasts collectively,B1,0.085,90.32,85.54
2888,ursprünglich,adjective,"original, initial, first",B1,0.022,90.32,85.54
2889,befolgen,verb,"to observe, follow, obey (orders, laws, rules etc); to comply with or abide by",B1,0.012,90.33,85.54
2890,erblicken,verb,"to sight, catch sight of",B1,0.171,90.33,85.56
2891,Grundstück,noun,"land, parcel, real estate",B1,0.019,90.33,85.56
2892,Dolch,noun,dagger,B1,0.043,90.33,85.56
2893,Becher,noun,"a cylindrical or slightly conical drinking vessel without a stem, typically with no handle, beaker",B1,0.041,90.33,85.57
2894,reiben,verb,to rub; to chafe,B1,0.042,90.33,85.57
2895,Kälte,noun,coldness; cold,B1,0.027,90.33,85.57
2896,Münze,noun,"money, in its senses as",B1,0.014,90.33,85.57
2897,Heer,noun,army (ground forces),B1,0.068,90.33,85.58
2898,Überzeugung,noun,"conviction, belief",B1,0.031,90.33,85.58
2899,Wart,noun,"keeper, guard, one responsible for the upkeep and/or protection of something",B1,0.007,90.34,85.58
2900,Schokolade,noun,chocolate (food made from ground roasted cocoa beans),B1,0.011,90.34,85.58
2901,antreten,verb,to arrive; to present oneself,B1,0.017,90.34,85.59
2902,vermutet,adjective,"supposed, suspected",B1,0.025,90.34,85.59
2903,verschlingen,verb,"to devour, to swallow up, to eat without chewing",B1,0.042,90.34,85.59
2904,absagen,verb,"to cancel, to call off (an activity or event)",B1,0.009,90.34,85.59
2905,anerkennen,verb,"to acknowledge, to recognize, to accept (as legally, morally or scientifically valid or sufficient)",B1,0.037,90.34,85.6
2906,absichtlich,adverb,intentionally,B1,0.022,90.35,85.6
2907,Ware,noun,"goods, merchandise, ware, commodity",B1,0.017,90.35,85.6
2908,anschließen,verb,"to connect, to attach",B1,0.011,90.35,85.6
2909,versäumen,verb,"to miss, to omit, to fail to do something important",B1,0.055,90.35,85.6
2910,Fahne,noun,"flag, banner (any cloth or fabric used as a symbol)",B1,0.034,90.35,85.61
2911,Topf,noun,"pot (flat-bottomed, open-topped vessel, especially for cooking food)",B1,0.033,90.35,85.61
2912,Melodie,noun,"melody, tune (sequence of notes that makes up a musical phrase)",B1,0.025,90.35,85.61
2913,Spannung,noun,voltage,B1,0.018,90.35,85.61
2914,Hure,noun,whore (female prostitute),B1,0.006,90.36,85.61
2915,Daumen,noun,thumb,B1,0.016,90.36,85.61
2916,Führung,noun,lead,B1,0.026,90.36,85.62
2917,giftig,adverb,venomously,B1,0.038,90.36,85.62
2918,Sendung,noun,delivery (by a postal service),B1,0.011,90.36,85.62
2919,erwähnt,adjective,mentioned,B1,0.013,90.37,85.62
2920,Tagebuch,noun,"diary, journal",B1,0.014,90.37,85.62
2921,herankommen,verb,"to approach, to come close",B1,0.026,90.37,85.62
2922,Gatte,noun,spouse,B1,0.053,90.37,85.63
2923,bedeutend,adjective,"significant, meaningful",B1,0.039,90.37,85.63
2924,vollbringen,verb,"to accomplish, to perform",B1,0.037,90.37,85.63
2925,lauschen,verb,to listen (to wait for a sound),B1,0.062,90.37,85.64
2926,Sieger,noun,"winner, victor, champion",B1,0.02,90.37,85.64
2927,achte,adjective,eighth,B1,0.02,90.37,85.64
2928,aufklären,verb,"to clear up, explain (a mystery etc)",B1,0.022,90.37,85.64
2929,Glanz,noun,"gleam, sparkle, glitter",B1,0.071,90.38,85.65
2930,Klage,noun,complaint,B1,0.035,90.38,85.65
2931,jubeln,verb,"to cheer, to exult, to rejoice loudly",B1,0.023,90.38,85.65
2932,Existenz,noun,existence,B1,0.019,90.38,85.66
2933,Entwicklung,noun,evolution,B1,0.019,90.38,85.66
2934,geil,adjective,salacious; lustful; horny,B1,0.004,90.38,85.66
2935,Erwachsener,noun,"adult, grown-up",B1,0.015,90.39,85.66
2936,demütigen,verb,"to humiliate, to humble, to mortify",B1,0.027,90.39,85.66
2937,Theorie,noun,theory,B1,0.005,90.39,85.66
2938,wischen,verb,to wipe,B1,0.038,90.39,85.66
2939,hinsetzen,verb,to sit down,B1,0.012,90.39,85.66
2940,beneiden,verb,to envy,B1,0.032,90.39,85.67
2941,stopfen,verb,"to stuff, to plug",B1,0.018,90.39,85.67
2942,Konzert,noun,concert (musical event),B1,0.011,90.4,85.67
2943,hoffnungslos,adjective,hopeless,B1,0.026,90.4,85.67
2944,Entschluss,noun,"resolution, conclusion",B1,0.084,90.4,85.68
2945,empfindlich,adjective,"sensitive, tender",B1,0.03,90.4,85.68
2946,Haustür,noun,front door,B1,0.069,90.4,85.69
2947,befördern,verb,to move; to convey; to transport; to carry,B1,0.015,90.4,85.69
2948,Steuer,noun,tax,B1,0.01,90.4,85.69
2949,Bock,noun,"buck, ram; the male of certain animals, especially goat, sheep, and roedeer",B1,0.027,90.4,85.69
2950,passend,adjective,"suitable, fitting, matching",B1,0.006,90.41,85.69
2951,backen,verb,to bake; to roast,B1,0.016,90.41,85.69
2952,Holm,noun,"rail, bar (on which to hold on to)",B1,0.01,90.41,85.69
2953,jammern,verb,"to wail, whine, moan, lament, whinge",B1,0.037,90.41,85.7
2954,Abstand,noun,"distance, interspace, spacing, interval, gap",B1,0.014,90.41,85.7
2955,entwerfen,verb,"to sketch, to draft",B1,0.016,90.41,85.7
2956,Dreh,noun,"nomen vicis of drehen: a turn, spin, twist, a single rotation",B1,0.025,90.42,85.7
2957,Mangel,noun,"lack, shortage (the condition of having an insufficient amount of a resource, or none at all)",B1,0.032,90.42,85.7
2958,Artikel,noun,article,B1,0.005,90.42,85.7
2959,lediglich,adverb,merely,B1,0.023,90.42,85.7
2960,entscheidend,adjective,decisive,B1,0.013,90.42,85.71
2961,Legende,noun,legend (story),B1,0.009,90.43,85.71
2962,Ausgabe,noun,"edition, issue (literary work)",B1,0.023,90.43,85.71
2963,Halle,noun,"hall (a spacious room, especially one with a specific function)",B1,0.025,90.43,85.71
2964,jahrelang,adverb,"for years, in years",B1,0.013,90.43,85.71
2965,erwerben,verb,"to earn, gain, acquire",B1,0.058,90.43,85.72
2966,blühen,verb,to blossom or bloom,B1,0.05,90.43,85.72
2967,erkundigen,verb,to ask,B1,0.044,90.43,85.72
2968,auslöschen,verb,"to extinguish, to put out (e.g. a fire)",B1,0.012,90.43,85.72
2969,liebevoll,adverb,"lovingly, affectionately",B1,0.036,90.43,85.73
2970,einer,pronoun,one,B1,0.004,90.44,85.73
2971,hierbleiben,verb,to stay here,B1,0.007,90.44,85.73
2972,Donner,noun,thunder,B1,0.032,90.44,85.73
2973,Abteilung,noun,department,B1,0.006,90.44,85.73
2974,Vers,noun,line (of a poem or song),B1,0.058,90.45,85.74
2975,Verabredung,noun,appointment,B1,0.009,90.45,85.74
2976,kapieren,verb,to understand intellectually; to get; to grasp,B1,0.002,90.45,85.74
2977,Funke,noun,spark,B1,0.019,90.45,85.74
2978,Vorbereitung,noun,preparation,B1,0.025,90.46,85.74
2979,Etage,noun,floor; storey,B1,0.018,90.46,85.74
2980,Geschöpf,noun,creature,B1,0.047,90.46,85.75
2981,Ruder,noun,oar,B1,0.029,90.46,85.75
2982,Reisender,noun,tourist,B1,0.032,90.46,85.75
2983,brutal,adjective,brutal,B1,0.009,90.46,85.75
2984,Manier,noun,"style, manner",B1,0.027,90.46,85.75
2985,lose,adjective,"loose, slack",B1,0.01,90.46,85.75
2986,Werkstatt,noun,workshop (room where things are manufactured),B1,0.02,90.47,85.76
2987,German,noun,germane,B1,0.006,90.47,85.76
2988,Muskel,noun,muscle,B1,0.02,90.47,85.76
2989,anrichten,verb,"to wreak, to cause, to do (harm)",B1,0.014,90.47,85.76
2990,Salon,noun,lounge,B1,0.039,90.47,85.76
2991,Vermutung,noun,guess,B1,0.011,90.47,85.76
2992,Franzose,noun,Frenchman (person of French birth or nationality),B1,0.012,90.48,85.76
2993,ausnutzen,verb,to exploit (use for one's advantage),B1,0.014,90.48,85.77
2994,predigen,verb,to preach,B1,0.041,90.48,85.77
2995,Eisen,noun,"iron (chemical element, Fe)",B1,0.034,90.48,85.77
2996,anzünden,verb,to light (anything flammable),B1,0.026,90.48,85.77
2997,feierlich,adjective,"solemn, ceremonious",B1,0.061,90.48,85.78
2998,überschreiten,verb,to exceed,B1,0.022,90.48,85.78
2999,verpflichtet,adjective,"committed, bound, obliged, indebted, beholden",B1,0.017,90.48,85.78
3000,Rücksicht,noun,consideration (the tendency to consider others),B1,0.063,90.48,85.79
3001,wider,preposition,against,B2,0.098,90.48,85.8
3002,Drachen,noun,kite; hang glider (any gliding construction of poles and fabric),B2,0.012,90.48,85.8
3003,Gitter,noun,"lattice, grid, mesh (of metal), grating, bars",B2,0.02,90.49,85.8
3004,Bube,noun,knave; jack (playing card),B2,0.045,90.49,85.8
3005,streben,verb,to strive,B2,0.053,90.49,85.81
3006,fördern,verb,"to further, foster, advance, encourage, support (promote the development of)",B2,0.021,90.49,85.81
3007,aufsuchen,verb,to visit; to look up,B2,0.032,90.49,85.81
3008,abscheulich,adverb,"hideously, beastly, abominably, detestably",B2,0.035,90.49,85.82
3009,ermorden,verb,"to murder, to assassinate",B2,0.011,90.49,85.82
3010,fortsetzen,verb,to continue with something,B2,0.027,90.49,85.82
3011,Vetter,noun,male cousin,B2,0.065,90.49,85.82
3012,vereinen,verb,to unite,B2,0.012,90.5,85.82
3013,Deutscher,noun,German (male or unspecified),B2,0.018,90.5,85.83
3014,abreisen,verb,"to leave, to depart",B2,0.027,90.5,85.83
3015,Revier,noun,"defined area of land, principally used for hunting or foraging",B2,0.008,90.5,85.83
3016,Anfall,noun,fit; seizure; attack (medical or emotional),B2,0.024,90.5,85.83
3017,Abschluss,noun,exclusion,B2,0.01,90.5,85.83
3018,Amerikaner,noun,"American (from America, the Americas, the American continent(s))",B2,0.002,90.51,85.83
3019,Tanne,noun,fir (genus Abies),B2,0.026,90.51,85.83
3020,staunen,verb,to be amazed or astonished; to wonder or marvel,B2,0.045,90.51,85.84
3021,Knecht,noun,"male servant, menial, especially on a farm",B2,0.115,90.51,85.85
3022,Kontrolle,noun,inspection,B2,0.001,90.52,85.85
3023,aufsteigen,verb,"to get on, to mount",B2,0.026,90.52,85.85
3024,komplett,adjective,"complete, entire (including all possible parts or elements)",B2,0.002,90.52,85.85
3025,Knall,noun,crack,B2,0.015,90.52,85.85
3026,Betrüger,noun,"deceiver, fake, double-dealer",B2,0.016,90.53,85.85
3027,Einsatz,noun,"something inserted, inset, inlay, compartment",B2,0.003,90.53,85.85
3028,hegen,verb,to cherish,B2,0.039,90.53,85.85
3029,herausholen,verb,"to get out, to fetch out",B2,0.004,90.53,85.85
3030,platzen,verb,"to burst, to pop (to be torn apart from internal pressure, e.g. of balloons)",B2,0.012,90.54,85.86
3031,Mission,noun,mission (set of tasks),B2,0.002,90.54,85.86
3032,Haken,noun,hook,B2,0.011,90.54,85.86
3033,hindurch,adverb,"through, throughout",B2,0.073,90.54,85.86
3034,wahrhaftig,adverb,"really, actually",B2,0.101,90.55,85.87
3035,Nachbarschaft,noun,neighbourhood,B2,0.02,90.55,85.87
3036,Eigenschaft,noun,"feature, property, characteristic; quality",B2,0.029,90.55,85.87
3037,entzücken,verb,"to ravish, enrapture, enthral",B2,0.073,90.55,85.88
3038,fliegend,adjective,"flying, flight",B2,0.016,90.55,85.88
3039,Adler,noun,eagle,B2,0.023,90.55,85.88
3040,Moral,noun,"moral, morality",B2,0.021,90.55,85.89
3041,Fliege,noun,fly (insect),B2,0.011,90.55,85.89
3042,brennend,adjective,"blazing, flaming, burning",B2,0.032,90.55,85.89
3043,Fritz,noun,"a Fritz, a German",B2,0.044,90.55,85.89
3044,Stockwerk,noun,"floor, storey, level (of a building)",B2,0.033,90.55,85.9
3045,überraschend,adverb,unexpectedly,B2,0.015,90.56,85.9
3046,Pille,noun,"pill, tablet",B2,0.006,90.56,85.9
3047,heutzutage,adverb,"nowadays, these days (in the present era; in the world as it is today)",B2,0.007,90.56,85.9
3048,leidenschaftlich,adverb,passionately,B2,0.04,90.56,85.9
3049,Adel,noun,nobility,B2,0.033,90.56,85.9
3050,lecker,adverb,"well, with pleasure (usually referring to eating and drinking)",B2,0.007,90.57,85.9
3051,möglichst,adverb,as much as possible,B2,0.02,90.57,85.91
3052,silbern,adjective,silver-colored,B2,0.049,90.57,85.91
3053,Kellner,noun,waiter (male or of unspecified gender),B2,0.02,90.57,85.91
3054,taugen,verb,to be fit,B2,0.027,90.57,85.91
3055,Honig,noun,honey,B2,0.033,90.57,85.92
3056,Verrat,noun,"treason, betrayal, treachery, backstabbing, bewrayment",B2,0.007,90.57,85.92
3057,Versteck,noun,"hiding place, stash",B2,0.009,90.57,85.92
3058,lecken,verb,to lick (with the tongue),B2,0.006,90.58,85.92
3059,genauso,adverb,"just as, just the same",B2,0.001,90.59,85.92
3060,Spanier,noun,Spaniard,B2,0.007,90.59,85.92
3061,nüchtern,adjective,"sober (not drunk; serious, not playful or passionate)",B2,0.022,90.59,85.92
3062,Fahrzeug,noun,vehicle,B2,0.009,90.59,85.92
3063,hinab,adverb,"down, downwards (from the own location downwards)",B2,0.143,90.59,85.93
3064,bergen,verb,"to recover, salvage, rescue; with regard to living beings this can mean dead or alive",B2,0.036,90.59,85.94
3065,fabelhaft,adjective,fabulous,B2,0.011,90.6,85.94
3066,Medizin,noun,medicine (the study of disease and treatment; the profession based thereon),B2,0.005,90.6,85.94
3067,berühmen,verb,"to boast, to pride oneself (in/on/of)",B2,0.01,90.6,85.94
3068,missbrauchen,verb,to abuse (use improperly),B2,0.014,90.6,85.94
3069,Kommando,noun,command,B2,0.006,90.61,85.94
3070,ignorieren,verb,to ignore (deliberately pay no attention to),B2,0.004,90.61,85.94
3071,Wärter,noun,attendant,B2,0.014,90.61,85.94
3072,Kultur,noun,culture,B2,0.011,90.61,85.94
3073,Königreich,noun,kingdom,B2,0.01,90.61,85.94
3074,urteilen,verb,to judge,B2,0.02,90.61,85.95
3075,Grieche,noun,a Greek (person),B2,0.044,90.62,85.95
3076,Spielzeug,noun,toy,B2,0.011,90.62,85.95
3077,Runde,noun,round (of drinks),B2,0.02,90.62,85.95
3078,ohnehin,adverb,"in any case, anyway, either way",B2,0.029,90.62,85.95
3079,jeglicher,determiner,"any, each, every",B2,0.015,90.62,85.96
3080,hinfahren,verb,to give a ride [auxiliary haben] (to drive for someone else to reach a destination),B2,0.009,90.62,85.96
3081,Brieftasche,noun,"wallet, purse",B2,0.015,90.62,85.96
3082,Instinkt,noun,instinct,B2,0.014,90.63,85.96
3083,verheiraten,verb,to wed; to marry (officially join two people in marriage),B2,0.018,90.63,85.96
3084,Kanal,noun,canal (man-made watercourse),B2,0.012,90.63,85.96
3085,Getränk,noun,"drink, beverage (liquid for consumption)",B2,0.017,90.63,85.96
3086,versichert,adjective,"insured, covered",B2,0.024,90.63,85.97
3087,hilflos,adverb,helplessly,B2,0.022,90.63,85.97
3088,streicheln,verb,"to stroke (to move the hand over the surface of), to pet; to fondle",B2,0.038,90.63,85.97
3089,verfallen,verb,to expire,B2,0.05,90.63,85.97
3090,locker,adverb,loosely,B2,0.027,90.64,85.97
3091,feuern,verb,to fire,B2,0.02,90.64,85.97
3092,Reue,noun,"repentance; remorse, regret",B2,0.042,90.64,85.98
3093,eingesperrt,adjective,confined,B2,0.007,90.65,85.98
3094,zurückgehen,verb,"to go back, return (to a place)",B2,0.012,90.65,85.98
3095,rasieren,verb,to shave,B2,0.013,90.65,85.98
3096,Eigentum,noun,ownership,B2,0.024,90.65,85.98
3097,Anzeichen,noun,"sign, indication",B2,0.011,90.65,85.98
3098,Geschäftsmann,noun,businessman,B2,0.016,90.65,85.98
3099,verzweifeln,verb,to despair,B2,0.04,90.65,85.99
3100,Dummkopf,noun,"airhead, birdbrain, bubblehead, feather-brain, featherhead, jingle-brains, lamebrain, peabrain, pinhead",B2,0.008,90.66,85.99
3101,Jubel,noun,"jubilation, exultation, rejoicing; cheering",B2,0.02,90.66,85.99
3102,verklagen,verb,to sue,B2,0.011,90.66,85.99
3103,spitzen,verb,"to point (to make pointy), to sharpen (a pencil)",B2,0.05,90.66,85.99
3104,eindeutig,adverb,unambiguously,B2,0.005,90.66,85.99
3105,Braten,noun,"a roast (big portion of meat, usually cooked in the oven)",B2,0.02,90.66,86
3106,verschonen,verb,"to spare (from harm, trouble etc.)",B2,0.016,90.67,86
3107,Verlobter,noun,fiancé,B2,0.017,90.67,86
3108,tüchtig,adjective,"able, competent, hard-working (of a worker, etc.)",B2,0.071,90.67,86
3109,Masse,noun,mass (quantity of matter),B2,0.024,90.67,86.01
3110,Anstalt,noun,"institution, public establishment",B2,0.055,90.67,86.01
3111,scheitern,verb,"to fail, to conclude unsuccessfully",B2,0.011,90.67,86.01
3112,ausgesetzt,adjective,exposed,B2,0.015,90.67,86.01
3113,abgemacht,adjective,agreed,B2,0.007,90.67,86.01
3114,Narbe,noun,scar,B2,0.01,90.68,86.01
3115,stehend,adjective,"standing, waiting",B2,0.038,90.68,86.02
3116,Heirat,noun,marrying; marriage; wedding (the act of marrying; the contracting of a marriage),B2,0.017,90.68,86.02
3117,Geschwister,noun,sibling,B2,0.03,90.68,86.02
3118,Gewand,noun,sumptuous garment,B2,0.108,90.68,86.03
3119,Telegramm,noun,"telegram, wire",B2,0.021,90.68,86.03
3120,verhören,verb,to interrogate,B2,0.012,90.68,86.03
3121,zukommen,verb,"to come towards, come up to; to approach",B2,0.023,90.68,86.04
3122,Zaun,noun,fence,B2,0.011,90.68,86.04
3123,Schale,noun,peel; husk; shell (outer layer),B2,0.02,90.68,86.04
3124,Salz,noun,"salt, table salt, sal",B2,0.015,90.69,86.04
3125,einbrechen,verb,"to break in (for example, to steal something)",B2,0.009,90.69,86.04
3126,Bibliothek,noun,library,B2,0.01,90.69,86.04
3127,summen,verb,to buzz; to hum,B2,0.013,90.69,86.04
3128,Universität,noun,university,B2,0.01,90.69,86.04
3129,gefangen,adjective,caught,B2,0.012,90.69,86.05
3130,Pack,noun,"package, bundle, bunch, (unwieldy) bag",B2,0.016,90.7,86.05
3131,lieblich,adjective,sweet,B2,0.067,90.7,86.05
3132,räuspern,verb,"to clear one's throat, to cough slightly (when trying to get attention)",B2,0.016,90.7,86.05
3133,verstärken,verb,to reinforce,B2,0.014,90.7,86.06
3134,Verhaftung,noun,"arrest, detention",B2,0.016,90.7,86.06
3135,Forderung,noun,"a demand, a (financial) claim",B2,0.023,90.7,86.06
3136,Belohnung,noun,"reward, bounty",B2,0.014,90.7,86.06
3137,zweitens,adverb,secondly,B2,0.011,90.71,86.06
3138,Erfindung,noun,invention,B2,0.017,90.71,86.06
3139,Perücke,noun,wig; periwig; peruke,B2,0.036,90.71,86.06
3140,öde,adjective,"empty, bare, barren, bleak, desolate, deserted",B2,0.051,90.71,86.07
3141,trauern,verb,to mourn,B2,0.017,90.71,86.07
3142,Chor,noun,choir; chorus (group of people singing together),B2,0.036,90.71,86.07
3143,Kasse,noun,"cash register, cash box",B2,0.017,90.71,86.07
3144,Champagner,noun,champagne (sparkling wine made in Champagne),B2,0.005,90.71,86.07
3145,suchten,verb,"to binge (to do something extensively, often in a single sitting over a long time, as if addicted)",B2,0.018,90.71,86.08
3146,Verlegenheit,noun,embarrassment,B2,0.07,90.72,86.08
3147,überaus,adverb,extremely,B2,0.031,90.72,86.08
3148,knacken,verb,to make a cracking sound,B2,0.008,90.72,86.09
3149,Anzahl,noun,"number, an amount; a few",B2,0.022,90.72,86.09
3150,Trennung,noun,"separation, parting",B2,0.02,90.72,86.09
3151,dastehen,verb,to stand there,B2,0.035,90.72,86.09
3152,chinesisch,adjective,Chinese,B2,0.012,90.72,86.09
3153,bewirken,verb,to bring about (to cause to take place),B2,0.022,90.72,86.09
3154,durchziehen,verb,to pass,B2,0.012,90.73,86.09
3155,Scham,noun,shame,B2,0.053,90.73,86.1
3156,Geige,noun,"violin, fiddle",B2,0.044,90.73,86.1
3157,extra,adverb,specifically (for a given purpose),B2,0.004,90.73,86.1
3158,angesichts,preposition,at the sight of,B2,0.027,90.73,86.11
3159,historisch,adjective,"historical, historic",B2,0.02,90.73,86.11
3160,wickeln,verb,"to wrap, wind around, coil",B2,0.03,90.73,86.11
3161,Panzer,noun,"armour, armour plating, shield",B2,0.014,90.73,86.11
3162,gestalten,verb,"to form, to shape, to create",B2,0.043,90.74,86.11
3163,klatschen,verb,to clap,B2,0.033,90.74,86.12
3164,berechnen,verb,to calculate,B2,0.025,90.74,86.12
3165,stolpern,verb,"to stumble, to trip",B2,0.021,90.74,86.12
3166,Protokoll,noun,protocol,B2,0.01,90.74,86.12
3167,abwenden,verb,"to avert, to turn to the side",B2,0.039,90.74,86.12
3168,Detail,noun,detail,B2,0.003,90.74,86.13
3169,verehrt,adjective,"revered, venerated, adored",B2,0.036,90.74,86.13
3170,Zeichnung,noun,drawing,B2,0.018,90.75,86.13
3171,aufsetzen,verb,to put on (something to be worn on the head),B2,0.023,90.75,86.13
3172,knien,verb,to kneel,B2,0.053,90.75,86.14
3173,Klaus,noun,"kloyz (private house of study, small synagogue)",B2,0.008,90.75,86.14
3174,geleiten,verb,to escort; convoy,B2,0.034,90.75,86.14
3175,Sünder,noun,sinner,B2,0.036,90.75,86.14
3176,stärken,verb,to strengthen (to add to the power or effect of something),B2,0.025,90.75,86.14
3177,gefälligst,adverb,"used to sharply reinforce a demand or order, demanding obedience and often expressing annoyance",B2,0.02,90.75,86.15
3178,tragisch,adjective,tragic (causing great sadness),B2,0.017,90.75,86.15
3179,Kartoffel,noun,potato,B2,0.014,90.76,86.15
3180,lahm,adjective,lame,B2,0.021,90.76,86.15
3181,Backe,noun,cheek (on the face),B2,0.018,90.76,86.15
3182,stundenlang,adverb,for hours,B2,0.029,90.76,86.15
3183,Rate,noun,rate,B2,0.011,90.76,86.15
3184,Kram,noun,stuff,B2,0.018,90.76,86.15
3185,angemessen,adverb,appropriately,B2,0.012,90.76,86.15
3186,konzentrieren,verb,"to concentrate, to focus (one's mind or attention)",B2,0.002,90.77,86.16
3187,herbringen,verb,to bring (to the speaker),B2,0.009,90.77,86.16
3188,gleichgültig,adjective,indifferent,B2,0.075,90.77,86.16
3189,vorhanden,adjective,"available, existing",B2,0.049,90.77,86.17
3190,schlank,adjective,"slim, svelte",B2,0.057,90.77,86.17
3191,proben,verb,to rehearse,B2,0.011,90.77,86.17
3192,Prophet,noun,prophet,B2,0.023,90.78,86.17
3193,Nonne,noun,nun,B2,0.015,90.78,86.17
3194,Vorrat,noun,"supply, stock, store, reserve",B2,0.014,90.78,86.17
3195,beschuldigen,verb,"to accuse, to blame",B2,0.006,90.78,86.18
3196,Kater,noun,"tomcat, tom, male cat",B2,0.021,90.78,86.18
3197,übersetzt,adjective,"inflated, excessive",B2,0.004,90.78,86.18
3198,Lamm,noun,lamb,B2,0.023,90.79,86.18
3199,hinzufügen,verb,"to say (after saying something else), to add",B2,0.023,90.79,86.18
3200,Skandal,noun,scandal,B2,0.019,90.79,86.18
3201,September,noun,September,B2,0.014,90.79,86.18
3202,Gipfel,noun,"peak, pinnacle",B2,0.036,90.79,86.19
3203,Beutel,noun,"a small to medium-sized bag, usually of fabric",B2,0.033,90.79,86.19
3204,Mode,noun,"fashion, trend",B2,0.027,90.79,86.19
3205,künftig,adverb,"henceforth, in the future",B2,0.058,90.79,86.2
3206,Hindernis,noun,obstacle,B2,0.03,90.79,86.2
3207,Verpflichtung,noun,"obligation, responsibility",B2,0.018,90.79,86.2
3208,Koch,noun,cook (one who cooks; male or unspecified gender),B2,0.011,90.8,86.2
3209,schleifen,verb,"to whet, grind (smooth and/or sharpen a surface by abrasion)",B2,0.03,90.8,86.2
3210,Oberfläche,noun,surface,B2,0.017,90.8,86.2
3211,magisch,adjective,magical,B2,0.007,90.8,86.21
3212,Missverständnis,noun,"misunderstanding, misinterpretation",B2,0.01,90.8,86.21
3213,unmittelbar,adjective,"immediate, direct",B2,0.052,90.8,86.21
3214,ungeduldig,adverb,impatiently,B2,0.052,90.8,86.21
3215,durchschauen,verb,"to see through (e.g. a window, telescope)",B2,0.021,90.8,86.22
3216,Einzelheit,noun,detail,B2,0.023,90.8,86.22
3217,behilflich,adjective,"of service, assistant, helpful",B2,0.019,90.81,86.22
3218,Anstrengung,noun,effort,B2,0.046,90.81,86.22
3219,Nix,noun,nix (water demon in human form that lures people into the water and drowns them),B2,0.007,90.81,86.22
3220,befriedigen,verb,"to satisfy, to gratify, to please",B2,0.041,90.81,86.23
3221,parken,verb,to park,B2,0.012,90.81,86.23
3222,Knarre,noun,"ratchet, gragger, noisemaker",B2,0.013,90.81,86.23
3223,woanders,adverb,"elsewhere, somewhere else",B2,0.003,90.82,86.23
3224,klirren,verb,"to clink, to clank, to clash, to jingle, to clatter.",B2,0.03,90.82,86.23
3225,sterbend,adjective,dying,B2,0.021,90.82,86.23
3226,hinlegen,verb,"to put down, lay down",B2,0.009,90.82,86.23
3227,Arschloch,noun,arsehole,B2,0.001,90.83,86.24
3228,Schnurrbart,noun,moustache,B2,0.045,90.83,86.24
3229,Unterschrift,noun,signature,B2,0.01,90.83,86.24
3230,Löffel,noun,spoon,B2,0.021,90.83,86.24
3231,Speise,noun,"meal, fare (food)",B2,0.068,90.83,86.25
3232,herbei,adverb,"hither, here, to here, to this place",B2,0.092,90.84,86.25
3233,Andenken,noun,memory; remembrance (especially of a deceased person),B2,0.031,90.84,86.26
3234,Ähnlichkeit,noun,"similarity, resemblance",B2,0.029,90.84,86.26
3235,scheren,verb,to cut back something that grows,B2,0.014,90.84,86.26
3236,Rechtsanwalt,noun,lawyer,B2,0.012,90.84,86.26
3237,andermal,adverb,another time,B2,0.02,90.84,86.26
3238,schwitzen,verb,to sweat; to perspire (of living beings),B2,0.015,90.84,86.26
3239,Schnauze,noun,snout; muzzle,B2,0.004,90.84,86.26
3240,Wirtschaft,noun,economy,B2,0.025,90.85,86.27
3241,Zwilling,noun,twin (male or female; the feminine form Zwillingin is rare),B2,0.009,90.85,86.27
3242,kindisch,adjective,"childish, immature",B2,0.026,90.85,86.27
3243,berufen,verb,to refer to (as proof of something); to invoke,B2,0.04,90.85,86.27
3244,christlich,adjective,Christian,B2,0.037,90.85,86.28
3245,Mitarbeiter,noun,"employee (person who works, together with others, in a particular business or institution)",B2,0.006,90.85,86.28
3246,anstrengen,verb,"to make an effort, to work hard at something, to labour",B2,0.029,90.85,86.28
3247,Wärme,noun,warmth,B2,0.027,90.85,86.28
3248,herauskommen,verb,to come out (motion towards the speaker),B2,0.024,90.85,86.28
3249,marschieren,verb,"to march (to walk with others in a column, in step)",B2,0.015,90.86,86.28
3250,nimmer,adverb,"no more, no longer, never again",B2,0.038,90.86,86.29
3251,Anwesenheit,noun,presence,B2,0.012,90.86,86.29
3252,arrangieren,verb,to arrange,B2,0.006,90.86,86.29
3253,Saft,noun,juice,B2,0.015,90.86,86.3
3254,elektrisch,adjective,electric,B2,0.014,90.86,86.3
3255,verstummen,verb,to become silent,B2,0.058,90.86,86.3
3256,aufreißen,verb,"to rip open, to tear open",B2,0.023,90.86,86.3
3257,Wiese,noun,meadow,B2,0.049,90.86,86.31
3258,gedrückt,adjective,"subdued, somber, dejected (of the mood somewhere or among a group)",B2,0.032,90.86,86.31
3259,eiskalt,adjective,ice-cold (having a very low temperature),B2,0.018,90.87,86.31
3260,Vergebung,noun,"pardon (forgiveness for an offense), forgiveness (action of forgiving)",B2,0.017,90.87,86.31
3261,Affäre,noun,"a delicate, problematic or annoying affair, business that forces one to act carefully",B2,0.005,90.87,86.31
3262,Ente,noun,duck (aquatic bird of the family Anatidae),B2,0.01,90.87,86.31
3263,Lücke,noun,"gap, lacuna",B2,0.028,90.87,86.32
3264,Notiz,noun,note (memorandum),B2,0.01,90.87,86.32
3265,beschwören,verb,to conjure,B2,0.052,90.87,86.32
3266,ausbilden,verb,"to educate; to train; to instruct (for a job, skill)",B2,0.013,90.87,86.32
3267,Magd,noun,"maid; female servant, especially on a farm",B2,0.124,90.88,86.33
3268,geradeaus,adverb,"straight ahead, straightforward (in a forward direction)",B2,0.015,90.88,86.33
3269,Exzellenz,noun,Excellency (form of address for certain high officials or dignitaries),B2,0.009,90.88,86.33
3270,fortgehen,verb,"to continue, to go on, to keep on, to carry on",B2,0.036,90.88,86.34
3271,Ärmel,noun,sleeve,B2,0.036,90.88,86.34
3272,Ader,noun,blood vessel,B2,0.034,90.88,86.34
3273,rauf,adverb,"up, up here, upstairs (towards the speaker)",B2,0.005,90.88,86.34
3274,pressen,verb,to press,B2,0.01,90.89,86.34
3275,lagern,verb,"to leave something somewhere, to store, to deposit",B2,0.026,90.89,86.34
3276,verheimlichen,verb,"to keep secret, to conceal, to hide",B2,0.011,90.89,86.35
3277,hinsehen,verb,to look (at),B2,0.032,90.89,86.35
3278,einsehen,verb,"to gain insight into, comprehend, understand, recognize, realize, accept, convince oneself",B2,0.031,90.89,86.35
3279,genügend,adjective,"sufficient, ample",B2,0.015,90.89,86.35
3280,versenken,verb,"to sink (to cause to sink, e.g. a ship)",B2,0.028,90.89,86.35
3281,Erlebnis,noun,experience (event of which one is cognizant),B2,0.031,90.89,86.36
3282,Material,noun,material (matter),B2,0.007,90.89,86.36
3283,fromm,adjective,"pious, religious, devout",B2,0.103,90.89,86.37
3284,abgehen,verb,"to come off, to come loose, to wear off",B2,0.03,90.9,86.37
3285,Gitarre,noun,guitar,B2,0.015,90.9,86.37
3286,zuschlagen,verb,to avail oneself of one’s muscular power and direct it to a striking face,B2,0.013,90.9,86.37
3287,religiös,adjective,religious (concerning religion),B2,0.016,90.9,86.37
3288,einschlagen,verb,to smash,B2,0.02,90.9,86.37
3289,Kraut,noun,"herb; useful plant (plant used to flavour food, or for medicinal effect)",B2,0.031,90.9,86.37
3290,high,adjective,high (intoxicated with a drug other than alcohol),B2,0.003,90.9,86.38
3291,Liebender,noun,lover (one who loves and cares for another person in a romantic way),B2,0.031,90.9,86.38
3292,Lob,noun,praise,B2,0.05,90.91,86.38
3293,Stahl,noun,steel,B2,0.013,90.91,86.38
3294,Neigung,noun,propensity,B2,0.083,90.91,86.39
3295,sowas,pronoun,"that sort of thing, something like this",B2,0.002,90.91,86.39
3296,sozial,adjective,social,B2,0.012,90.91,86.39
3297,Korridor,noun,corridor,B2,0.061,90.91,86.4
3298,Feste,noun,"stronghold, fortress, fortified castle",B2,0.042,90.91,86.4
3299,anwenden,verb,"to use, apply, utilize or deploy (to put to use for a purpose)",B2,0.021,90.92,86.4
3300,überwältigen,verb,"to overwhelm, to subdue, to overpower",B2,0.019,90.92,86.4
3301,Stange,noun,pole; bar; rod; post,B2,0.028,90.92,86.41
3302,Aufzeichnung,noun,"record, recording",B2,0.009,90.92,86.41
3303,Quatsch,noun,chat,B2,0.002,90.92,86.41
3304,Altar,noun,altar (table or similar structure used for religious rites),B2,0.036,90.92,86.41
3305,Jünger,noun,disciple (one who learns from and follows a usually religious or philosophical teacher; male or unspecified sex),B2,0.016,90.92,86.41
3306,extrem,adverb,extremely,B2,0.004,90.93,86.41
3307,Autor,noun,author,B2,0.007,90.93,86.41
3308,Testament,noun,"will, testament",B2,0.012,90.93,86.41
3309,Lektion,noun,"lesson (chapter of a textbook, section into which a course is divided)",B2,0.006,90.93,86.41
3310,Geselle,noun,journeyman,B2,0.116,90.93,86.42
3311,einsteigen,verb,to get in or on,B2,0.007,90.94,86.42
3312,Schachtel,noun,"a small, usually square box, package or case",B2,0.012,90.94,86.42
3313,Anstand,noun,"decency, manners",B2,0.039,90.94,86.43
3314,Notfall,noun,"emergency, distress",B2,0.004,90.94,86.43
3315,stoppen,verb,to stop,B2,0.001,90.95,86.43
3316,zurückrufen,verb,"to call back, to ring back",B2,0.009,90.95,86.43
3317,beschädigen,verb,to damage,B2,0.01,90.95,86.43
3318,Schwager,noun,brother-in-law,B2,0.026,90.95,86.43
3319,meiden,verb,"to avoid, to keep away from",B2,0.023,90.95,86.43
3320,personal,adjective,personal,B2,0.009,90.95,86.43
3321,spucken,verb,to spit,B2,0.006,90.95,86.43
3322,Verlobung,noun,"engagement, betrothal (a promise to wed)",B2,0.023,90.95,86.44
3323,Untergang,noun,"fall, downfall, death, doom",B2,0.03,90.96,86.44
3324,Methode,noun,manner,B2,0.005,90.96,86.44
3325,wiederfinden,verb,to find again,B2,0.033,90.96,86.44
3326,beseitigen,verb,"to dispose of (get rid of something), remove, eliminate",B2,0.011,90.96,86.44
3327,Gas,noun,gas (matter in a physical state between liquid and plasma),B2,0.004,90.96,86.44
3328,aufschreiben,verb,"to write down, mark down, to make a note (of something)",B2,0.014,90.96,86.44
3329,Neugier,noun,curiosity,B2,0.028,90.96,86.45
3330,spenden,verb,"to donate, to give as charity",B2,0.01,90.97,86.45
3331,rau,adjective,rough,B2,0.054,90.97,86.45
3332,toben,verb,"to rage, riot",B2,0.051,90.97,86.46
3333,einkaufen,verb,to shop,B2,0.009,90.97,86.46
3334,veranstalten,verb,"to organize, to arrange, to stage (a public or social event)",B2,0.017,90.97,86.46
3335,angebracht,adjective,"apposite, seemly, appropriate",B2,0.02,90.97,86.46
3336,klappern,verb,to clatter (make a rattling or clapping sound),B2,0.022,90.97,86.46
3337,Schlampe,noun,"unkempt woman, one who is lazy in grooming her body or her domestic environment",B2,0.001,90.98,86.46
3338,Eifersucht,noun,jealousy,B2,0.022,90.98,86.46
3339,wiederum,adverb,"in turn, then again, on the other hand, to the contrary",B2,0.057,90.98,86.47
3340,hauptsächlich,adverb,"mainly, primarily",B2,0.019,90.98,86.47
3341,Kostüm,noun,skirt suit (women’s business suit consisting of a skirt and jacket),B2,0.007,90.98,86.47
3342,glänzen,verb,"to shine, gleam, sparkle, glisten",B2,0.054,90.98,86.47
3343,Bezug,noun,reference,B2,0.011,90.98,86.48
3344,wissenschaftlich,adjective,scientific,B2,0.012,90.99,86.48
3345,Gattin,noun,"married woman, wife; female form of Gatte",B2,0.068,90.99,86.48
3346,verwechseln,verb,to mix up; to confuse or mistake something for something else,B2,0.012,90.99,86.48
3347,kreuzen,verb,to cross (place across),B2,0.024,90.99,86.48
3348,Drama,noun,drama,B2,0.012,90.99,86.49
3349,eigenartig,adjective,"peculiar, characteristic",B2,0.009,90.99,86.49
3350,erraten,verb,to determine (something) through advice or empathy,B2,0.024,90.99,86.49
3351,überfahren,verb,"to run over, to run down",B2,0.008,90.99,86.49
3352,erhaben,adjective,"sublime, exalted, elevated, lordly",B2,0.058,90.99,86.49
3353,Hinsicht,noun,"regard, aspect, respect, viewpoint",B2,0.019,90.99,86.49
3354,Bude,noun,"booth, stall",B2,0.018,91,86.5
3355,Kern,noun,kernel,B2,0.019,91,86.5
3356,zweifellos,adjective,doubtless,B2,0.02,91,86.5
3357,schmerzhaft,adjective,painful (causing physical or emotional pain),B2,0.018,91,86.5
3358,Vortrag,noun,"talk, lecture",B2,0.019,91,86.5
3359,Organ,noun,an organ,B2,0.015,91,86.5
3360,eisern,adjective,"iron, ironclad, made of iron",B2,0.037,91,86.51
3361,markieren,verb,to mark (indicate),B2,0.011,91,86.51
3362,Griff,noun,"grasp, reach (act of trying to grab)",B2,0.026,91,86.51
3363,melancholisch,adjective,melancholic,B2,0.015,91,86.51
3364,beantwortet,adjective,answered,B2,0.012,91.01,86.51
3365,übermorgen,adverb,"overmorrow, the day after tomorrow",B2,0.02,91.01,86.51
3366,betäuben,verb,"to deafen, to make deaf",B2,0.023,91.01,86.52
3367,Zutun,noun,assistance,B2,0.024,91.01,86.52
3368,Stoß,noun,"push, shove, bump",B2,0.034,91.01,86.52
3369,Magie,noun,magic,B2,0.003,91.01,86.52
3370,Hauch,noun,breath from the mouth,B2,0.034,91.01,86.52
3371,töricht,adjective,foolish,B2,0.032,91.01,86.53
3372,altmodisch,adjective,"outdated, old-fashioned, antiquated, outmoded, old-timey",B2,0.015,91.01,86.53
3373,aufhängen,verb,"to hang, to suspend",B2,0.012,91.02,86.53
3374,stehenbleiben,verb,to stop moving,B2,0.023,91.02,86.53
3375,Ausflug,noun,"excursion, outing, short trip",B2,0.01,91.02,86.53
3376,Weste,noun,"waistcoat, vest (usually sleeveless garment worn over a shirt)",B2,0.012,91.02,86.53
3377,angeben,verb,"to indicate, specify",B2,0.013,91.02,86.53
3378,Sonnenschein,noun,sunshine,B2,0.028,91.02,86.54
3379,Adieu,noun,adieu,B2,0.028,91.02,86.54
3380,mitspielen,verb,to cooperate,B2,0.012,91.02,86.54
3381,aufschlagen,verb,"to pitch, to serve (a ball)",B2,0.051,91.02,86.54
3382,Frisur,noun,haircut (way hair is cut),B2,0.013,91.02,86.54
3383,gleiten,verb,to glide; to float; to move effortlessly,B2,0.055,91.03,86.55
3384,Scheiße,noun,"feces, shit",B2,0,91.07,86.55
3385,Beifall,noun,applause,B2,0.054,91.07,86.55
3386,äußerste,adjective,"outermost, uttermost",B2,0.071,91.07,86.56
3387,starr,adjective,rigid,B2,0.062,91.07,86.56
3388,geduldig,adjective,"patient (ability or willingness to accept or tolerate delays, problems, or suffering)",B2,0.026,91.07,86.57
3389,Begleiter,noun,companion,B2,0.03,91.07,86.57
3390,Gerede,noun,"gossip, gossiping",B2,0.011,91.07,86.57
3391,ernähren,verb,"to nourish, to feed",B2,0.011,91.07,86.57
3392,Anzeige,noun,"advertisement, announcement (in a newspaper, etc.)",B2,0.012,91.07,86.57
3393,Hinweis,noun,hint; clue; pointer; an act or thing which makes someone aware of something,B2,0.004,91.08,86.57
3394,einholen,verb,"to catch up (a person, vehicle, competitor etc. ahead of you)",B2,0.017,91.08,86.57
3395,Kanone,noun,cannon,B2,0.006,91.08,86.57
3396,gegenwärtig,adjective,"current, contemporary, present, existing",B2,0.063,91.08,86.58
3397,keinerlei,adjective,"no … whatsoever, no … at all",B2,0.008,91.08,86.58
3398,servieren,verb,to serve (food); to wait (at table),B2,0.007,91.09,86.58
3399,Architekt,noun,architect (male or of unspecified gender),B2,0.031,91.09,86.58
3400,Symbol,noun,"symbol, icon",B2,0.009,91.09,86.58
3401,niedlich,adjective,"cute, pretty, charming, adorable",B2,0.022,91.09,86.58
3402,foltern,verb,to torture (subject to cruel treatment),B2,0.01,91.09,86.58
3403,Bob,noun,"bobsleigh, bob (sled used in the sport of bobsleigh)",B2,0.001,91.1,86.58
3404,Samstag,noun,Saturday,B2,0.004,91.1,86.58
3405,Bestimmung,noun,determination (act of determining or measuring),B2,0.019,91.1,86.59
3406,verständlich,adjective,"understandable, comprehensible",B2,0.014,91.1,86.59
3407,Gerät,noun,"device, tool, appliance, machine",B2,0.011,91.1,86.59
3408,Biene,noun,bee,B2,0.012,91.11,86.59
3409,außergewöhnlich,adjective,"exceptional, extraordinary",B2,0.006,91.11,86.59
3410,geteilt,adjective,"shared, split",B2,0.018,91.11,86.59
3411,durchdringen,verb,"to penetrate, permeate",B2,0.044,91.11,86.59
3412,unsterblich,adjective,immortal,B2,0.016,91.11,86.6
3413,Zeh,noun,toe,B2,0.013,91.11,86.6
3414,Reiz,noun,stimulus,B2,0.033,91.11,86.6
3415,Bund,noun,"alliance, federation, league",B2,0.031,91.11,86.6
3416,Wiener,noun,an inhabitant of Vienna,B2,0.013,91.11,86.6
3417,Entdeckung,noun,discovery,B2,0.02,91.11,86.6
3418,zornig,adjective,angry; wrathful; irate,B2,0.062,91.12,86.61
3419,saufen,verb,to drink,B2,0.013,91.12,86.61
3420,glücklicherweise,adverb,fortunately; luckily,B2,0.028,91.12,86.61
3421,Hurra,noun,hooray,B2,0.012,91.12,86.61
3422,anhaben,verb,to wear; to have on (a piece of clothing) see usage notes,B2,0.017,91.12,86.61
3423,garantieren,verb,to guarantee,B2,0.003,91.12,86.62
3424,Kopfschmerzen,noun,headache,B2,0.009,91.12,86.62
3425,armselig,adjective,"abject, pathetic, paltry, miserable",B2,0.022,91.12,86.62
3426,befreundet,adjective,"friendly, friends",B2,0.007,91.13,86.62
3427,Karre,noun,"cart, barrow",B2,0.014,91.13,86.62
3428,Taschentuch,noun,handkerchief,B2,0.026,91.13,86.62
3429,Bischof,noun,bishop (male or of unspecified gender),B2,0.02,91.13,86.62
3430,organisieren,verb,to organize,B2,0.004,91.13,86.62
3431,vergraben,verb,to bury (to place in the ground),B2,0.015,91.13,86.62
3432,abschließen,verb,"to end, to finish or complete (one's studies, a task)",B2,0.012,91.13,86.63
3433,Geste,noun,gesture,B2,0.012,91.14,86.63
3434,Mücke,noun,"A nematoceran, an insect of the order Nematocera, that is a mosquito, crane fly, gnat, or midge",B2,0.039,91.14,86.63
3435,herausfordern,verb,to challenge,B2,0.025,91.14,86.63
3436,Freitag,noun,Friday,B2,0.002,91.14,86.63
3437,Versuchung,noun,temptation,B2,0.008,91.14,86.63
3438,Sammlung,noun,collection,B2,0.017,91.14,86.64
3439,Krise,noun,crisis (unstable situation),B2,0.007,91.14,86.64
3440,Werbung,noun,"promotion, solicitation, recruitment",B2,0.018,91.15,86.64
3441,Finsternis,noun,eclipse (astronomy),B2,0.021,91.15,86.64
3442,zerrissen,adjective,"torn, ripped (up)",B2,0.032,91.15,86.64
3443,pflichten,verb,"to abide by, to take part in, to band together, to oblige",B2,0.019,91.15,86.64
3444,Betrieb,noun,"operating or running a technical device, application or process",B2,0.021,91.15,86.64
3445,Fell,noun,"fur, coat, pelt (hairy skin of an animal)",B2,0.021,91.15,86.65
3446,Gemeinschaft,noun,"community, collective, syndicate, consortium",B2,0.022,91.15,86.65
3447,Pension,noun,"boarding house, pension",B2,0.027,91.15,86.65
3448,Schleier,noun,veil,B2,0.045,91.15,86.65
3449,Spinne,noun,spider,B2,0.01,91.15,86.65
3450,heimkommen,verb,to come home,B2,0.02,91.15,86.66
3451,würdigen,verb,to appreciate; to publicly recognize and praise,B2,0.038,91.15,86.66
3452,Beschwerde,noun,"complaint (a grievance, problem, difficulty, or concern; the act of complaining)",B2,0.012,91.16,86.66
3453,Buddha,noun,buddha,B2,0.032,91.16,86.66
3454,Cäsar,noun,"Caesar, caesar (style of Roman emperors)",B2,0.009,91.16,86.66
3455,ick,pronoun,I,B2,0.023,91.16,86.67
3456,Dose,noun,"box (container made from metal or plastic, less often wood)",B2,0.011,91.16,86.67
3457,Schach,noun,chess (game),B2,0.017,91.16,86.67
3458,roh,adjective,raw (uncooked),B2,0.031,91.16,86.67
3459,Triumph,noun,triumph,B2,0.049,91.16,86.67
3460,aufregen,verb,to excite; to upset,B2,0.014,91.16,86.67
3461,Geschwindigkeit,noun,"speed, pace, tempo, velocity, rate",B2,0.01,91.16,86.68
3462,Scheune,noun,barn,B2,0.012,91.17,86.68
3463,schmerzen,verb,"to cause pain, to be painful, to ache or hurt",B2,0.015,91.17,86.68
3464,Vorfahre,noun,ancestor (of male or unspecified sex),B2,0.016,91.17,86.68
3465,erweitern,verb,"to extend, to expand",B2,0.018,91.17,86.68
3466,speziell,adjective,special,B2,0.004,91.17,86.68
3467,Ebene,noun,plain,B2,0.019,91.17,86.68
3468,krumm,adjective,crooked,B2,0.037,91.17,86.68
3469,ducken,verb,to duck,B2,0.021,91.17,86.69
3470,hacken,verb,"to chop, to hack",B2,0.008,91.17,86.69
3471,erlangen,verb,"to achieve, to obtain, to gain",B2,0.023,91.18,86.69
3472,Tradition,noun,tradition,B2,0.007,91.18,86.69
3473,Vorname,noun,given name (name chosen for a child by its parents),B2,0.014,91.18,86.69
3474,überflüssig,adverb,superfluously,B2,0.027,91.18,86.69
3475,misstrauen,verb,"to mistrust, to suspect, distrust, have doubts about",B2,0.035,91.18,86.7
3476,ironisch,adjective,ironic,B2,0.018,91.18,86.7
3477,Orden,noun,order (awarded decoration),B2,0.016,91.18,86.7
3478,Bester,noun,best (male person),B2,0.012,91.18,86.7
3479,Eimer,noun,"bucket, pail",B2,0.01,91.18,86.7
3480,kritisch,adjective,critical,B2,0.016,91.19,86.7
3481,beben,verb,"to shake, to quiver",B2,0.052,91.19,86.71
3482,Atmosphäre,noun,atmosphere,B2,0.012,91.19,86.71
3483,umso,conjunction,the (forming the parallel comparative with je),B2,0.007,91.19,86.71
3484,West,noun,the west (used without article; a short form of Westen),B2,0.012,91.19,86.71
3485,Italiener,noun,"Italian (person, or a type of chicken, or car)",B2,0.016,91.19,86.71
3486,Reigen,noun,a round dance; roundelay,B2,0.032,91.19,86.71
3487,militärisch,adjective,military,B2,0.01,91.19,86.71
3488,wertlos,adjective,worthless,B2,0.014,91.19,86.71
3489,ausfallen,verb,"to sortie, to sally",B2,0.01,91.2,86.71
3490,Beschreibung,noun,description,B2,0.012,91.2,86.72
3491,entfliehen,verb,to escape,B2,0.045,91.2,86.72
3492,Stand,noun,"standing, state, status, position, situation",B2,0.048,91.2,86.72
3493,belohnen,verb,to reward,B2,0.016,91.2,86.73
3494,aussetzen,verb,to expose,B2,0.019,91.2,86.73
3495,unabhängig,adverb,"independently, irrespectively, regardless",B2,0.01,91.2,86.73
3496,würgen,verb,"to strangle, to choke",B2,0.019,91.2,86.73
3497,bekennen,verb,"to confess, to avow, to profess (a belief, feeling, guilt, adherence to something)",B2,0.039,91.2,86.73
3498,Juni,noun,June,B2,0.01,91.2,86.73
3499,Landschaft,noun,landscape,B2,0.03,91.2,86.74
3500,Gemüt,noun,feeling; heart; soul; mind,B2,0.069,91.21,86.74
3501,Marke,noun,"mark (like trade mark), brand",B2,0.014,91.21,86.74
3502,Blase,noun,bubble,B2,0.013,91.21,86.74
3503,Erlösung,noun,deliverance; liberation,B2,0.027,91.21,86.75
3504,mitgehen,verb,to come along,B2,0.017,91.21,86.75
3505,März,noun,March,B2,0.013,91.21,86.75
3506,quer,adverb,"crosswise, across",B2,0.026,91.21,86.75
3507,Dankbarkeit,noun,"gratitude, gratefulness, thankfulness",B2,0.017,91.21,86.75
3508,schmücken,verb,"to adorn, to decorate",B2,0.062,91.21,86.76
3509,Be,noun,"flat sign, ♭",B2,0.006,91.21,86.76
3510,gläubig,adjective,"faithful, believing (convinced of a religious view or dogma)",B2,0.023,91.21,86.76
3511,Meldung,noun,"report, notification",B2,0.007,91.22,86.76
3512,Axt,noun,axe,B2,0.022,91.22,86.76
3513,Toast,noun,toast (salutation),B2,0.008,91.22,86.76
3514,beeinflussen,verb,to influence,B2,0.006,91.22,86.76
3515,türkisch,adjective,"Turkish, Turkic",B2,0.016,91.22,86.76
3516,Takt,noun,tact (keen perception or discernment),B2,0.024,91.22,86.77
3517,Schauspielerin,noun,"actress, actor (female)",B2,0.007,91.22,86.77
3518,Kapelle,noun,chapel,B2,0.028,91.22,86.77
3519,Kredit,noun,loan or anything afforded to someone in the expectation of return,B2,0.01,91.23,86.77
3520,Blüte,noun,"blossom, flower (reproductive structure on plants, often scented and/or colourful)",B2,0.022,91.23,86.77
3521,strafen,verb,to punish,B2,0.033,91.23,86.78
3522,Zustimmung,noun,agreement (expression or indication that an agreement has been reached),B2,0.018,91.23,86.78
3523,klassisch,adjective,classical,B2,0.009,91.23,86.78
3524,aussagen,verb,to state,B2,0.007,91.23,86.78
3525,zurücktreten,verb,to step back,B2,0.017,91.23,86.78
3526,Korrektur,noun,correction,B2,0.006,91.23,86.78
3527,Kragen,noun,collar,B2,0.03,91.23,86.78
3528,ausreden,verb,to finish speaking,B2,0.008,91.24,86.78
3529,Bildung,noun,"cultivation, refinement, education, culture",B2,0.024,91.24,86.79
3530,zielen,verb,to aim at a physical target,B2,0.01,91.24,86.79
3531,erfolgen,verb,"to happen, occur, take place",B2,0.018,91.24,86.79
3532,Raub,noun,"robbery, heist",B2,0.023,91.24,86.79
3533,bohren,verb,"to bore, to drill",B2,0.014,91.24,86.79
3534,Komödie,noun,comedy,B2,0.034,91.24,86.79
3535,Betrug,noun,fraud,B2,0.013,91.24,86.8
3536,herauf,adverb,"up, upwards (to the own location upwards)",B2,0.092,91.24,86.8
3537,zurückbleiben,verb,"to remain, to stay behind",B2,0.031,91.24,86.81
3538,Verletzung,noun,injury,B2,0.007,91.24,86.81
3539,Meter,noun,meter (unit of length),B2,0.001,91.25,86.81
3540,Erziehung,noun,education; upbringing; character formation,B2,0.026,91.25,86.81
3541,dreißig,number,thirty,B2,0.046,91.25,86.81
3542,Zweig,noun,"branch, twig",B2,0.042,91.25,86.81
3543,beschleunigen,verb,to accelerate,B2,0.014,91.25,86.82
3544,Rohr,noun,"duct, pipe, tube",B2,0.012,91.25,86.82
3545,Umgang,noun,"dealings, (social) intercourse",B2,0.025,91.25,86.82
3546,samt,preposition,together with,B2,0.052,91.26,86.82
3547,Enttäuschung,noun,"disappointment, let-down, bummer, frustration",B2,0.011,91.26,86.82
3548,Dom,noun,"cathedral (church serving as seat of a bishop, by extension, any large church)",B2,0.024,91.26,86.83
3549,Schicht,noun,"layer, stratum, seam",B2,0.006,91.26,86.83
3550,Ast,noun,"bough, limb, branch",B2,0.03,91.26,86.83
3551,beschaffen,verb,"to purchase, to procure, to obtain, to acquire",B2,0.012,91.26,86.83
3552,rechtfertigen,verb,"to justify, to defend (a chosen course of action or behavior; of a person)",B2,0.016,91.26,86.83
3553,unterbringen,verb,to accommodate,B2,0.02,91.26,86.83
3554,aufbewahren,verb,"to keep, to preserve (to maintain the condition of)",B2,0.013,91.26,86.83
3555,wimmern,verb,to whimper,B2,0.018,91.26,86.84
3556,entzünden,verb,"to ignite, to inflame",B2,0.035,91.26,86.84
3557,Standpunkt,noun,standpoint,B2,0.023,91.27,86.84
3558,Handschrift,noun,handwriting,B2,0.026,91.27,86.84
3559,billigen,verb,"to approve, to accept",B2,0.02,91.27,86.84
3560,Siegfrieden,noun,victorious peace,B2,0.198,91.27,86.86
3561,lästig,adjective,tiresome,B2,0.026,91.27,86.86
3562,bewusstlos,adjective,"unconscious (not conscious, not awake)",B2,0.009,91.27,86.86
3563,Veranda,noun,veranda,B2,0.023,91.27,86.86
3564,Frost,noun,frost; freezing weather (weather conditions below 0 °C),B2,0.017,91.27,86.87
3565,neidisch,adjective,"envious, jealous",B2,0.021,91.27,86.87
3566,Besucher,noun,visitor,B2,0.014,91.27,86.87
3567,zustoßen,verb,to happen to (especially something bad),B2,0.006,91.27,86.87
3568,Vorschrift,noun,"regulation, rule",B2,0.007,91.28,86.87
3569,Oktober,noun,October,B2,0.012,91.28,86.87
3570,wurzeln,verb,to be rooted,B2,0.023,91.28,86.87
3571,prügeln,verb,"to beat (up), to strike",B2,0.011,91.28,86.87
3572,kränken,verb,"to insult, offend",B2,0.025,91.28,86.87
3573,Friedhof,noun,"cemetery, graveyard",B2,0.007,91.28,86.88
3574,Suche,noun,search,B2,0.013,91.28,86.88
3575,erliegen,verb,to succumb to; to lose out to; to yield to; to fail to withstand,B2,0.034,91.28,86.88
3576,grinsen,verb,to grin,B2,0.023,91.28,86.88
3577,Sicht,noun,view,B2,0.019,91.29,86.88
3578,wovor,adverb,in front of what,B2,0.006,91.29,86.88
3579,Taxi,noun,"taxi, cab",B2,0.001,91.29,86.88
3580,Überfall,noun,an unanticipated violent attack,B2,0.009,91.3,86.88
3581,überbringen,verb,to deliver,B2,0.013,91.3,86.88
3582,Autorität,noun,authority,B2,0.015,91.3,86.88
3583,Mannschaft,noun,crew members of a ship,B2,0.009,91.3,86.88
3584,amerikanisch,adjective,American,B2,0.002,91.3,86.88
3585,Eintritt,noun,occurring; occurrence (the fact that something happens),B2,0.034,91.3,86.89
3586,entwischen,verb,to escape,B2,0.016,91.31,86.89
3587,Krawatte,noun,necktie,B2,0.009,91.31,86.89
3588,auswendig,adverb,by heart (knowing completely),B2,0.021,91.31,86.89
3589,nebenbei,adverb,"besides, additionally, along the way",B2,0.01,91.31,86.89
3590,Ozean,noun,ocean,B2,0.007,91.31,86.89
3591,schwächen,verb,"to weaken, to debilitate",B2,0.015,91.31,86.89
3592,Rasse,noun,"race (subspecies), breed",B2,0.008,91.31,86.89
3593,Steig,noun,climb (steep upward path),B2,0.012,91.31,86.89
3594,ausliefern,verb,"to deliver, to distribute",B2,0.008,91.32,86.89
3595,Pfote,noun,paw (soft foot/hand of a mammal),B2,0.014,91.32,86.9
3596,zuteilen,verb,"to assign, to allocate",B2,0.023,91.32,86.9
3597,voneinander,adverb,"from / of one another, from / of each other",B2,0.022,91.32,86.9
3598,Rippe,noun,rib,B2,0.009,91.32,86.9
3599,Metall,noun,metal,B2,0.011,91.32,86.9
3600,zeugen,verb,"to beget, father, procreate",B2,0.012,91.32,86.9
3601,Fach,noun,compartment,B2,0.025,91.32,86.9
3602,blinzeln,verb,to squint,B2,0.043,91.32,86.91
3603,wodurch,adverb,whereby,B2,0.029,91.32,86.91
3604,Zugang,noun,access,B2,0.009,91.33,86.91
3605,Prügel,noun,"club, cudgel",B2,0.014,91.33,86.91
3606,Schweiß,noun,sweat,B2,0.031,91.33,86.91
3607,ausnehmen,verb,to exclude,B2,0.026,91.33,86.92
3608,Freie,noun,the open (air),B2,0.023,91.33,86.92
3609,Fülle,noun,"fullness, fill",B2,0.04,91.33,86.92
3610,halber,adverb,"a half-hour before, thirty minutes before (used with the number of the following hour)",B2,0.027,91.33,86.92
3611,verstoßen,verb,"to cast out (of a community), to disown",B2,0.007,91.33,86.93
3612,Süßigkeit,noun,"sweet, candy (piece or kind of confectionery)",B2,0.013,91.33,86.93
3613,Mulde,noun,hollow (lowered area on a surface),B2,0.005,91.34,86.93
3614,Mars,noun,crow's nest,B2,0.009,91.34,86.93
3615,jämmerlich,adjective,"pitiable, miserable",B2,0.029,91.34,86.93
3616,uralt,adjective,"very old, ancient",B2,0.021,91.34,86.93
3617,inmitten,preposition,amid,B2,0.043,91.34,86.93
3618,Abreise,noun,departure,B2,0.028,91.34,86.94
3619,Strauß,noun,"bunch (of flowers), bouquet",B2,0.025,91.34,86.94
3620,Vaterland,noun,"fatherland, homeland: the land from which one originates",B2,0.032,91.34,86.94
3621,stürmen,verb,"to storm, to be blustery",B2,0.025,91.34,86.94
3622,Schöpfer,noun,creator,B2,0.029,91.34,86.95
3623,Prediger,noun,preacher,B2,0.036,91.34,86.95
3624,Erika,noun,heath (genus Erica).,B2,0.061,91.34,86.95
3625,Pole,noun,Pole,B2,0.011,91.34,86.95
3626,gänzlich,adverb,"completely, totally, altogether",B2,0.051,91.34,86.96
3627,rasend,adjective,"raging, frantic",B2,0.061,91.34,86.97
3628,Rezept,noun,recipe,B2,0.006,91.35,86.97
3629,Umarmung,noun,"embrace, hug",B2,0.019,91.35,86.97
3630,Falke,noun,falcon,B2,0.015,91.35,86.97
3631,Paper,noun,"paper, academic treatise",B2,0.008,91.35,86.97
3632,schnarchen,verb,to snore,B2,0.013,91.35,86.97
3633,Schwindel,noun,swindle,B2,0.025,91.35,86.97
3634,erfordern,verb,"to necessitate, to require",B2,0.007,91.35,86.97
3635,Dienstmädchen,noun,"maid, housemaid",B2,0.027,91.35,86.97
3636,Di,noun,"alternative form of Di., abbreviation of Dienstag (“Tuesday”)",B2,0.01,91.35,86.98
3637,obgleich,conjunction,"albeit, even though",B2,0.16,91.35,86.99
3638,Kneipe,noun,"pub, bar",B2,0.019,91.35,86.99
3639,wahrnehmen,verb,"to sense, to perceive, to apprehend, to notice",B2,0.03,91.36,86.99
3640,hereinkommen,verb,to come in (when the speaker is inside),B2,0.02,91.36,86.99
3641,lähmen,verb,to paralyze,B2,0.02,91.36,87
3642,mild,adjective,mild (in all of its common senses),B2,0.064,91.36,87
3643,Länge,noun,length,B2,0.019,91.36,87
3644,Zeugnis,noun,"testimony, witness declaration",B2,0.031,91.36,87.01
3645,Cousin,noun,male cousin,B2,0.004,91.36,87.01
3646,Angehöriger,noun,"relative, next of kin, relation (male or unspecified)",B2,0.017,91.36,87.01
3647,Sumpf,noun,"swamp, marsh",B2,0.017,91.36,87.01
3648,Winde,noun,"winch, windlass",B2,0.036,91.36,87.01
3649,liebenswürdig,adjective,"likable, kind",B2,0.059,91.36,87.02
3650,Hase,noun,hare (animal of either sex),B2,0.007,91.37,87.02
3651,Heft,noun,"notebook, writing booklet, cahier, composition book (book in which notes or memoranda are written)",B2,0.033,91.37,87.02
3652,hetzen,verb,to chase; to pursue,B2,0.021,91.37,87.02
3653,Betracht,noun,consideration,B2,0.022,91.37,87.02
3654,Jahreszeit,noun,"season, time of year",B2,0.018,91.37,87.02
3655,verbannen,verb,"to banish, to exile",B2,0.014,91.37,87.02
3656,Diebstahl,noun,theft,B2,0.007,91.37,87.03
3657,Bastard,noun,bastard (person born to unmarried parents),B2,0.002,91.37,87.03
3658,Tonne,noun,"barrel, vat, tun, drum",B2,0.011,91.38,87.03
3659,abweisen,verb,to dismiss (reject),B2,0.017,91.38,87.03
3660,Version,noun,version,B2,0.006,91.38,87.03
3661,Ausbruch,noun,"outbreak, beginning (of an epidemic, war, etc)",B2,0.019,91.38,87.03
3662,real,adjective,real (that has physical existence),B2,0.002,91.38,87.03
3663,Erfüllung,noun,fulfillment,B2,0.03,91.38,87.03
3664,verfehlen,verb,"to miss, to meet or hit not",B2,0.017,91.38,87.03
3665,hierbei,adverb,hereby,B2,0.022,91.38,87.04
3666,Schirm,noun,screen (movable protective cover),B2,0.017,91.39,87.04
3667,unwahrscheinlich,adjective,"unlikely, improbable",B2,0.012,91.39,87.04
3668,Platte,noun,bivouac; overnight camp,B2,0.012,91.39,87.04
3669,Pardon,noun,quarter (decision not to kill a captured enemy),B2,0.01,91.39,87.04
3670,Rahmen,noun,"frame, scope",B2,0.018,91.39,87.04
3671,Garderobe,noun,"coatrack, hallstand (piece of furniture on which clothes may be hung)",B2,0.02,91.39,87.04
3672,Aktion,noun,"operation, campaign, measure, organized course of action",B2,0.006,91.39,87.04
3673,Geistlicher,noun,"priest, clergyman, clergyperson, cleric (male or of unspecified gender)",B2,0.071,91.39,87.05
3674,sonderlich,adjective,"real, particular",B2,0.055,91.39,87.05
3675,Verfassung,noun,constitution,B2,0.012,91.39,87.05
3676,herunterkommen,verb,"to come down, to descend",B2,0.017,91.39,87.06
3677,Reis,noun,rice,B2,0.015,91.4,87.06
3678,Änderung,noun,"change, modification",B2,0.013,91.4,87.06
3679,Trick,noun,trick,B2,0.001,91.4,87.06
3680,produzieren,verb,to produce,B2,0.007,91.4,87.06
3681,einsperren,verb,"to lock up, to imprison, to jail",B2,0.008,91.4,87.06
3682,irgendjemand,pronoun,"someone, somebody",B2,0.001,91.41,87.06
3683,Verhör,noun,interrogation,B2,0.012,91.41,87.06
3684,Besprechung,noun,"meeting, discussion, (gathering among business people to discuss their business)",B2,0.008,91.41,87.06
3685,Seide,noun,silk,B2,0.015,91.41,87.06
3686,solid,adjective,solid,B2,0.022,91.41,87.07
3687,nachgehen,verb,"to follow, to pursue",B2,0.019,91.41,87.07
3688,glühend,adjective,"glowing, light-emitting, bright-hot",B2,0.073,91.41,87.07
3689,Schwere,noun,heaviness,B2,0.024,91.41,87.07
3690,Planet,noun,planet,B2,0.001,91.42,87.07
3691,erzeugt,adjective,"produced, generated",B2,0.022,91.42,87.08
3692,beantragen,verb,to apply for,B2,0.012,91.42,87.08
3693,Herrscher,noun,"ruler, monarch, sovereign",B2,0.018,91.42,87.08
3694,Ratschlag,noun,piece of advice; (in plural) advice,B2,0.009,91.43,87.08
3695,Bösewicht,noun,villain,B2,0.023,91.43,87.08
3696,öfters,adverb,quite often,B2,0.032,91.43,87.08
3697,Kerker,noun,"dungeon (immured and very austere prison, often underground)",B2,0.03,91.43,87.09
3698,Deckel,noun,"lid, cap (the cover of a container)",B2,0.029,91.43,87.09
3699,Dauer,noun,duration,B2,0.018,91.43,87.09
3700,Baby,noun,baby (infant),B2,0,91.46,87.09
3701,Tour,noun,"tour, journey",B2,0.004,91.46,87.09
3702,errichten,verb,"to build, to erect (a building or permanent structure, especially a large or individually significant one)",B2,0.013,91.46,87.09
3703,ausgerechnet,adverb,"Used to express irritation, indignation, or a similar emotional response to something against one's will",B2,0.005,91.47,87.09
3704,Balkon,noun,"balcony (an accessible structure extending from a building, especially outside a window or overlooking a stage)",B2,0.021,91.47,87.09
3705,alledem,pronoun,"all (of) this, any of this",B2,0.029,91.47,87.1
3706,verstört,adjective,disturbed; distraught,B2,0.029,91.47,87.1
3707,Neid,noun,"envy, jealousy",B2,0.037,91.47,87.1
3708,Ironie,noun,irony,B2,0.022,91.47,87.1
3709,beschämen,verb,to embarrass; to humiliate; to shame,B2,0.03,91.47,87.11
3710,wehtun,verb,[with dative] to hurt,B2,0.001,91.47,87.11
3711,mittlerweile,adverb,"meanwhile, in the meantime",B2,0.014,91.48,87.11
3712,Schnaps,noun,"spirit, booze, hard liquor",B2,0.008,91.48,87.11
3713,gewaltsam,adjective,"violent, forcible",B2,0.039,91.48,87.11
3714,Ohnmacht,noun,"faint, fainting",B2,0.038,91.48,87.11
3715,aufgebracht,adjective,upset,B2,0.01,91.48,87.11
3716,zerren,verb,to tug,B2,0.023,91.48,87.12
3717,Brummen,noun,mutter,B2,0.028,91.48,87.12
3718,aufwecken,verb,to wake up,B2,0.014,91.48,87.12
3719,Jungfer,noun,"unmarried woman; (old) maid, spinster",B2,0.057,91.48,87.12
3720,freudig,adverb,"joyfully, cheerfully",B2,0.069,91.48,87.13
3721,ehrwürdig,adjective,"venerable, reverend",B2,0.065,91.48,87.14
3722,informieren,verb,"to inform, to update",B2,0.001,91.49,87.14
3723,zäh,adjective,"not easily yielding, resilient",B2,0.023,91.49,87.14
3724,beruhen,verb,to consist,B2,0.017,91.49,87.14
3725,Gehorsam,noun,obedience,B2,0.04,91.49,87.14
3726,Hauptstadt,noun,capital (city),B2,0.015,91.49,87.14
3727,Messe,noun,fair (trade exhibition),B2,0.014,91.49,87.14
3728,Socke,noun,sock,B2,0.006,91.49,87.14
3729,Galerie,noun,gallery (all senses),B2,0.018,91.49,87.15
3730,Ausland,noun,foreign countries (collectively),B2,0.007,91.49,87.15
3731,Tempo,noun,"tempo, pace (rate, speed)",B2,0.007,91.5,87.15
3732,wüst,adjective,"desert, desolate",B2,0.033,91.5,87.15
3733,Blödsinn,noun,"rubbish, nonsense; bunkum, bunk",B2,0.002,91.5,87.15
3734,gemäß,preposition,"according to, in accordance with",B2,0.022,91.5,87.15
3735,endlos,adjective,endless,B2,0.013,91.5,87.15
3736,Gemüse,noun,vegetable; vegetables (kinds of plants),B2,0.009,91.5,87.15
3737,ansetzen,verb,"to set, to place, ready",B2,0.012,91.5,87.15
3738,bestechen,verb,to bribe,B2,0.012,91.5,87.16
3739,Begegnung,noun,"encounter, meeting",B2,0.016,91.5,87.16
3740,Abwesenheit,noun,absence (state of being absent),B2,0.018,91.51,87.16
3741,Schwede,noun,Swede (Swedish person) (male or of unspecified gender),B2,0.011,91.51,87.16
3742,Politiker,noun,politician,B2,0.009,91.51,87.16
3743,Christin,noun,a female Christian,B2,0.013,91.51,87.16
3744,Schurke,noun,"villain, scoundrel",B2,0.013,91.51,87.16
3745,verreisen,verb,"to take a trip, travel, go out of town",B2,0.008,91.51,87.16
3746,Gehalt,noun,"content, fraction (amount or percentage of some material in a mass)",B2,0.008,91.51,87.16
3747,Schublade,noun,drawer (open-topped box in a cabinet used for storing),B2,0.01,91.51,87.16
3748,meiner,pronoun,mine (substantival possessive),B2,0.014,91.52,87.16
3749,Leere,noun,"emptiness, void",B2,0.018,91.52,87.17
3750,per,preposition,"by, by means of, through, via",B2,0.002,91.52,87.17
3751,übergehen,verb,to skip,B2,0.028,91.52,87.17
3752,irdisch,adjective,"terrestrial, earthly",B2,0.056,91.52,87.17
3753,bevorstehen,verb,"to be imminent, to impend",B2,0.021,91.52,87.17
3754,Schwelle,noun,threshold,B2,0.049,91.52,87.18
3755,Wechsel,noun,change,B2,0.02,91.52,87.18
3756,entzückend,adjective,"lovely, attractive, charming, delightful",B2,0.019,91.52,87.18
3757,Hugo,noun,"cocktail prepared with Prosecco, elderflower or lemon balm syrup, mint, and soda",B2,0.012,91.52,87.18
3758,Kanzlei,noun,"office, chambers",B2,0.01,91.53,87.18
3759,verbreiten,verb,"to put about, spread, circulate, disseminate sth.",B2,0.013,91.53,87.18
3760,hohl,adjective,hollow,B2,0.046,91.53,87.19
3761,Ersatz,noun,"replacement, substitute",B2,0.011,91.53,87.19
3762,Verwirrung,noun,"confusion, disarray, clutter",B2,0.027,91.53,87.19
3763,Herkunft,noun,"origin, source",B2,0.017,91.53,87.19
3764,hinkommen,verb,"to go or travel somewhere and arrive (can refer to the journey, the arrival, or both)",B2,0.02,91.53,87.19
3765,widerfahren,verb,"to befall, to happen to",B2,0.022,91.53,87.2
3766,andeuten,verb,to suggest or imply,B2,0.021,91.53,87.2
3767,Bemühung,noun,effort; endeavor,B2,0.023,91.53,87.2
3768,Vormittag,noun,"mid-morning, late morning, forenoon (time of day roughly between 9 a.m. and noon)",B2,0.035,91.53,87.2
3769,scheuen,verb,"to shy, to balk at (to physically refuse going near a source of fear, especially of animals)",B2,0.056,91.53,87.21
3770,Produkt,noun,product,B2,0.007,91.53,87.21
3771,jüdisch,adjective,Jewish,B2,0.009,91.53,87.21
3772,Leichnam,noun,corpse (dead human body),B2,0.028,91.54,87.21
3773,ungeschickt,adjective,"clumsy, awkward, lacking coordination, not graceful, not dexterous",B2,0.043,91.54,87.21
3774,Herd,noun,cooker; stove,B2,0.023,91.54,87.21
3775,funkeln,verb,"to sparkle, twinkle, glitter",B2,0.055,91.54,87.22
3776,intelligent,adjective,intelligent,B2,0.004,91.54,87.22
3777,traut,adjective,intimate,B2,0.014,91.54,87.22
3778,Partie,noun,"match, game",B2,0.026,91.54,87.22
3779,Mühle,noun,"mill, grinder (tool or apparatus for grinding)",B2,0.025,91.54,87.22
3780,farbig,adjective,colored,B2,0.027,91.54,87.23
3781,Strumpf,noun,"stocking; hose (women’s undergarment covering the foot, the lower leg, and part of the thigh)",B2,0.034,91.54,87.23
3782,Porträt,noun,portrait,B2,0.023,91.54,87.23
3783,unerhört,adjective,tremendous; enormous; immense,B2,0.049,91.54,87.24
3784,blank,adjective,"spotlessly clean, shining, polished",B2,0.051,91.54,87.24
3785,Diner,noun,diner (eatery),B2,0.022,91.54,87.24
3786,borgen,verb,to borrow,B2,0.011,91.54,87.24
3787,Auto,noun,car,B2,0,91.58,87.24
3788,Fresse,noun,"mouth, gob",B2,0.012,91.58,87.24
3789,bedrohlich,adjective,threatening,B2,0.004,91.58,87.24
3790,beraten,verb,to discuss,B2,0.014,91.58,87.24
3791,seither,adverb,since then (from that point in time onwards),B2,0.025,91.58,87.25
3792,Musiker,noun,musician,B2,0.005,91.58,87.25
3793,pfui,interjection,"an exclamation of disgust, aversion, dislike, contempt, or annoyance",B2,0.033,91.58,87.25
3794,Dasein,noun,"being there, presence, existence",B2,0.06,91.58,87.25
3795,beabsichtigen,verb,to intend,B2,0.018,91.58,87.26
3796,überreichen,verb,"to hand something over, to present",B2,0.028,91.58,87.26
3797,verdoppeln,verb,"to double, redouble",B2,0.012,91.59,87.26
3798,berauben,verb,to rob,B2,0.022,91.59,87.26
3799,vorgeben,verb,to pretend,B2,0.012,91.59,87.26
3800,Gemach,noun,private chamber (especially of a palace),B2,0.047,91.59,87.27
3801,ausweichen,verb,"to dodge, to avoid (hitting), to (just) miss, to swerve around",B2,0.02,91.59,87.27
3802,Limonade,noun,lemonade,B2,0.008,91.59,87.27
3803,Gleichgewicht,noun,equilibrium,B2,0.013,91.59,87.27
3804,vermitteln,verb,to mediate,B2,0.012,91.59,87.27
3805,nachgeben,verb,to give way,B2,0.024,91.59,87.27
3806,Sattel,noun,saddle,B2,0.027,91.59,87.27
3807,imstande,adverb,capable,B2,0.042,91.59,87.28
3808,schriftlich,adjective,written,B2,0.016,91.59,87.28
3809,vergebens,adverb,in vain (without success),B2,0.082,91.59,87.28
3810,aufgelöst,adjective,"dissolved, drained",B2,0.015,91.59,87.29
3811,tätig,adjective,active (given to action),B2,0.029,91.59,87.29
3812,gewissermaßen,adverb,in a way,B2,0.038,91.6,87.29
3813,erforschen,verb,"to explore, to investigate",B2,0.015,91.6,87.29
3814,angewiesen,adjective,"dependent (on), reliant (on)",B2,0.019,91.6,87.29
3815,Göttin,noun,goddess,B2,0.011,91.6,87.29
3816,Dad,noun,dad; Dad,B2,0,91.63,87.29
3817,Horizont,noun,horizon (line where the sky appears to meet the earth; (figurative) range of someone’s thinking or insight),B2,0.026,91.63,87.3
3818,Bewohner,noun,"inhabitant (someone who lives or dwells in a place, especially a room, house, institution)",B2,0.017,91.63,87.3
3819,vollendet,adjective,"perfect, accomplished",B2,0.047,91.63,87.3
3820,Begeisterung,noun,"enthusiasm, zeal, zest",B2,0.035,91.63,87.3
3821,Gärtner,noun,gardener,B2,0.019,91.63,87.31
3822,bestens,adverb,"very well, perfectly",B2,0.002,91.63,87.31
3823,entstanden,adjective,originated,B2,0.025,91.63,87.31
3824,vornehm,adjective,elegant; posh; high-class; distinguished,B2,0.059,91.64,87.31
3825,beichten,verb,to confess (sins),B2,0.019,91.64,87.31
3826,zerschlagen,verb,to smash (into pieces),B2,0.034,91.64,87.32
3827,Antlitz,noun,"face, countenance, visage",B2,0.092,91.64,87.32
3828,Brötchen,noun,"a bun, bread roll",B2,0.022,91.64,87.33
3829,enttäuschen,verb,to disappoint (displease by not fulfilling an expectation),B2,0.012,91.64,87.33
3830,Tyrann,noun,tyrant,B2,0.029,91.64,87.33
3831,Alkohol,noun,"alcohol, ethanol (substance)",B2,0.002,91.64,87.33
3832,pur,adjective,"pure, mere, sheer (nothing other than)",B2,0.009,91.64,87.33
3833,allmächtig,adjective,"omnipotent, all-powerful, almighty",B2,0.012,91.65,87.33
3834,Nachbarin,noun,female neighbor,B2,0.014,91.65,87.33
3835,winden,verb,to wind,B2,0.028,91.65,87.33
3836,schleudern,verb,to hurl; to fling; to sling,B2,0.033,91.65,87.34
3837,Wade,noun,calf (of the leg),B2,0.005,91.65,87.34
3838,entschließen,verb,to decide,B2,0.056,91.65,87.34
3839,trüben,verb,"to muddle, bedim, blear, blur (make something turbid or unclear)",B2,0.042,91.65,87.34
3840,Museum,noun,museum,B2,0.005,91.65,87.34
3841,Bestellung,noun,"order, request for a product",B2,0.011,91.65,87.35
3842,Schwur,noun,oath,B2,0.037,91.65,87.35
3843,scheußlich,adjective,"hideous, atrocious, abominable",B2,0.015,91.65,87.35
3844,ermutigen,verb,to encourage,B2,0.015,91.65,87.35
3845,Realität,noun,reality (state of being real),B2,0.003,91.66,87.35
3846,ausüben,verb,"to practice / practise, to exert",B2,0.018,91.66,87.35
3847,Rande,noun,beetroot,B2,0.033,91.66,87.36
3848,kauen,verb,to chew (something),B2,0.014,91.66,87.36
3849,förmlich,adverb,downright,B2,0.023,91.66,87.36
3850,kühlen,verb,"to cool, to refrigerate",B2,0.031,91.66,87.36
3851,bezwingen,verb,to overcome (an obstacle),B2,0.034,91.66,87.36
3852,durchbrechen,verb,to break something in two,B2,0.014,91.66,87.36
3853,ausbreiten,verb,"to spread, spread out",B2,0.026,91.66,87.37
3854,verwöhnt,adjective,spoiled / spoilt,B2,0.018,91.66,87.37
3855,Täuschung,noun,deception,B2,0.019,91.66,87.37
3856,verwandt,adjective,"related (connected by blood, adoption, or marriage)",B2,0.017,91.66,87.37
3857,international,adjective,international,B2,0.003,91.67,87.37
3858,Senat,noun,senate,B2,0.017,91.67,87.37
3859,Elefant,noun,elephant,B2,0.005,91.67,87.37
3860,Beleidigung,noun,insult (action or speech deliberately intended to be rude),B2,0.013,91.67,87.37
3861,Rückzug,noun,retreat,B2,0.01,91.67,87.38
3862,Drink,noun,"an alcoholic drink, especially one containing liquor and some other liquid, like a cocktail or long drink",B2,0.001,91.68,87.38
3863,anstarren,verb,to stare at,B2,0.01,91.68,87.38
3864,Genuss,noun,"enjoyment, pleasure",B2,0.049,91.68,87.38
3865,lichten,verb,to thin out; to clear; to make sparse,B2,0.073,91.68,87.39
3866,Praxis,noun,"practice, experience",B2,0.007,91.68,87.39
3867,einpacken,verb,"to wrap up; to pack up (a gift, etc.)",B2,0.009,91.68,87.39
3868,Begleitung,noun,Accompaniment; working together in partnership.,B2,0.017,91.68,87.39
3869,Quartier,noun,"accommodation, quarters",B2,0.009,91.68,87.39
3870,offenbaren,verb,"to reveal, to disclose",B2,0.014,91.68,87.39
3871,ausfüllen,verb,to fill in; to fill completely; to take up,B2,0.017,91.68,87.39
3872,schwellen,verb,to swell up; to bulge,B2,0.035,91.68,87.39
3873,Kamin,noun,fireplace,B2,0.013,91.68,87.4
3874,auflösen,verb,"to break up, dissipate, sever",B2,0.018,91.69,87.4
3875,unverschämt,adjective,"impertinent (insolent, ill-mannered)",B2,0.016,91.69,87.4
3876,rührend,adjective,touching; heart-warming,B2,0.028,91.69,87.4
3877,Apparat,noun,"apparatus, device, machine (complex instrument)",B2,0.006,91.69,87.4
3878,antik,adjective,"of the age of Antiquity; Greek, Roman, etc.",B2,0.009,91.69,87.4
3879,einfangen,verb,"to capture, to catch",B2,0.013,91.69,87.4
3880,durchsetzen,verb,"to establish; to enforce; to cause to become prevalent, accepted, or effective",B2,0.019,91.69,87.4
3881,Russe,noun,Russian (person),B2,0.006,91.69,87.4
3882,Bettler,noun,beggar,B2,0.037,91.69,87.41
3883,schmelzen,verb,to melt; to liquefy,B2,0.014,91.69,87.41
3884,Teich,noun,pond (natural or man-made),B2,0.026,91.7,87.41
3885,widersetzen,verb,"to set against, to make a stand against",B2,0.015,91.7,87.41
3886,strahlen,verb,"to shine, to beam",B2,0.026,91.7,87.41
3887,Schenke,noun,pub,B2,0.016,91.7,87.41
3888,Schnur,noun,"cord, string",B2,0.027,91.7,87.42
3889,sentimental,adjective,sentimental,B2,0.016,91.7,87.42
3890,Literatur,noun,"literature (written works collectively, often about a certain topic, in a certain language etc.)",B2,0.018,91.7,87.42
3891,Ausbildung,noun,"training, apprenticeship, vocational education, education",B2,0.006,91.7,87.42
3892,Schreck,noun,fright,B2,0.023,91.7,87.42
3893,Eule,noun,owl,B2,0.024,91.7,87.42
3894,Wachs,noun,wax,B2,0.013,91.7,87.43
3895,südlich,adjective,"south, southern",B2,0.009,91.7,87.43
3896,Lade,noun,drawer,B2,0.006,91.7,87.43
3897,Ekel,noun,"disgust, loathing",B2,0.052,91.71,87.43
3898,Organisation,noun,"organisation, organization",B2,0.004,91.71,87.43
3899,Niederlage,noun,"defeat, loss",B2,0.01,91.71,87.43
3900,Berührung,noun,"touch, contact (an act of touching physically)",B2,0.018,91.71,87.43
3901,Miete,noun,rent,B2,0.007,91.71,87.43
3902,befestigen,verb,"to attach, to pin, to fasten, to secure",B2,0.031,91.71,87.44
3903,glotzen,verb,"to stare, gape, gawk, goggle (eyes)",B2,0.009,91.71,87.44
3904,Deckung,noun,cover,B2,0.02,91.72,87.44
3905,spritzen,verb,"to spurt, to squirt",B2,0.005,91.72,87.44
3906,sogleich,adverb,"immediately, straight away",B2,0.211,91.72,87.45
3907,Portier,noun,"doorman, porter",B2,0.044,91.72,87.46
3908,Schuppen,noun,shed,B2,0.009,91.72,87.46
3909,vergeuden,verb,"to squander, to waste (time, resources, money)",B2,0.005,91.72,87.46
3910,jo,interjection,"yes, yeah, well; expresses agreement in a hesitant or ponderous manner.",B2,0.003,91.72,87.46
3911,logisch,adverb,logically,B2,0.004,91.72,87.46
3912,Holländer,noun,person from Holland (a region in the Netherlands),B2,0.025,91.72,87.46
3913,fünfzig,number,fifty,B2,0.03,91.72,87.46
3914,Europäer,noun,European (person),B2,0.007,91.73,87.47
3915,Oper,noun,"opera (theatrical work, combining drama, music, song and sometimes dance)",B2,0.009,91.73,87.47
3916,erwürgen,verb,to strangle (choke someone to death),B2,0.012,91.73,87.47
3917,hinters,contraction,"behind the, to the rear of the",B2,0.014,91.73,87.47
3918,Träne,noun,tear (in the eye),B2,0.075,91.73,87.47
3919,überdenken,verb,"to reconsider, to rethink",B2,0.012,91.73,87.48
3920,verschlucken,verb,"to swallow, swallow up",B2,0.016,91.73,87.48
3921,Käufer,noun,"shopper, buyer",B2,0.005,91.73,87.48
3922,plus,adverb,"plus, increased by",B2,0.004,91.73,87.48
3923,Regiment,noun,regiment (unit),B2,0.025,91.73,87.48
3924,Bruch,noun,"swamp; wet, swampy land with trees and bushes, which if drained becomes suitable for grazing animals on",B2,0.015,91.73,87.48
3925,Schlitten,noun,"sled, sledge, sleigh (any vehicle moving over snow or ice on parallel skids)",B2,0.021,91.73,87.48
3926,Beerdigung,noun,burial,B2,0.002,91.74,87.48
3927,klammern,verb,to cling,B2,0.019,91.74,87.48
3928,Gebot,noun,"command, commandment",B2,0.028,91.74,87.49
3929,zuliebe,postposition,for the sake of,B2,0.017,91.74,87.49
3930,aufeinander,adverb,"one another, each other",B2,0.014,91.74,87.49
3931,Schnitt,noun,"cut, the result of cutting",B2,0.015,91.74,87.49
3932,Verspätung,noun,"delay, lateness, late arrival",B2,0.006,91.74,87.49
3933,Echo,noun,echo (reflected sound),B2,0.012,91.74,87.49
3934,Miene,noun,"expression, face",B2,0.13,91.74,87.5
3935,Grube,noun,"pit, excavation (man- or animal-made hole in the ground)",B2,0.016,91.74,87.5
3936,Bestätigung,noun,"acknowledgment, affirmation, confirmation",B2,0.013,91.74,87.5
3937,Qualität,noun,"quality (level of excellence, level of being free from defects)",B2,0.007,91.75,87.5
3938,anmelden,verb,"to announce, declare",B2,0.01,91.75,87.51
3939,ermitteln,verb,"to determine, to identify (a value or identity; through a calculation or other process)",B2,0.004,91.75,87.51
3940,ärgerlich,adverb,"crossly, angrily",B2,0.017,91.75,87.51
3941,freilassen,verb,"to release, to free",B2,0.004,91.75,87.51
3942,Portal,noun,portal,B2,0.02,91.75,87.51
3943,leuchtend,adjective,luminous,B2,0.044,91.75,87.51
3944,Tragödie,noun,tragedy,B2,0.006,91.75,87.51
3945,Armut,noun,poverty,B2,0.02,91.75,87.52
3946,Anerkennung,noun,"appreciation (a just valuation or estimate of merit, worth, weight, etc.; recognition of excellence)",B2,0.015,91.75,87.52
3947,Erzählung,noun,"tale, story; narration",B2,0.033,91.75,87.52
3948,unterzeichnen,verb,to sign (to give legal consent by writing one's signature),B2,0.005,91.76,87.52
3949,Wendung,noun,turn,B2,0.037,91.76,87.53
3950,vorwerfen,verb,"to throw at, throw forward",B2,0.01,91.76,87.53
3951,Korn,noun,kernel; single grain,B2,0.026,91.76,87.53
3952,sterblich,adjective,mortal,B2,0.01,91.76,87.53
3953,enthüllen,verb,"to unveil, to perform a ceremonial unveiling",B2,0.015,91.76,87.53
3954,wegfahren,verb,"to drive away, to drive off",B2,0.007,91.76,87.53
3955,erneuern,verb,to renew,B2,0.025,91.76,87.53
3956,quellen,verb,"to well, to spring (issue forth, as water from the earth)",B2,0.037,91.76,87.54
3957,vorzüglich,adjective,"splendid, first-rate, exquisite, five-star, delicious (of food)",B2,0.057,91.76,87.54
3958,Office,noun,office,B2,0.001,91.77,87.54
3959,zuverlässig,adverb,"steadily, staunchly",B2,0.012,91.77,87.54
3960,explodieren,verb,to explode,B2,0.002,91.77,87.54
3961,Einfall,noun,idea,B2,0.027,91.77,87.55
3962,scheu,adjective,shy (reserved),B2,0.063,91.77,87.55
3963,Hausfrau,noun,housewife,B2,0.019,91.77,87.55
3964,nähren,verb,to feed,B2,0.032,91.77,87.55
3965,absetzen,verb,to set down,B2,0.005,91.77,87.56
3966,Bekanntschaft,noun,acquaintance,B2,0.029,91.77,87.56
3967,eingebildet,adjective,"big-headed, conceited",B2,0.016,91.77,87.56
3968,Ellbogen,noun,elbow,B2,0.025,91.77,87.56
3969,Fassung,noun,"a device which holds something else, e.g. a socket for a lightbulb, the setting of a jewel etc.",B2,0.018,91.78,87.56
3970,Nachfolger,noun,successor,B2,0.016,91.78,87.56
3971,Absatz,noun,"to interrupt, put down, sit down (as a noun)",B2,0.017,91.78,87.57
3972,Zuflucht,noun,"refuge, protection, escape",B2,0.023,91.78,87.57
3973,Green,noun,"green, putting green",B2,0.006,91.78,87.57
3974,November,noun,November,B2,0.009,91.78,87.57
3975,Sonnenuntergang,noun,sunset (time of day),B2,0.009,91.78,87.57
3976,Schinken,noun,"ham, pork from the hindquarter",B2,0.011,91.78,87.57
3977,Sahne,noun,cream (milkfat),B2,0.022,91.78,87.57
3978,Pelz,noun,fur,B2,0.03,91.78,87.57
3979,abhängig,adjective,dependent,B2,0.012,91.78,87.57
3980,schnallen,verb,to fasten with a clasp,B2,0.009,91.78,87.58
3981,Dampf,noun,steam,B2,0.017,91.79,87.58
3982,derzeit,adverb,"currently, at present (implying that this state is likely temporary)",B2,0.011,91.79,87.58
3983,einbringen,verb,"to bring in, harvest, yield, fetch (a price)",B2,0.01,91.79,87.58
3984,ekelhaft,adjective,"disgusting, gross",B2,0.005,91.79,87.58
3985,lautlos,adjective,"soundless, silent",B2,0.031,91.79,87.58
3986,derartig,adjective,"such, suchlike",B2,0.025,91.79,87.58
3987,werben,verb,to recruit; to enlist,B2,0.036,91.79,87.59
3988,Empfehlung,noun,recommendation,B2,0.01,91.79,87.59
3989,klemmen,verb,"to jam, to clamp (make something stuck in a tight place)",B2,0.011,91.79,87.59
3990,Feiertag,noun,"holiday (a day on which a festival, etc., is traditionally observed)",B2,0.009,91.79,87.59
3991,Müller,noun,miller,B2,0.005,91.79,87.59
3992,Heide,noun,"heath, heathland",B2,0.034,91.79,87.59
3993,Weide,noun,pasture,B2,0.03,91.79,87.6
3994,Vorliebe,noun,predilection; preference; liking; penchant,B2,0.022,91.79,87.6
3995,besteigen,verb,"to ascend, to climb, to mount (a kerb etc)",B2,0.025,91.8,87.6
3996,Kritik,noun,criticism (negative judgement),B2,0.011,91.8,87.6
3997,Gebrauch,noun,"use, usage",B2,0.019,91.8,87.6
3998,Sorte,noun,"a sort, variety, grade of a good produced for sale or consumption",B2,0.006,91.8,87.6
3999,Anordnung,noun,"arrangement, array",B2,0.015,91.8,87.6
4000,misstrauisch,adjective,"distrustful, suspicious",B2,0.018,91.8,87.61
4001,teuflisch,adjective,devilish,B2,0.018,91.8,87.61
4002,negativ,adjective,negative (undesirable),B2,0.002,91.8,87.61
4003,bezeugen,verb,"to witness, to testify",B2,0.017,91.8,87.61
4004,zusagen,verb,"to accept, to promise to come",B2,0.014,91.8,87.61
4005,Dienstag,noun,Tuesday,B2,0.003,91.81,87.61
4006,Rüstung,noun,armament (the act of acquiring or producing weapons),B2,0.019,91.81,87.61
4007,Wurf,noun,throw,B2,0.016,91.81,87.61
4008,physisch,adjective,physical,B2,0.01,91.81,87.61
4009,Hochzeitstag,noun,wedding day,B2,0.009,91.81,87.61
4010,Rang,noun,"rank, a level in a hierarchy (but not so much an according title, for which Dienstgrad and Amtsbezeichnung / Amtstitel)",B2,0.018,91.81,87.62
4011,unterschätzen,verb,to underestimate,B2,0.007,91.81,87.62
4012,vegan,adjective,vegan,B2,0.002,91.81,87.62
4013,Vorwand,noun,pretext,B2,0.02,91.81,87.62
4014,Zins,noun,interest,B2,0.017,91.81,87.62
4015,auffordern,verb,"to ask, request",B2,0.027,91.82,87.62
4016,Hülle,noun,"covering, wrapping",B2,0.016,91.82,87.62
4017,donnern,verb,to thunder,B2,0.031,91.82,87.63
4018,Passagier,noun,"passenger (especially of a plane or ship, but applicable to all transport)",B2,0.004,91.82,87.63
4019,Technik,noun,technique,B2,0.002,91.82,87.63
4020,Haushalt,noun,"household (collectively, all the persons who live in a given home)",B2,0.019,91.82,87.63
4021,strahlend,adverb,"dazzlingly, radiantly, brightly",B2,0.025,91.82,87.63
4022,Ferse,noun,heel,B2,0.017,91.82,87.63
4023,Artist,noun,"one who performs physical tricks in a circus or similar context, e.g. a wirewalker, trapezist, or juggler",B2,0.012,91.82,87.63
4024,hungern,verb,"to hunger, to starve",B2,0.013,91.82,87.63
4025,Schar,noun,troop,B2,0.071,91.82,87.64
4026,auffahren,verb,"to rear-end, to drive into",B2,0.022,91.82,87.64
4027,Schwung,noun,"a swinging motion, sweep",B2,0.014,91.82,87.64
4028,Frankfurter,noun,"Frankfurter (native or inhabitant of the city of Frankfurt, state of Hesse, Germany) (usually male)",B2,0.034,91.83,87.64
4029,Handtuch,noun,towel (cloth for wiping),B2,0.004,91.83,87.64
4030,besagt,adjective,"said, aforesaid, implied, mentioned",B2,0.007,91.83,87.64
4031,flattern,verb,to flutter,B2,0.057,91.83,87.65
4032,Konsequenz,noun,consequence (that which follows something on which it depends; that which is produced by a cause),B2,0.004,91.83,87.65
4033,gierig,adjective,greedy,B2,0.015,91.83,87.65
4034,gedeckt,adjective,covered,B2,0.023,91.83,87.65
4035,versöhnen,verb,to reconcile,B2,0.029,91.83,87.65
4036,Tätigkeit,noun,activity,B2,0.046,91.83,87.66
4037,missverstehen,verb,"to misunderstand, to misapprehend",B2,0.019,91.83,87.66
4038,artig,adjective,"well-behaved, good",B2,0.052,91.83,87.66
4039,Unheil,noun,"calamity, disaster (an event resulting in great loss)",B2,0.028,91.83,87.67
4040,dämpfen,verb,"to steam, treat with steam",B2,0.027,91.83,87.67
4041,Ernte,noun,harvest,B2,0.011,91.83,87.67
4042,bearbeiten,verb,to edit,B2,0.006,91.84,87.67
4043,Rakete,noun,"rocket, missile",B2,0.002,91.84,87.67
4044,Bohne,noun,bean,B2,0.006,91.84,87.67
4045,fernhalten,verb,"to keep (something/someone) away, to keep (something) off",B2,0.006,91.84,87.67
4046,Hacke,noun,heel (of the foot or shoe),B2,0.009,91.84,87.67
4047,Zügel,noun,rein (used to control a horse),B2,0.028,91.84,87.67
4048,Draht,noun,wire (thread of metal; conductor),B2,0.009,91.84,87.67
4049,Sucht,noun,addiction,B2,0.009,91.84,87.68
4050,Umweg,noun,detour (a diversion or deviation from one's original route),B2,0.024,91.84,87.68
4051,unzählig,adjective,"countless, innumerable",B2,0.019,91.84,87.68
4052,Höflichkeit,noun,"courtesy, politeness, courtliness (the state of being polite)",B2,0.021,91.85,87.68
4053,Umschlag,noun,envelope,B2,0.007,91.85,87.68
4054,Medikament,noun,"drug, medicine",B2,0.001,91.85,87.68
4055,ausschalten,verb,"to turn off, to switch off, to power down, to disable (to stop a device or disable its function)",B2,0.002,91.85,87.68
4056,ungerecht,adjective,"unjust, unfair",B2,0.014,91.85,87.68
4057,Vorgang,noun,process,B2,0.03,91.85,87.69
4058,gebrochen,adjective,broken,B2,0.006,91.86,87.69
4059,Kiefer,noun,pine (tree of genus Pinus),B2,0.02,91.86,87.69
4060,Stube,noun,living room,B2,0.136,91.86,87.7
4061,Auswahl,noun,selection,B2,0.008,91.86,87.7
4062,Schmetterling,noun,butterfly,B2,0.01,91.86,87.7
4063,Rathaus,noun,"city hall, town hall (city council meeting house)",B2,0.017,91.86,87.7
4064,zufügen,verb,"to cause (grief, pain); to inflict (damage)",B2,0.01,91.86,87.7
4065,Indianer,noun,"Indian, American Indian, Native American",B2,0.002,91.86,87.7
4066,Profil,noun,profile,B2,0.007,91.86,87.7
4067,Sau,noun,sow (female pig),B2,0.007,91.86,87.7
4068,Mitteilung,noun,message (communications: Information which is sent from a source to a receiver),B2,0.022,91.86,87.71
4069,eifrig,adjective,"avid, eager, diligent, zealous",B2,0.077,91.86,87.71
4070,ablaufen,verb,run out,B2,0.01,91.87,87.71
4071,zumachen,verb,to close; to shut,B2,0.01,91.87,87.71
4072,unfähig,adjective,"incapable, unable, inept",B2,0.014,91.87,87.71
4073,Beichte,noun,confession (sacramental disclosure of one's sins),B2,0.015,91.87,87.72
4074,Geschirr,noun,dishware,B2,0.018,91.87,87.72
4075,Flagge,noun,flag,B2,0.007,91.87,87.72
4076,gell,particle,"emphasis and question marker particle; asks for confirmation; right?; eh?; isn't it, innit?",B2,0.026,91.87,87.72
4077,sündigen,verb,to sin,B2,0.019,91.87,87.72
4078,besoffen,adjective,made with alcohol,B2,0.006,91.87,87.72
4079,Beobachtung,noun,monitoring; surveillance; supervision,B2,0.013,91.87,87.72
4080,Juwel,noun,"gem, jewel (precious stone)",B2,0.007,91.87,87.72
4081,verlocken,verb,to entice,B2,0.027,91.87,87.73
4082,erbitten,verb,"to request, to ask for",B2,0.02,91.87,87.73
4083,Aufseher,noun,"A supervisor, person overseeing (the work of) others, taskmaster, foreman, warden, custodian, etc.",B2,0.03,91.87,87.73
4084,Formel,noun,formula (in mathematics or chemistry),B2,0.009,91.88,87.73
4085,reinkommen,verb,to come in,B2,0.001,91.88,87.73
4086,verborgen,adjective,hidden,B2,0.026,91.88,87.73
4087,anderthalb,number,"one and a half (1+¹⁄₂), sesqui",B2,0.015,91.88,87.73
4088,erlaubt,adjective,"allowed, allowable, permissible",B2,0.023,91.88,87.74
4089,Kürze,noun,brevity,B2,0.011,91.88,87.74
4090,Gefangene,noun,"prisoner, captive, detainee (female)",B2,0.008,91.88,87.74
4091,zitieren,verb,"to cite, to quote",B2,0.009,91.89,87.74
4092,kitzeln,verb,to tickle,B2,0.021,91.89,87.74
4093,Port,noun,haven (place of safety),B2,0.006,91.89,87.74
4094,vergeblich,adjective,"unavailing, in vain, futile, useless",B2,0.026,91.89,87.74
4095,Schmutz,noun,dirt,B2,0.02,91.89,87.74
4096,benennen,verb,"to name, give a name to",B2,0.009,91.89,87.75
4097,dürr,adjective,"dried up, desiccated",B2,0.032,91.89,87.75
4098,wiederherstellen,verb,to restore,B2,0.012,91.89,87.75
4099,kneifen,verb,"to pinch, to squeeze",B2,0.014,91.89,87.75
4100,kontrollieren,verb,to check,B2,0.001,91.9,87.75
4101,Einwohner,noun,"inhabitant (anyone who lives or dwells in something, especially a country, region, settlement)",B2,0.012,91.9,87.75
4102,steigern,verb,"to increase, to raise",B2,0.017,91.9,87.75
4103,nördlich,adjective,"north, northern",B2,0.007,91.9,87.75
4104,Mom,noun,mom,B2,0,91.92,87.75
4105,Bevölkerung,noun,population,B2,0.007,91.93,87.75
4106,glühen,verb,to glow,B2,0.037,91.93,87.76
4107,aneinander,adverb,together,B2,0.024,91.93,87.76
4108,Schere,noun,"a pair of scissors, shears",B2,0.01,91.93,87.76
4109,herb,adjective,"slightly bitter or sharp to the taste, often in a pleasant way; tart (but not in the sense of “sour”)",B2,0.025,91.93,87.76
4110,Ehrgeiz,noun,ambition,B2,0.02,91.93,87.76
4111,Verlauf,noun,"course (of a border, etc.)",B2,0.023,91.93,87.77
4112,Peitsche,noun,whip,B2,0.024,91.93,87.77
4113,Verachtung,noun,"contempt, disdain",B2,0.051,91.93,87.77
4114,Anhänger,noun,"follower, fan; trailer; pendant",B2,0.011,91.93,87.77
4115,Herausforderung,noun,"challenge, that which encourages someone to dare more",B2,0.003,91.93,87.77
4116,Widerspruch,noun,"objection, protest",B2,0.03,91.93,87.77
4117,Krüppel,noun,cripple,B2,0.017,91.93,87.78
4118,Trieb,noun,sprout,B2,0.043,91.93,87.78
4119,Base,noun,A female cousin.,B2,0.03,91.93,87.78
4120,Resultat,noun,result (that which results),B2,0.01,91.93,87.78
4121,Pest,noun,"bubonic plague, the plague",B2,0.014,91.94,87.78
4122,typisch,adjective,typical,B2,0.002,91.94,87.78
4123,Tänzer,noun,dancer,B2,0.012,91.94,87.79
4124,Schwiegersohn,noun,son-in-law,B2,0.022,91.94,87.79
4125,Buße,noun,penance,B2,0.027,91.94,87.79
4126,Tänzerin,noun,female dancer,B2,0.01,91.94,87.79
4127,verirrt,adjective,"lost, stray",B2,0.014,91.94,87.79
4128,Vorstand,noun,"board, board of directors, (of a church) council, (of a party) executive, (of an organization) committee",B2,0.008,91.94,87.79
4129,Zwang,noun,"compulsion, obligation, duress",B2,0.022,91.94,87.79
4130,Köder,noun,bait,B2,0.004,91.94,87.79
4131,Waise,noun,female orphan,B2,0.012,91.94,87.8
4132,Zeremonie,noun,ceremony,B2,0.007,91.95,87.8
4133,blitzen,verb,to lighten,B2,0.068,91.95,87.8
4134,vergrößern,verb,"to enlarge, to amplify, to increase",B2,0.011,91.95,87.8
4135,pflücken,verb,"to pick (fruit, flowers, cotton, etc.)",B2,0.017,91.95,87.8
4136,sausen,verb,to rush,B2,0.03,91.95,87.81
4137,weihen,verb,to dedicate to a cause or purpose,B2,0.025,91.95,87.81
4138,at,noun,"at, at-sign",B2,0.013,91.95,87.81
4139,Retter,noun,rescuer,B2,0.008,91.95,87.81
4140,Krach,noun,crash,B2,0.011,91.95,87.81
4141,hinrichten,verb,"to execute, to put to death",B2,0.008,91.95,87.81
4142,Annahme,noun,"presupposition, assumption, hypothesis",B2,0.014,91.95,87.81
4143,Inspektor,noun,inspector,B2,0.002,91.96,87.81
4144,einführen,verb,"to introduce, to begin (a new law, custom, style, etc.)",B2,0.014,91.96,87.81
4145,gefällig,adjective,"pleasing, pleasant",B2,0.021,91.96,87.82
4146,Börse,noun,"stock market, stock exchange, bourse",B2,0.023,91.96,87.82
4147,Schönes,noun,something beautiful,B2,0.015,91.96,87.82
4148,Wall,noun,"rampart, parapet, earthwork",B2,0.017,91.96,87.82
4149,Are,noun,synonym of Ar,B2,0.007,91.96,87.82
4150,Heiligkeit,noun,"holiness, holyness",B2,0.014,91.96,87.82
4151,operieren,verb,to operate (perform operation),B2,0.002,91.96,87.82
4152,Nuss,noun,nut,B2,0.006,91.96,87.82
4153,Statue,noun,statue,B2,0.005,91.96,87.82
4154,verzerrt,adjective,"distorted, contorted, warped",B2,0.024,91.96,87.82
4155,verspüren,verb,"to feel, sense",B2,0.018,91.97,87.83
4156,Schimmer,noun,"gleam, glimmer, flicker",B2,0.019,91.97,87.83
4157,bestreiten,verb,to deny (assert to be false),B2,0.012,91.97,87.83
4158,dahinten,adverb,back there,B2,0.015,91.97,87.83
4159,Basis,noun,"basis (foundation, principle)",B2,0.003,91.97,87.83
4160,Acker,noun,"field (wide, open space used to grow crops)",B2,0.041,91.97,87.83
4161,erben,verb,to inherit (as a bequest or by genetics),B2,0.009,91.97,87.83
4162,Pflege,noun,care,B2,0.023,91.97,87.84
4163,ernennen,verb,"to appoint, to name, to pronounce",B2,0.007,91.97,87.84
4164,Bissen,noun,morsel; mouthful; a bite of food,B2,0.027,91.97,87.84
4165,hastig,adjective,hasty,B2,0.068,91.97,87.84
4166,Gleis,noun,railway (track on which trains run),B2,0.014,91.97,87.85
4167,Verteidiger,noun,"defender (someone who defends something, e.g. a soldier)",B2,0.013,91.97,87.85
4168,umlegen,verb,"to tilt, to lay flat",B2,0.002,91.98,87.85
4169,Zwecke,noun,thumbtack,B2,0.018,91.98,87.85
4170,orange,adjective,orange,B2,0.006,91.98,87.85
4171,Patientin,noun,patient (female),B2,0.004,91.98,87.85
4172,dreckig,adjective,dirty,B2,0.001,91.98,87.85
4173,fünfzehn,number,fifteen,B2,0.019,91.98,87.85
4174,Terrasse,noun,"terrace (raised, flat-topped bank of earth with sloping sides)",B2,0.023,91.98,87.85
4175,schlüpfen,verb,to slip (move quickly),B2,0.021,91.98,87.85
4176,unhöflich,adjective,rude,B2,0.005,91.99,87.85
4177,ungut,adjective,"not good, not quite right, uneasy, unpleasant, bad",B2,0.006,91.99,87.86
4178,Fackel,noun,torch,B2,0.019,91.99,87.86
4179,Ursprung,noun,origin,B2,0.016,91.99,87.86
4180,unwichtig,adjective,unimportant,B2,0.003,91.99,87.86
4181,Maid,noun,"girl, maiden, virgin",B2,0.059,91.99,87.86
4182,Futter,noun,"fodder, food (for animals)",B2,0.008,91.99,87.86
4183,Tritt,noun,step,B2,0.028,91.99,87.87
4184,meinerseits,adverb,for my part; on my part; with respect to me,B2,0.015,91.99,87.87
4185,weswegen,adverb,"why, for what reason",B2,0.003,91.99,87.87
4186,vorziehen,verb,to pull to the front,B2,0.013,91.99,87.87
4187,Roller,noun,"anything that rolls, roller",B2,0.021,91.99,87.87
4188,Trank,noun,"a drink, generally mixed of several ingredients, and often for medical or magical effect; a potion",B2,0.029,92,87.87
4189,vorgenommen,adjective,"undertaken, performed",B2,0.023,92,87.88
4190,hinstellen,verb,to put down,B2,0.017,92,87.88
4191,neunte,adjective,ninth,B2,0.023,92,87.88
4192,formen,verb,"to form, to shape (to give something a shape)",B2,0.017,92,87.88
4193,übersetzen,verb,"to translate, to interpret",B2,0.006,92,87.88
4194,Tinte,noun,ink,B2,0.013,92,87.88
4195,vereinbaren,verb,to agree upon,B2,0.003,92,87.88
4196,Manager,noun,"manager (see usage notes below) (male or of unspecified sex, sometimes female)",B2,0.002,92,87.88
4197,erstatten,verb,to pay back [with accusative ‘something’ and dative ‘to someone’],B2,0.007,92,87.88
4198,krass,adjective,"stark, extreme",B2,0.003,92,87.88
4199,verbeugen,verb,to bow,B2,0.034,92.01,87.89
4200,besinnen,verb,to reflect (on); to think (about); to contemplate,B2,0.098,92.01,87.89
4201,vorbeigehen,verb,"to go past, to go by",B2,0.021,92.01,87.9
4202,Austausch,noun,"exchange, replacement",B2,0.004,92.01,87.9
4203,Einwand,noun,objection (statement expressing opposition),B2,0.015,92.01,87.9
4204,wimmeln,verb,to move about in a confused manner and in large numbers,B2,0.014,92.01,87.9
4205,unbedeutend,adjective,"insignificant, trifling",B2,0.017,92.01,87.9
4206,hinziehen,verb,to move,B2,0.014,92.01,87.9
4207,übertreffen,verb,"to exceed, to surpass, to outdo",B2,0.011,92.01,87.9
4208,zueinander,adverb,together,B2,0.009,92.01,87.9
4209,Grundlage,noun,foundation,B2,0.011,92.01,87.9
4210,zahlreich,adjective,numerous,B2,0.017,92.01,87.9
4211,Flotte,noun,fleet,B2,0.01,92.01,87.9
4212,Schauspiel,noun,"play (theatrical performance), drama",B2,0.023,92.01,87.91
4213,anstrengend,adjective,strenuous (requiring great exertion),B2,0.015,92.02,87.91
4214,erklingen,verb,to sound (to produce a sound),B2,0.028,92.02,87.91
4215,wegkommen,verb,to get away (to move from a spot),B2,0.006,92.02,87.91
4216,Lanze,noun,"lance, spear (weapon used mainly for thrusting)",B2,0.018,92.02,87.91
4217,Schal,noun,scarf,B2,0.01,92.02,87.91
4218,erwägen,verb,to consider,B2,0.019,92.02,87.91
4219,Zwischenzeit,noun,"meantime, interim (period), intervening period, (First, Second, and Third) Intermediate Period (of Ancient Egypt)",B2,0.005,92.02,87.92
4220,zugehen,verb,to shut,B2,0.031,92.02,87.92
4221,Dämmerung,noun,"twilight at the beginning or end of a day, dawn and dusk",B2,0.047,92.02,87.92
4222,protestieren,verb,to protest (to make a strong objection),B2,0.016,92.02,87.92
4223,Bleistift,noun,pencil (writing utensil with a graphite shaft),B2,0.023,92.02,87.92
4224,Zeugin,noun,witness (female),B2,0.007,92.02,87.92
4225,Flüchtling,noun,refugee,B2,0.009,92.02,87.93
4226,Aufruhr,noun,uproar,B2,0.018,92.02,87.93
4227,mager,adjective,"lean, without fat (e.g. of meat or dairy)",B2,0.041,92.02,87.93
4228,Siegel,noun,seal (official pattern),B2,0.012,92.03,87.93
4229,grauenvoll,adverb,"cruelly, horribly, ghastly",B2,0.015,92.03,87.93
4230,bislang,adverb,"so far, hitherto, until now",B2,0.016,92.03,87.93
4231,Februar,noun,February,B2,0.009,92.03,87.93
4232,Begierde,noun,"desire, craving",B2,0.037,92.03,87.94
4233,abgelaufen,adjective,"expired, lapsed, out of date",B2,0.01,92.03,87.94
4234,weben,verb,to weave,B2,0.023,92.03,87.94
4235,undankbar,adjective,ungrateful,B2,0.013,92.03,87.94
4236,Kahn,noun,"a small flat-bottomed boat such as a punt, used on inland waters",B2,0.032,92.03,87.94
4237,Ehefrau,noun,"married woman, wife",B2,0.002,92.03,87.94
4238,Enkelin,noun,granddaughter,B2,0.012,92.03,87.94
4239,berechtigt,adjective,"entitled, eligible",B2,0.021,92.03,87.95
4240,simpel,adjective,"simple, plain (not extravargant)",B2,0.007,92.03,87.95
4241,Ladung,noun,"cargo, freight",B2,0.003,92.04,87.95
4242,Aufführung,noun,performance,B2,0.018,92.04,87.95
4243,zugrunde,adverb,to destruction,B2,0.025,92.04,87.95
4244,Petrus,noun,large key,B2,0.033,92.04,87.95
4245,empor,adverb,"up, upward",B2,0.122,92.04,87.96
4246,Rübe,noun,a cover term for a variety of root vegetables including (beetroot),B2,0.01,92.04,87.96
4247,verglichen,adjective,"compared, likened",B2,0.012,92.04,87.96
4248,bewerben,verb,to apply (submit oneself as a candidate),B2,0.006,92.04,87.97
4249,Knoten,noun,knot (looping),B2,0.009,92.04,87.97
4250,hintereinander,adverb,consecutively,B2,0.025,92.04,87.97
4251,quietschen,verb,to squeak,B2,0.003,92.04,87.97
4252,schwanken,verb,to fluctuate; to vary; to waver,B2,0.053,92.04,87.97
4253,herausstellen,verb,to put something outside (in direction towards the speaker),B2,0.007,92.04,87.97
4254,Zentrum,noun,"center, centre",B2,0.004,92.04,87.97
4255,japanisch,adjective,"Japanese (of or relating to Japan, the Japanese people, or the Japanese language)",B2,0.004,92.05,87.97
4256,taufen,verb,to baptize,B2,0.018,92.05,87.97
4257,Grille,noun,cricket (insect of the family Gryllidae),B2,0.01,92.05,87.98
4258,Page,noun,"page boy, page (male or of unspecified gender)",B2,0.017,92.05,87.98
4259,Hirte,noun,"herdsman, herder, shepherd, stockman, pastoralist",B2,0.04,92.05,87.98
4260,Entlassung,noun,release,B2,0.009,92.05,87.98
4261,Fessel,noun,"fetter, shackle",B2,0.016,92.05,87.98
4262,arabisch,adjective,"Arabian, Arabic, Arab (of or pertaining to Arabs or Arab culture, etc.)",B2,0.008,92.05,87.98
4263,Eifer,noun,"zeal, eagerness, alacrity",B2,0.057,92.05,87.99
4264,violett,adjective,violet; purple; lilac (color/colour),B2,0.006,92.05,87.99
4265,Zerstörung,noun,"destruction, demolition",B2,0.005,92.05,87.99
4266,Ausrede,noun,excuse,B2,0.005,92.06,87.99
4267,schwärmen,verb,to swarm; to fly in swarms or flocks,B2,0.026,92.06,87.99
4268,Mine,noun,a mine,B2,0.003,92.06,87.99
4269,erhöht,adjective,"increased, elevated, raised, heightened, enhanced",B2,0.015,92.06,87.99
4270,Pulver,noun,powder (in most of its senses),B2,0.015,92.06,87.99
4271,Akzent,noun,accent (modulation of the voice),B2,0.004,92.06,87.99
4272,Waage,noun,scales (weighing machine),B2,0.011,92.06,88
4273,hinweisen,verb,to indicate,B2,0.006,92.06,88
4274,erstechen,verb,to stab to death,B2,0.006,92.06,88
4275,Entführung,noun,"abduction, kidnapping",B2,0.005,92.06,88
4276,ausdrücklich,adverb,expressly,B2,0.025,92.06,88
4277,niedergeschlagen,adjective,"downhearted, low-spirited",B2,0.019,92.06,88
4278,dreifach,adjective,triple (made up of three matching or complementary elements),B2,0.014,92.07,88
4279,Ehrlichkeit,noun,honesty,B2,0.005,92.07,88
4280,insbesondere,adverb,"in particular, particularly",B2,0.017,92.07,88
4281,Januar,noun,January,B2,0.007,92.07,88
4282,überholen,verb,"to overtake; to pass (e.g. a vehicle, a runner)",B2,0.014,92.07,88
4283,Käfer,noun,beetle,B2,0.011,92.07,88.01
4284,Trümmer,noun,"ruins, debris, wreckage, remains, fragments",B2,0.018,92.07,88.01
4285,zutrauen,verb,to think [with dative ‘someone’] capable,B2,0.033,92.07,88.01
4286,Anschein,noun,"appearance, semblance, impression",B2,0.023,92.07,88.01
4287,Handwerk,noun,"labour, especially of a manual type",B2,0.022,92.07,88.01
4288,Trinkgeld,noun,"tip (small amount of money given to service providers, such as waiters, hairdressers, taxi drivers etc.)",B2,0.006,92.07,88.01
4289,spalten,verb,to split (something); to cleave; to chop,B2,0.014,92.07,88.01
4290,tönen,verb,to give a loud and far-reaching sound,B2,0.063,92.07,88.02
4291,erzeugen,verb,to produce,B2,0.01,92.07,88.02
4292,schütten,verb,to pour (of both liquids and solids),B2,0.016,92.07,88.02
4293,einmischen,verb,"to interfere, to intervene",B2,0.003,92.08,88.02
4294,fluchen,verb,"to swear, to curse",B2,0.017,92.08,88.02
4295,Empfindung,noun,sensation,B2,0.07,92.08,88.03
4296,Gelände,noun,"area, terrain",B2,0.011,92.08,88.03
4297,hingeben,verb,to hand over (away from speaker),B2,0.036,92.08,88.03
4298,Wiege,noun,cradle,B2,0.021,92.08,88.04
4299,zusammenhalten,verb,"to hold together, to keep together",B2,0.01,92.08,88.04
4300,rutschen,verb,"to slip, to slide",B2,0.005,92.08,88.04
4301,Aufsatz,noun,essay,B2,0.015,92.08,88.04
4302,verfügen,verb,"to decree, to order",B2,0.012,92.08,88.04
4303,Schlamm,noun,mud,B2,0.012,92.08,88.04
4304,Eitelkeit,noun,vanity,B2,0.038,92.08,88.04
4305,Kapital,noun,capital,B2,0.02,92.08,88.05
4306,Heimweg,noun,way home,B2,0.015,92.08,88.05
4307,Zärtlichkeit,noun,tenderness,B2,0.041,92.08,88.05
4308,geschätzt,adjective,"appreciated, treasured, valued",B2,0.008,92.08,88.05
4309,Damm,noun,embankment,B2,0.015,92.08,88.05
4310,plagen,verb,to plague,B2,0.018,92.09,88.05
4311,fix,adjective,"fixed (costs, salary)",B2,0.012,92.09,88.05
4312,niederlassen,verb,"to settle, to relocate",B2,0.032,92.09,88.06
4313,beleben,verb,to liven up,B2,0.048,92.09,88.06
4314,Schilling,noun,schilling (Austrian pre-Euro currency),B2,0.015,92.09,88.06
4315,kriminell,adjective,criminal,B2,0.001,92.09,88.06
4316,Fußboden,noun,floor,B2,0.021,92.09,88.06
4317,polnisch,adjective,Polish (of Poland or its language),B2,0.014,92.09,88.06
4318,stumpf,adjective,"dull, blunt",B2,0.02,92.09,88.07
4319,Köchin,noun,"cook, a cooker (female)",B2,0.014,92.09,88.07
4320,Zeitlang,noun,while,B2,0.044,92.09,88.07
4321,überzeugend,adjective,convincing,B2,0.011,92.09,88.07
4322,Pflaster,noun,"pavement, cobbles (covering of paths or roadways made of blocks of stone or similar material)",B2,0.021,92.09,88.07
4323,Diskussion,noun,"discussion, debate",B2,0.004,92.1,88.07
4324,unverzüglich,adjective,"immediate, instantaneous",B2,0.012,92.1,88.07
4325,wärmen,verb,to warm,B2,0.016,92.1,88.08
4326,einschüchtern,verb,to intimidate,B2,0.012,92.1,88.08
4327,Hauptquartier,noun,headquarters,B2,0.005,92.1,88.08
4328,andauern,verb,"continue, go on, last",B2,0.004,92.1,88.08
4329,vorführen,verb,"to show, demonstrate",B2,0.013,92.1,88.08
4330,eventuell,adverb,"perhaps, possibly, potentially",B2,0.004,92.1,88.08
4331,Eiche,noun,"An oak tree, an oak, Quercus; the common tree",B2,0.025,92.1,88.08
4332,diskret,adjective,discreet,B2,0.01,92.1,88.08
4333,selbstständig,adjective,independent,B2,0.022,92.1,88.08
4334,augenblicklich,adverb,immediately,B2,0.049,92.1,88.09
4335,Bewunderung,noun,admiration,B2,0.032,92.1,88.09
4336,buchen,verb,to book,B2,0.006,92.1,88.09
4337,Rabe,noun,raven,B2,0.023,92.11,88.09
4338,erfreulich,adjective,"pleasant, pleasing",B2,0.029,92.11,88.09
4339,unwiderstehlich,adjective,irresistible,B2,0.032,92.11,88.1
4340,Philosophie,noun,philosophy (study of thought),B2,0.01,92.11,88.1
4341,schmerzlich,adjective,"painful, cruel",B2,0.048,92.11,88.1
4342,schwedisch,adjective,Swedish,B2,0.009,92.11,88.1
4343,bleich,adjective,"pale, pallid",B2,0.094,92.11,88.11
4344,Gabel,noun,fork,B2,0.016,92.11,88.11
4345,unterschiedlich,adverb,"differently, in varying ways",B2,0.007,92.11,88.11
4346,Vorbild,noun,model; exemplar (praiseworthy example),B2,0.007,92.11,88.11
4347,gesellschaftlich,adjective,social (of or pertaining to society),B2,0.024,92.11,88.12
4348,ernten,verb,"to harvest, to reap",B2,0.013,92.11,88.12
4349,stürmisch,adjective,stormy,B2,0.026,92.11,88.12
4350,Gunst,noun,favor,B2,0.026,92.11,88.12
4351,somit,adverb,"therefore, hence, thus",B2,0.008,92.11,88.12
4352,beisammen,adverb,together,B2,0.053,92.11,88.13
4353,Reh,noun,"roe deer (small deer species, Capreolus capreolus)",B2,0.021,92.11,88.13
4354,Lieferung,noun,"delivery, shipment",B2,0.006,92.12,88.13
4355,anpassen,verb,"to adapt, to adjust",B2,0.006,92.12,88.13
4356,auftragen,verb,to assign a task to someone,B2,0.016,92.12,88.13
4357,entnehmen,verb,"to take out, to remove (from a container or receptacle, into one's possession)",B2,0.018,92.12,88.13
4358,höllisch,adverb,"like hell, damn",B2,0.009,92.12,88.13
4359,Bündel,noun,bundle,B2,0.03,92.12,88.13
4360,Ex,noun,ex (male former romantic partner),B2,0.002,92.12,88.13
4361,überein,adverb,"equal, matching",B2,0.009,92.12,88.13
4362,verzehren,verb,to consume,B2,0.033,92.12,88.14
4363,Fee,noun,fairy,B2,0.007,92.12,88.14
4364,Aufsicht,noun,"supervision, oversight",B2,0.013,92.12,88.14
4365,katholisch,adjective,catholic,B2,0.007,92.12,88.14
4366,ausgewählt,adjective,"chosen, selected",B2,0.004,92.13,88.14
4367,Feierabend,noun,"Quitting time, hometime; the workday's end and the evening following it, used for relaxation or leisure.",B2,0.007,92.13,88.14
4368,Feuerwerk,noun,fireworks,B2,0.01,92.13,88.14
4369,Matrose,noun,seaman; sailor (of low rank) (male or of unspecified gender),B2,0.012,92.13,88.14
4370,schimpfen,verb,"to tell off, to scold, to yell at",B2,0.015,92.13,88.14
4371,gebühren,verb,"to be due, to be owed, to rightfully belong",B2,0.015,92.13,88.14
4372,beitragen,verb,"to contribute to (to give something, that is or becomes part of a larger whole)",B2,0.011,92.13,88.15
4373,Exemplar,noun,"exemplar; specimen; copy (e.g. of a book) (an individual from a set of like things, animals, etc.)",B2,0.009,92.13,88.15
4374,kahl,adjective,"bald, hairless",B2,0.031,92.13,88.15
4375,leck,adjective,leaky,B2,0.006,92.13,88.15
4376,veröffentlicht,adjective,published,B2,0.005,92.13,88.15
4377,hänseln,verb,to tease,B2,0.025,92.13,88.15
4378,einlegen,verb,to insert,B2,0.009,92.14,88.15
4379,meckern,verb,to bleat (of goats),B2,0.009,92.14,88.15
4380,clever,adjective,clever,B2,0.002,92.14,88.15
4381,irgendwohin,adverb,"to some place, somewhere",B2,0.005,92.14,88.15
4382,Argument,noun,"proof, reason, point",B2,0.005,92.14,88.15
4383,gegründet,adjective,"founded, established",B2,0.01,92.14,88.15
4384,tausendmal,adverb,a thousand times,B2,0.029,92.14,88.16
4385,eitel,adjective,"vain (overly proud of oneself, especially one’s outer appearance)",B2,0.058,92.14,88.16
4386,engagiert,adjective,"committed, dedicated",B2,0.004,92.14,88.16
4387,Temperatur,noun,temperature,B2,0.004,92.14,88.16
4388,vermehren,verb,"to increase, multiply, augment",B2,0.026,92.14,88.16
4389,bereden,verb,"to discuss, to talk over",B2,0.009,92.15,88.16
4390,Herrlichkeit,noun,"glory, splendour",B2,0.032,92.15,88.17
4391,bar,adjective,bare,B2,0.008,92.15,88.17
4392,ausgelassen,adjective,exuberant,B2,0.018,92.15,88.17
4393,vierzig,number,forty,B2,0.033,92.15,88.17
4394,immerzu,adverb,incessantly,B2,0.013,92.15,88.17
4395,Dietrich,noun,picklock,B2,0.053,92.15,88.18
4396,zehnte,number,tenth,B2,0.021,92.15,88.18
4397,Plane,noun,"tarpaulin, awning (large sheet of waterproof material used as covering)",B2,0.005,92.15,88.18
4398,beruhigend,adjective,"calming, soothing, reassuring, comforting",B2,0.011,92.15,88.18
4399,Laterne,noun,"lantern (casing for a light source, fashioned from transparent material)",B2,0.025,92.15,88.18
4400,hingegen,adverb,on the other hand,B2,0.02,92.15,88.19
4401,nachdenklich,adjective,"thoughtful, pensive",B2,0.037,92.15,88.19
4402,verschließen,verb,to close; to shut; to lock,B2,0.01,92.15,88.19
4403,Taufe,noun,baptism,B2,0.017,92.15,88.19
4404,absurd,adjective,absurd,B2,0.004,92.15,88.19
4405,Kämpfer,noun,fighter,B2,0.008,92.15,88.19
4406,Auskunft,noun,enquiry,B2,0.015,92.16,88.19
4407,begrenzen,verb,"to limit, to restrict, to confine",B2,0.008,92.16,88.19
4408,Ruck,noun,"jerk, jolt",B2,0.025,92.16,88.2
4409,Prior,noun,prior (high-ranking member of a monastery),B2,0.058,92.16,88.2
4410,Gehör,noun,hearing (sense or faculty of perceiving and interpreting sound),B2,0.011,92.16,88.2
4411,ober,preposition,"over, above",B2,0.01,92.16,88.2
4412,ferner,adverb,"furthermore, in addition",B2,0.042,92.16,88.21
4413,anrühren,verb,to touch,B2,0.007,92.16,88.21
4414,Berechnung,noun,calculation,B2,0.012,92.16,88.21
4415,Blei,noun,"lead (chemical element - Pb, atomic number 82)",B2,0.017,92.16,88.21
4416,zerschmettern,verb,to smash; to smash up,B2,0.03,92.16,88.21
4417,duften,verb,to smell very pleasantly,B2,0.024,92.16,88.21
4418,benachrichtigen,verb,to notify,B2,0.007,92.16,88.22
4419,Dezember,noun,December,B2,0.006,92.16,88.22
4420,Krampf,noun,cramp,B2,0.017,92.16,88.22
4421,Händler,noun,"trader, merchant",B2,0.012,92.16,88.22
4422,Modell,noun,A model of an object,B2,0.002,92.17,88.22
4423,schulen,verb,to school,B2,0.008,92.17,88.22
4424,davonlaufen,verb,to run away,B2,0.009,92.17,88.22
4425,Gesichtsausdruck,noun,facial expression,B2,0.017,92.17,88.22
4426,Ausländer,noun,"foreigner; foreign national, regardless of descent (male or of unspecified gender)",B2,0.005,92.17,88.22
4427,nächtlich,adjective,"nightly, per night",B2,0.021,92.17,88.22
4428,zudem,adverb,"moreover, furthermore",B2,0.012,92.17,88.22
4429,Schwiegermutter,noun,mother-in-law,B2,0.02,92.17,88.23
4430,Abwechslung,noun,alternation,B2,0.009,92.17,88.23
4431,Auflage,noun,"condition or conditions (for example, as placed on a parolee)",B2,0.038,92.17,88.23
4432,Applaus,noun,applause,B2,0.002,92.17,88.23
4433,Rückweg,noun,way back,B2,0.013,92.17,88.23
4434,Büchse,noun,"box, can",B2,0.023,92.17,88.23
4435,Gesindel,noun,"riffraff, lower class",B2,0.029,92.18,88.23
4436,häuslich,adjective,"domestic, homely, household",B2,0.018,92.18,88.24
4437,Schürze,noun,apron,B2,0.041,92.18,88.24
4438,Zirkus,noun,circus (arena in Antiquity),B2,0.003,92.18,88.24
4439,behandelt,adjective,treated,B2,0.012,92.18,88.24
4440,Auszeichnung,noun,distinction,B2,0.01,92.18,88.24
4441,Abfall,noun,"waste, garbage, rubbish, litter",B2,0.013,92.18,88.24
4442,Torte,noun,"a typically multilayered, often round cake with fillings of all kinds, often with icing and garnish",B2,0.004,92.18,88.24
4443,Putz,noun,"plaster, render applied to buildings (mixture for coating walls and ceilings)",B2,0.01,92.18,88.24
4444,Genick,noun,nape of the neck,B2,0.007,92.18,88.25
4445,beständig,adjective,"constant, stable, steady, abiding, enduring",B2,0.113,92.18,88.25
4446,Münster,noun,"minster (large, originally monastic church)",B2,0.018,92.18,88.26
4447,nerven,verb,"to annoy, to irritate",B2,0.003,92.18,88.26
4448,Großes,noun,something big,B2,0.012,92.19,88.26
4449,veranlasst,adjective,"initiated, arranged",B2,0.021,92.19,88.26
4450,Vampir,noun,vampire,B2,0.001,92.19,88.26
4451,Einsicht,noun,"insight (power of acute observation and deduction, that can see through to a solution)",B2,0.03,92.19,88.26
4452,siebte,adjective,seventh,B2,0.028,92.19,88.26
4453,Jüngling,noun,"youth, youngling, stripling, sapling",B2,0.103,92.19,88.27
4454,Zwischenfall,noun,incident,B2,0.01,92.19,88.27
4455,ausschließlich,adverb,exclusively,B2,0.013,92.19,88.27
4456,verdecken,verb,"to mask, to hide, to occlude, to obstruct",B2,0.015,92.19,88.27
4457,Obst,noun,fruit (food),B2,0.009,92.19,88.28
4458,Flöte,noun,flute,B2,0.011,92.19,88.28
4459,Klippe,noun,rock that is partly covered by (sea) water,B2,0.01,92.19,88.28
4460,Flüssigkeit,noun,liquid,B2,0.006,92.2,88.28
4461,Japaner,noun,Japanese (person),B2,0.002,92.2,88.28
4462,Mittwoch,noun,Wednesday,B2,0.003,92.2,88.28
4463,wahrhaft,adjective,"real, true, veracious",B2,0.029,92.2,88.28
4464,Pflanze,noun,plant,B2,0.011,92.2,88.28
4465,zumute,adverb,Mainly used in set phrases.,B2,0.029,92.2,88.28
4466,Sonnenaufgang,noun,sunrise,B2,0.007,92.2,88.28
4467,arg,adjective,bad,B2,0.053,92.2,88.29
4468,beauftragen,verb,"to mandate, to order from, to hire for a particular business",B2,0.004,92.2,88.29
4469,allerlei,adjective,all kinds of,B2,0.106,92.2,88.3
4470,steil,adjective,steep,B2,0.025,92.2,88.3
4471,hartnäckig,adjective,"obstinate, stubborn",B2,0.019,92.2,88.3
4472,Lilie,noun,"lily, lilium (flower)",B2,0.012,92.2,88.3
4473,Objekt,noun,"object (inanimate being, thing)",B2,0.002,92.21,88.3
4474,vorliegen,verb,to be available (of documentation/information),B2,0.015,92.21,88.3
4475,Mitgefühl,noun,compassion,B2,0.005,92.21,88.3
4476,Besorgnis,noun,"worry, concern, anxiety",B2,0.024,92.21,88.31
4477,nebeneinander,adverb,next to each other,B2,0.032,92.21,88.31
4478,hinhalten,verb,to hold out to/for (with the hand etc.),B2,0.016,92.21,88.31
4479,Traurigkeit,noun,"sadness, unhappiness",B2,0.016,92.21,88.31
4480,ermüden,verb,to tire; to fatigue,B2,0.034,92.21,88.31
4481,Rausch,noun,"high, flush, intoxication",B2,0.024,92.21,88.32
4482,einmalig,adjective,"non-recurring, one-time, oncely",B2,0.004,92.21,88.32
4483,aktiv,adjective,active,B2,0.002,92.21,88.32
4484,Vorzug,noun,"precedence, priority, preference",B2,0.029,92.21,88.32
4485,Milliarde,noun,billion (10⁹),B2,0.002,92.21,88.32
4486,Gewitter,noun,"thunderstorm, lightning storm",B2,0.015,92.21,88.32
4487,charmant,adjective,charming,B2,0.002,92.22,88.32
4488,Wildnis,noun,wilderness,B2,0.012,92.22,88.32
4489,Leber,noun,liver,B2,0.004,92.22,88.32
4490,Streik,noun,strike (work stoppage),B2,0.004,92.22,88.32
4491,Römer,noun,Roman,B2,0.005,92.22,88.32
4492,Salat,noun,"salad (mixed, usually cold dish)",B2,0.004,92.22,88.32
4493,Freundlichkeit,noun,"kindness, friendliness (the state of being kind)",B2,0.014,92.22,88.32
4494,dämlich,adjective,very stupid,B2,0.001,92.22,88.32
4495,hocken,verb,to squat; to crouch; to sit in a huddled position,B2,0.011,92.23,88.32
4496,Gewissheit,noun,certainty,B2,0.024,92.23,88.33
4497,Schoss,noun,shoot of a plant,B2,0.032,92.23,88.33
4498,erniedrigen,verb,"to abase (to lower so as to hurt feelings), to dishonor, to humble",B2,0.011,92.23,88.33
4499,auslachen,verb,to laugh at,B2,0.015,92.23,88.33
4500,huren,verb,to whore,B2,0.005,92.23,88.33
4501,bass,adverb,"greatly, totally, immensely; used with erstaunt (“astonished”) or, less often",B2,0.009,92.23,88.33
4502,ausstrecken,verb,"to stretch, to reach out",B2,0.039,92.23,88.33
4503,vernachlässigen,verb,to neglect,B2,0.016,92.23,88.34
4504,Kutscher,noun,coachman (male or of unspecified gender),B2,0.022,92.23,88.34
4505,Becken,noun,"basin, wide bowl",B2,0.009,92.23,88.34
4506,vorgestern,adverb,"ereyesterday, the day before yesterday",B2,0.012,92.23,88.34
4507,erlöschen,verb,"to extinguish; to quench, to douse",B2,0.029,92.23,88.34
4508,Augenbraue,noun,eyebrow,B2,0.017,92.23,88.34
4509,erbauen,verb,"to build, erect",B2,0.018,92.23,88.35
4510,Riegel,noun,bolt; latch,B2,0.022,92.23,88.35
4511,gedeihen,verb,to thrive; to flourish; to prosper,B2,0.034,92.23,88.35
4512,wiehern,verb,"to neigh, to whinny, to nicker (sound of a horse)",B2,0.008,92.23,88.35
4513,Berliner,noun,Berliner (male or of unspecified sex) (a native or inhabitant of Berlin),B2,0.034,92.23,88.35
4514,ungestört,adjective,undisturbed,B2,0.02,92.23,88.35
4515,Zahnarzt,noun,dentist,B2,0.005,92.24,88.35
4516,anfahren,verb,to start moving (of a vehicle; only of the very initial movement),B2,0.01,92.24,88.36
4517,Konflikt,noun,conflict,B2,0.006,92.24,88.36
4518,Befreiung,noun,liberation,B2,0.011,92.24,88.36
4519,veranlassen,verb,"to cause, to prompt, to arrange for, to bring about",B2,0.019,92.24,88.36
4520,Kranz,noun,"wreath, garland",B2,0.058,92.24,88.36
4521,Gebieter,noun,"arbiter, commander, ruler, master, lord",B2,0.015,92.24,88.36
4522,begabt,adjective,"talented, gifted",B2,0.01,92.24,88.37
4523,abwesend,adjective,absent (being away from a place),B2,0.027,92.24,88.37
4524,Geschick,noun,"destiny, fate",B2,0.036,92.24,88.37
4525,Genugtuung,noun,satisfaction,B2,0.04,92.24,88.37
4526,Magazin,noun,magazine (periodical),B2,0.003,92.24,88.37
4527,List,noun,"cunning, craft",B2,0.006,92.24,88.38
4528,Araber,noun,"Arab, person from Arabia",B2,0.007,92.24,88.38
4529,Erleichterung,noun,relief,B2,0.014,92.24,88.38
4530,Mythos,noun,"myth, mythos (narrative of importance to a particular group or culture)",B2,0.009,92.24,88.38
4531,Illusion,noun,illusion,B2,0.004,92.25,88.38
4532,Knöchel,noun,ankle,B2,0.007,92.25,88.38
4533,rechtlich,adjective,legal,B2,0.012,92.25,88.38
4534,hiervon,adverb,"hence, from this",B2,0.009,92.25,88.38
4535,unterirdisch,adjective,"underground, subterranean",B2,0.017,92.25,88.38
4536,anmachen,verb,"to switch on, to turn on (a lamp, a stove, an electronic device, etc.)",B2,0.003,92.25,88.38
4537,Mi,noun,alternative form of Mi.: abbreviation of Mittwoch (“Wednesday”),B2,0.008,92.25,88.38
4538,äh,interjection,"an exclamation of disgust; yuck, ew, ugh",B2,0.027,92.27,88.38
4539,Kognak,noun,cognac,B2,0.013,92.27,88.38
4540,Linde,noun,"linden, lime tree (Tilia gen. et spp.)",B2,0.042,92.27,88.39
4541,Symptom,noun,"symptom, sign",B2,0.002,92.27,88.39
4542,normalerweise,adverb,normally,B2,0.001,92.27,88.39
4543,bewohnen,verb,"to inhabit, to occupy",B2,0.027,92.27,88.39
4544,mechanisch,adjective,mechanical,B2,0.019,92.28,88.39
4545,Frische,noun,freshness,B2,0.013,92.28,88.39
4546,Gebirge,noun,"a group of mountains, mountain range, mountains",B2,0.066,92.28,88.4
4547,Trab,noun,trot (horse gait),B2,0.025,92.28,88.4
4548,erhören,verb,to grant,B2,0.013,92.28,88.4
4549,Schimmel,noun,mold,B2,0.044,92.28,88.4
4550,liegend,adjective,"prone, lying, recumbent",B2,0.031,92.28,88.41
4551,lüften,verb,"to air, ventilate",B2,0.02,92.28,88.41
4552,insgesamt,adverb,"overall, altogether, in total, all in all, by and large, on the whole",B2,0.007,92.28,88.41
4553,untreu,adjective,unfaithful,B2,0.013,92.28,88.41
4554,Häuptling,noun,chief (leader or co-leader of a tribe),B2,0.004,92.28,88.41
4555,Helfer,noun,"helper, aide, assistant, auxiliary, hand (person)",B2,0.004,92.28,88.41
4556,einleiten,verb,"to commence, initiate, trigger, instigate, start",B2,0.009,92.28,88.41
4557,Galgen,noun,gallows,B2,0.017,92.28,88.41
4558,führend,adjective,"leading, foremost",B2,0.014,92.28,88.42
4559,gegeneinander,adverb,against each other / one another,B2,0.016,92.28,88.42
4560,Staatsanwaltschaft,noun,public prosecutor's office,B2,0.007,92.28,88.42
4561,Viertelstunde,noun,quarter of an hour,B2,0.035,92.28,88.42
4562,vollziehen,verb,"to put into practice, to implement, accomplish, carry out",B2,0.021,92.28,88.42
4563,anstoßen,verb,to push something (especially to start an avalanche effect),B2,0.015,92.28,88.42
4564,vergießen,verb,"to shed (blood, sweat, tears)",B2,0.009,92.29,88.42
4565,Gier,noun,greed,B2,0.013,92.29,88.42
4566,vorlegen,verb,"to present, to submit",B2,0.014,92.29,88.43
4567,Produktion,noun,production,B2,0.006,92.29,88.43
4568,unzufrieden,adjective,"discontent, dissatisfied",B2,0.019,92.29,88.43
4569,trommeln,verb,"to drum, to beat a drum",B2,0.009,92.29,88.43
4570,verkleidet,adjective,disguised,B2,0.007,92.29,88.43
4571,rechtmäßig,adjective,rightful,B2,0.007,92.29,88.43
4572,Song,noun,a song of modern popular music,B2,0.001,92.29,88.43
4573,Esszimmer,noun,"dining room (room, in a home or hotel, where meals are eaten)",B2,0.027,92.29,88.43
4574,umziehen,verb,to move,B2,0.001,92.3,88.43
4575,Vorsprung,noun,"projection, prominence, protrusion",B2,0.009,92.3,88.43
4576,vierzehn,number,fourteen,B2,0.034,92.3,88.43
4577,Besen,noun,broom,B2,0.014,92.3,88.44
4578,unklar,adjective,unclear,B2,0.009,92.3,88.44
4579,Notwendigkeit,noun,necessity,B2,0.02,92.3,88.44
4580,zuwenden,verb,to turn,B2,0.051,92.3,88.44
4581,zunehmen,verb,to increase,B2,0.013,92.3,88.44
4582,Handgelenk,noun,wrist,B2,0.006,92.3,88.44
4583,Leser,noun,reader,B2,0.017,92.3,88.45
4584,unterstehen,verb,[with dative] to be subordinate to,B2,0.014,92.3,88.45
4585,Ochse,noun,ox (castrated bull; castrated male bovine animal),B2,0.018,92.3,88.45
4586,Mahl,noun,"meal, repast",B2,0.018,92.3,88.45
4587,bürgerlich,adjective,"civic, civil",B2,0.051,92.3,88.45
4588,besetzen,verb,to occupy,B2,0.009,92.3,88.45
4589,Sänger,noun,"singer (person who sings, often regularly or professionally)",B2,0.015,92.3,88.45
4590,strömen,verb,"to flow, stream, pour",B2,0.026,92.3,88.46
4591,schwindelig,adjective,dizzy (having a sensation of turning around),B2,0.006,92.31,88.46
4592,ey,interjection,"Used to call someone's attention, or as an intensifier when placed at the end.",B2,0.003,92.31,88.46
4593,krähen,verb,to crow,B2,0.012,92.31,88.46
4594,beschränken,verb,to limit; to restrict,B2,0.015,92.31,88.46
4595,verweisen,verb,to refer,B2,0.015,92.31,88.46
4596,Fürstin,noun,princess,B2,0.059,92.31,88.47
4597,Zuneigung,noun,"affection, attachment",B2,0.006,92.31,88.47
4598,Groll,noun,grudge,B2,0.018,92.31,88.47
4599,Bankrott,noun,bankruptcy,B2,0.017,92.31,88.47
4600,aufsehen,verb,to look up,B2,0.022,92.31,88.47
4601,Atemzug,noun,breath (a single act of breathing in and out),B2,0.014,92.31,88.47
4602,Glut,noun,great heat from (or as if from) something that glows,B2,0.043,92.31,88.48
4603,jucken,verb,to itch (feel itchy),B2,0.005,92.31,88.48
4604,ängstigen,verb,to alarm; to frighten,B2,0.035,92.31,88.48
4605,Teilnahme,noun,participation,B2,0.046,92.31,88.48
4606,Ehepaar,noun,married couple,B2,0.018,92.31,88.48
4607,ausstehen,verb,"to stand, to endure",B2,0.007,92.31,88.48
4608,Kröte,noun,toad,B2,0.009,92.31,88.49
4609,Muschel,noun,"bivalve; seashell (marine mollusk with a shell, or the shell itself)",B2,0.011,92.31,88.49
4610,Zeitschrift,noun,magazine (published in regular intervals),B2,0.005,92.32,88.49
4611,intim,adjective,intimate,B2,0.009,92.32,88.49
4612,Institut,noun,institute (independent research institution),B2,0.006,92.32,88.49
4613,Favorit,noun,favourite (person who enjoys special regard or favor; person who is preferred or trusted above all others),B2,0.01,92.32,88.49
4614,Begräbnis,noun,"funeral, burial",B2,0.009,92.32,88.49
4615,dröhnen,verb,"to boom; to thud; to roar (make a loud, dull sound; such as that of a military aircraft)",B2,0.017,92.32,88.49
4616,gewalttätig,adjective,violent,B2,0.004,92.32,88.49
4617,Unordnung,noun,disorder (absence of order),B2,0.018,92.32,88.49
4618,Kasino,noun,casino,B2,0.003,92.32,88.49
4619,Gauner,noun,"petty thief, crook, racketeer",B2,0.005,92.32,88.49
4620,jährlich,adverb,annually,B2,0.007,92.32,88.49
4621,bestehlen,verb,"to steal from, to rob",B2,0.007,92.32,88.49
4622,verdrehen,verb,"to twist, to turn, to wrest, to distort, to misrepresent",B2,0.008,92.32,88.5
4623,Arbeitgeber,noun,employer (male or of unspecified gender),B2,0.006,92.33,88.5
4624,hervorbringen,verb,"to yield, to spawn, to bear, to produce, to bring forth",B2,0.044,92.33,88.5
4625,unterwerfen,verb,"to subdue, to subordinate",B2,0.022,92.33,88.5
4626,Vorurteil,noun,prejudice (preconceived opinion),B2,0.012,92.33,88.5
4627,Harmonie,noun,harmony,B2,0.019,92.33,88.5
4628,herüber,adverb,over here (in direction towards the speaker),B2,0.044,92.33,88.51
4629,Zufriedenheit,noun,"contentment, satisfaction",B2,0.025,92.33,88.51
4630,bremsen,verb,"to brake, slow down, decelerate",B2,0.005,92.33,88.51
4631,bedrängen,verb,"to beset, to harass",B2,0.023,92.33,88.51
4632,ausfindig,adverb,only used in ausfindig machen,B2,0.009,92.33,88.51
4633,tagelang,adverb,for days,B2,0.013,92.33,88.51
4634,Grundsatz,noun,"principle, tenet",B2,0.023,92.33,88.51
4635,pissen,verb,to piss (urinate),B2,0.002,92.33,88.52
4636,Lehne,noun,"arm (of a chair), armrest",B2,0.021,92.33,88.52
4637,Schlucht,noun,"canyon, chasm, gorge, ravine",B2,0.014,92.33,88.52
4638,verjagen,verb,"to scare away, to chase away, to expel",B2,0.01,92.33,88.52
4639,Einbildung,noun,"illusion, imagination",B2,0.02,92.33,88.52
4640,dicht,adjective,"thick, tight, dense",B2,0.02,92.33,88.52
4641,Langeweile,noun,"boredom, ennui, tedium",B2,0.014,92.33,88.52
4642,verleugnen,verb,"to renege, repudiate",B2,0.017,92.33,88.53
4643,betrübt,adjective,saddened,B2,0.035,92.34,88.53
4644,ereignen,verb,"to occur, happen",B2,0.018,92.34,88.53
4645,Provinz,noun,province (administrative subdivision),B2,0.009,92.34,88.53
4646,Geschwätz,noun,"twaddle, nonsense",B2,0.017,92.34,88.53
4647,Hirsch,noun,deer,B2,0.012,92.34,88.53
4648,auffällig,adverb,strikingly,B2,0.012,92.34,88.53
4649,Makler,noun,"broker, agent, middleman, negotiator",B2,0.022,92.34,88.54
4650,Schülerin,noun,"schoolgirl, pupil, student (female)",B2,0.007,92.34,88.54
4651,Kamm,noun,comb,B2,0.018,92.34,88.54
4652,Läufer,noun,"runner, walker (someone who runs or walks)",B2,0.008,92.34,88.54
4653,Schwägerin,noun,sister-in-law,B2,0.015,92.34,88.54
4654,belegen,verb,to cover,B2,0.009,92.34,88.54
4655,sonnig,adjective,sunny,B2,0.02,92.34,88.54
4656,nachmittags,adverb,"in the afternoon, p.m.",B2,0.017,92.34,88.54
4657,Transport,noun,transport,B2,0.003,92.34,88.54
4658,Auseinandersetzung,noun,"altercation; controversy; argument, dispute, debate",B2,0.019,92.34,88.55
4659,unauffällig,adverb,inconspicuously,B2,0.007,92.34,88.55
4660,Seufzer,noun,sigh; an instance of sighing,B2,0.048,92.34,88.55
4661,ticken,verb,"to tick, to make a clicking noise",B2,0.002,92.35,88.55
4662,Tau,noun,dew,B2,0.019,92.35,88.55
4663,Klingel,noun,bell,B2,0.011,92.35,88.55
4664,sinnen,verb,"to think, to ponder, to cogitate",B2,0.073,92.35,88.56
4665,Spieß,noun,a pointed rod,B2,0.017,92.35,88.56
4666,Chirurg,noun,"surgeon (kind of doctor, male or of unspecified sex)",B2,0.004,92.35,88.56
4667,Erdbeere,noun,strawberry,B2,0.011,92.35,88.56
4668,Schöpfung,noun,creation,B2,0.019,92.35,88.56
4669,Wink,noun,"wave (a loose back-and-forth movement, as of the hands)",B2,0.027,92.35,88.57
4670,Sklavin,noun,female slave,B2,0.011,92.35,88.57
4671,behüten,verb,to protect,B2,0.025,92.35,88.57
4672,Krankenwagen,noun,"ambulance, ambulance car, ambulance van",B2,0.001,92.35,88.57
4673,Heu,noun,hay,B2,0.018,92.35,88.57
4674,Denkmal,noun,"monument, memorial",B2,0.026,92.35,88.57
4675,feurig,adjective,fiery,B2,0.044,92.35,88.58
4676,Liter,noun,"liter, litre",B2,0.006,92.35,88.58
4677,geneigt,adjective,inclined,B2,0.052,92.35,88.58
4678,rücksichtslos,adjective,inconsiderate (reckless),B2,0.014,92.35,88.58
4679,undeutlich,adjective,"indistinct; vague, hazy",B2,0.014,92.35,88.58
4680,zusammenbrechen,verb,"to break down, collapse",B2,0.006,92.36,88.58
4681,Schriftsteller,noun,"author, writer",B2,0.004,92.36,88.58
4682,willig,adjective,willing,B2,0.042,92.36,88.59
4683,untereinander,adverb,among ourselves / themselves,B2,0.029,92.36,88.59
4684,eklig,adjective,"disgusting, yucky, icky",B2,0.002,92.36,88.59
4685,beistehen,verb,to assist,B2,0.016,92.36,88.59
4686,Ministerium,noun,ministry,B2,0.007,92.36,88.59
4687,Zugriff,noun,access,B2,0.003,92.36,88.59
4688,Folter,noun,torture,B2,0.004,92.36,88.59
4689,Gebüsch,noun,"brush (vegetation, generally larger than grass but smaller than trees)",B2,0.036,92.36,88.59
4690,Bezirk,noun,"district, borough (formal administrative division)",B2,0.004,92.36,88.59
4691,Präsidentin,noun,"president (female); chairman, chairperson, chair (female), chairwoman",B2,0.009,92.36,88.59
4692,schnauben,verb,to snort; to pant (to breathe loudly),B2,0.018,92.36,88.6
4693,stottern,verb,to stutter,B2,0.012,92.37,88.6
4694,Beleg,noun,"piece of evidence, a supporting fact",B2,0.008,92.37,88.6
4695,Mischung,noun,"mix, mixture",B2,0.009,92.37,88.6
4696,Scheck,noun,"check, cheque",B2,0.001,92.37,88.6
4697,Seife,noun,soap (substance),B2,0.005,92.37,88.6
4698,Klarheit,noun,clarity,B2,0.004,92.37,88.6
4699,vergewaltigen,verb,to rape,B2,0.001,92.37,88.6
4700,Fähre,noun,ferry,B2,0.003,92.37,88.6
4701,massiv,adjective,"solid, not hollow",B2,0.006,92.38,88.6
4702,Kommissar,noun,commissioner,B2,0.002,92.38,88.6
4703,Kamel,noun,camel,B2,0.017,92.38,88.6
4704,Erdbeben,noun,earthquake,B2,0.006,92.38,88.6
4705,zufolge,preposition,according to,B2,0.004,92.38,88.6
4706,Kinderspiel,noun,children’s game,B2,0.006,92.38,88.6
4707,beängstigend,adjective,frightening,B2,0.007,92.38,88.6
4708,Eingeweide,noun,"guts, internal organs, entrails",B2,0.013,92.38,88.61
4709,ungewiss,adjective,uncertain,B2,0.027,92.38,88.61
4710,Wahrsager,noun,"fortuneteller, soothsayer, augur",B2,0.023,92.38,88.61
4711,Bescheidenheit,noun,modesty,B2,0.022,92.38,88.61
4712,Haft,noun,"arrest, custody, imprisonment (the state of being confined by order of a government or ruler)",B2,0.009,92.38,88.61
4713,durstig,adjective,thirsty,B2,0.01,92.38,88.61
4714,Schuft,noun,"scoundrel, villain",B2,0.011,92.38,88.61
4715,Kardinal,noun,cardinal (official in Catholic Church),B2,0.002,92.39,88.61
4716,entbehren,verb,"to do without, to dispense with",B2,0.034,92.39,88.62
4717,Saison,noun,season (a part of a year when something particular happens),B2,0.005,92.39,88.62
4718,auffliegen,verb,to fly up,B2,0.006,92.39,88.62
4719,Überlegung,noun,consideration (the process of considering),B2,0.012,92.39,88.62
4720,verabscheuen,verb,"to abhor, to detest, to loathe, to abominate",B2,0.014,92.39,88.62
4721,verbraucht,adjective,depleted,B2,0.014,92.39,88.62
4722,Konto,noun,account,B2,0.001,92.39,88.62
4723,hervorrufen,verb,"to arouse, to evoke, to induce, to cause, to bring about",B2,0.019,92.39,88.62
4724,abschlagen,verb,"to cut off, chop off",B2,0.015,92.39,88.62
4725,Wagner,noun,"cartwright, wainwright, wheelwright",B2,0.017,92.39,88.63
4726,kurieren,verb,to cure (return to health),B2,0.007,92.39,88.63
4727,rudern,verb,to row (propel over water using oars),B2,0.017,92.39,88.63
4728,geloben,verb,to vow (to make a vow),B2,0.018,92.39,88.63
4729,Kuppel,noun,dome (structural element resembling the hollow upper half of a sphere),B2,0.009,92.39,88.63
4730,hierhin,adverb,to here (to this place),B2,0.004,92.4,88.63
4731,Kaninchen,noun,rabbit,B2,0.005,92.4,88.63
4732,Kessel,noun,"a solid metal container or pot, often large, used to boil liquids: a kettle, cauldron, boiler, etc.",B2,0.02,92.4,88.63
4733,Schenk,noun,cupbearer,B2,0.01,92.4,88.63
4734,auspacken,verb,"to unbox, to unpack, to unwrap (a package, gift, etc.)",B2,0.006,92.4,88.63
4735,Freier,noun,"john, punter (client of a prostitute)",B2,0.014,92.4,88.63
4736,forschen,verb,to research,B2,0.014,92.4,88.64
4737,originell,adjective,"original (fresh, different)",B2,0.012,92.4,88.64
4738,Rhythmus,noun,"rhythm (variation of strong and weak emphasis over time, e.g. in music or speech)",B2,0.006,92.4,88.64
4739,Verstärkung,noun,reinforcement,B2,0.007,92.4,88.64
4740,hintergehen,verb,"to deceive, to betray, to cheat, to hoodwink, to backstab",B2,0.004,92.4,88.64
4741,abkommen,verb,to stray from (something),B2,0.006,92.4,88.64
4742,bösartig,adjective,malicious; vicious; malevolent,B2,0.007,92.4,88.64
4743,Kristall,noun,"crystal in the sense of mineral and its molecular structure (""array of atoms"")",B2,0.007,92.41,88.64
4744,Samen,noun,"seed, grain",B2,0.006,92.41,88.64
4745,aufspüren,verb,"to detect, trace, track down or sniff out",B2,0.002,92.41,88.64
4746,verantworten,verb,to take responsibility (for),B2,0.012,92.41,88.64
4747,Stroh,noun,straw,B2,0.024,92.41,88.64
4748,Tapete,noun,wallpaper (paper-like covering applied to interior walls),B2,0.018,92.41,88.65
4749,wund,adjective,"wounded, injured, sore",B2,0.014,92.41,88.65
4750,trüb,adjective,"turbid, not clear",B2,0.053,92.41,88.65
4751,blamieren,verb,to embarrass,B2,0.006,92.41,88.65
4752,Neugierde,noun,curiosity,B2,0.029,92.41,88.65
4753,Rechenschaft,noun,"account, accountability",B2,0.015,92.41,88.65
4754,Aktie,noun,"share, stock",B2,0.004,92.41,88.66
4755,befallen,verb,to affect,B2,0.022,92.41,88.66
4756,stiften,verb,"to found, to create (an organization or award, especially with a focus on financing)",B2,0.019,92.41,88.66
4757,Ingenieur,noun,engineer,B2,0.004,92.41,88.66
4758,geschwind,adjective,"quick, fast, swift",B2,0.103,92.41,88.67
4759,verspätet,adjective,"belated, late",B2,0.01,92.41,88.67
4760,Nachtisch,noun,"dessert, pudding (UK)",B2,0.007,92.42,88.67
4761,Zauberei,noun,"wizardry, witchcraft",B2,0.007,92.42,88.67
4762,Manuskript,noun,manuscript,B2,0.012,92.42,88.67
4763,abwehren,verb,"to fend off, to repel, to keep away",B2,0.017,92.42,88.67
4764,Gelehrter,noun,"scholar, savant, pundit, man of letters, academic (male or of unspecified gender)",B2,0.028,92.42,88.67
4765,verdeckt,adjective,"covert, undercover",B2,0.009,92.42,88.67
4766,rätselhaft,adjective,puzzling,B2,0.022,92.42,88.68
4767,züchten,verb,to breed,B2,0.009,92.42,88.68
4768,derart,adverb,"so, thus, in such a manner",B2,0.011,92.42,88.68
4769,Birne,noun,pear,B2,0.007,92.42,88.68
4770,Pracht,noun,"splendor, resplendence, magnificence, pomp",B2,0.033,92.42,88.68
4771,Hingabe,noun,devotion,B2,0.011,92.42,88.68
4772,Hasse,noun,synonym of Burenwurst,B2,0.004,92.42,88.68
4773,Predigt,noun,"sermon, preaching",B2,0.017,92.42,88.68
4774,behutsam,adjective,"gentle, cautious",B2,0.03,92.42,88.69
4775,verängstigt,adjective,"frightened, scared, anxious",B2,0.003,92.42,88.69
4776,Päckchen,noun,"packet, pack, package",B2,0.006,92.42,88.69
4777,vertuschen,verb,"to cover up, to keep secret",B2,0.005,92.43,88.69
4778,nirgendwo,adverb,nowhere (in no place),B2,0.001,92.43,88.69
4779,aufladen,verb,"to load onto, to load up, to charge",B2,0.007,92.43,88.69
4780,zusammenziehen,verb,"to shorten, to contract",B2,0.022,92.43,88.69
4781,zentral,adjective,central,B2,0.001,92.43,88.69
4782,verwundern,verb,"to amaze, to astonish, to astound",B2,0.082,92.43,88.7
4783,Einbruch,noun,"burglary, break-in",B2,0.002,92.43,88.7
4784,einigermaßen,adverb,somewhat,B2,0.032,92.43,88.7
4785,zurückholen,verb,"to retrieve, to get back",B2,0.002,92.44,88.7
4786,Sprichwort,noun,"saying, proverb, adage, maxim (phrase)",B2,0.008,92.44,88.7
4787,pochen,verb,"to thump, to throb",B2,0.041,92.44,88.7
4788,bemerkenswert,adjective,"remarkable, noteworthy",B2,0.004,92.44,88.7
4789,Stiefmutter,noun,stepmother,B2,0.015,92.44,88.7
4790,Frechheit,noun,"insolence, impudence, cheek",B2,0.012,92.44,88.7
4791,Unterbrechung,noun,interruption,B2,0.009,92.44,88.71
4792,Vorsatz,noun,"malice, intention, premeditation",B2,0.033,92.44,88.71
4793,leichtsinnig,adjective,"careless, reckless",B2,0.02,92.44,88.71
4794,einreden,verb,"to talk into (doing/believing something), convince, persuade",B2,0.009,92.44,88.71
4795,erreichbar,adjective,"reachable, achievable, attainable",B2,0.012,92.44,88.71
4796,höhlen,verb,to hollow out,B2,0.015,92.44,88.71
4797,Schlinge,noun,"loop, noose (rope or similar material fashioned into or forming a loop, typically small to mid-sized)",B2,0.014,92.44,88.71
4798,Schlachtfeld,noun,battlefield,B2,0.007,92.44,88.71
4799,Jahrzehnt,noun,decade,B2,0.004,92.44,88.71
4800,rings,adverb,around,B2,0.049,92.44,88.72
4801,Schreiber,noun,"writer, author, scribe, scrivener (male or of unspecified gender)",B2,0.014,92.44,88.72
4802,Disziplin,noun,discipline,B2,0.005,92.44,88.72
4803,Rast,noun,"rest, a pause, a halt; to stop a march, hike or journey for recreational purposes",B2,0.015,92.44,88.72
4804,anlügen,verb,"to lie to, to tell someone a lie, to tell someone lies",B2,0.001,92.45,88.72
4805,prahlen,verb,"to brag, to boast",B2,0.017,92.45,88.73
4806,Türke,noun,"a Turk (native or inhabitant of Turkey, person of Turkish descent)",B2,0.008,92.45,88.73
4807,entspringen,verb,"to arise, originate, or spring (to start to exist from a source)",B2,0.033,92.45,88.73
4808,künstlerisch,adjective,artistic,B2,0.014,92.45,88.73
4809,Öffnung,noun,opening,B2,0.01,92.45,88.73
4810,Badezimmer,noun,"bathroom (a room in a private dwelling where people wash themselves, containing a shower and/or bathtub)",B2,0.002,92.45,88.73
4811,Bucht,noun,bay; gulf; bight,B2,0.009,92.45,88.73
4812,Dollar,noun,dollar,B2,0,92.47,88.73
4813,Komiker,noun,comedian (male or of unspecified gender),B2,0.009,92.47,88.73
4814,loyal,adjective,loyal,B2,0.004,92.47,88.73
4815,Armband,noun,bracelet; bangle; armlet (piece of jewellery or decoration worn on the arm),B2,0.006,92.47,88.73
4816,gutmachen,verb,"to right (a wrong); to make up for (a mistake, a past harm)",B2,0.007,92.47,88.73
4817,ertappen,verb,to catch (someone in an act of wrongdoing),B2,0.017,92.47,88.73
4818,säubern,verb,"to clean, to cleanse",B2,0.005,92.47,88.74
4819,Frist,noun,"term, period (time limit), deadline",B2,0.016,92.47,88.74
4820,exakt,adjective,exact,B2,0.002,92.47,88.74
4821,flicken,verb,"to patch up, to mend",B2,0.018,92.47,88.74
4822,ersuchen,verb,to ask or beseech,B2,0.017,92.48,88.74
4823,stattlich,adjective,"stately, imposant",B2,0.028,92.48,88.74
4824,holländisch,adjective,of Holland (region); Hollandish,B2,0.013,92.48,88.74
4825,Wahn,noun,"delusion, illusion, (vain) hope (very strong but ultimately misguided or fantastical beliefs or motivations)",B2,0.038,92.48,88.75
4826,angespannt,adjective,"taut, tense",B2,0.006,92.48,88.75
4827,Schock,noun,shock (mental or medical condition),B2,0.001,92.48,88.75
4828,Albtraum,noun,nightmare,B2,0.001,92.48,88.75
4829,gottlos,adjective,"godless, ungodly, not believing in God and/or disrespecting His commandments",B2,0.025,92.48,88.75
4830,aufgefunden,adjective,"found, located",B2,0.007,92.48,88.75
4831,indisch,adjective,Indian (of or pertaining to India or its people); Indic,B2,0.007,92.48,88.75
4832,Klinge,noun,blade (of a weapon or tool),B2,0.007,92.49,88.75
4833,Mondschein,noun,moonshine (shine of the moon),B2,0.039,92.49,88.75
4834,spitz,adjective,"pointed, pointy",B2,0.018,92.49,88.75
4835,zuweilen,adverb,"sometimes, occasionally, from time to time",B2,0.107,92.49,88.76
4836,Menschlichkeit,noun,humanity (the condition or quality of being human),B2,0.009,92.49,88.76
4837,umgehend,adverb,immediately,B2,0.004,92.49,88.76
4838,Vorspiel,noun,prelude (kind of short piece of music),B2,0.008,92.49,88.76
4839,umkommen,verb,to be killed; to perish; to die a (usually) violent death,B2,0.007,92.49,88.77
4840,ausführlich,adverb,"in detail, extensively",B2,0.022,92.49,88.77
4841,grauenhaft,adverb,"horrifically, horrendously",B2,0.011,92.49,88.77
4842,Donnerwetter,noun,"shouting, row, (most often) a loud beratement",B2,0.01,92.49,88.77
4843,Debatte,noun,debate,B2,0.007,92.49,88.77
4844,knarren,verb,"to creak, to squeak (of a floor, door, stair, etc.)",B2,0.006,92.49,88.77
4845,Apotheke,noun,pharmacy,B2,0.007,92.49,88.77
4846,Schenkel,noun,each of the two main parts of a leg; shank (lower part) or thigh (upper part),B2,0.014,92.49,88.77
4847,wochenlang,adverb,for weeks,B2,0.012,92.49,88.77
4848,hilfreich,adjective,"useful, helpful",B2,0.002,92.49,88.77
4849,engagieren,verb,to engage (to hire an artist),B2,0.005,92.49,88.77
4850,Friseur,noun,"hairdresser, barber",B2,0.005,92.5,88.77
4851,Junggeselle,noun,bachelor (unmarried man),B2,0.01,92.5,88.77
4852,Wacht,noun,"synonym of Wache (“watch, guard, vigilence”)",B2,0.011,92.5,88.78
4853,rüsten,verb,"to equip, to arm",B2,0.032,92.5,88.78
4854,kommend,adjective,"coming, next",B2,0.005,92.5,88.78
4855,betreffend,preposition,"regarding, concerning, with respect to",B2,0.019,92.5,88.78
4856,rausgehen,verb,to go out,B2,0.001,92.5,88.78
4857,Österreicher,noun,Austrian (“person”),B2,0.007,92.5,88.78
4858,lateinisch,adjective,Latin (of or pertaining to the Latin language),B2,0.02,92.5,88.78
4859,stricken,verb,to knit,B2,0.013,92.5,88.78
4860,Irländer,noun,synonym of Ire (“Irishman”),B2,0.006,92.5,88.78
4861,Übereinstimmung,noun,agreement,B2,0.01,92.5,88.79
4862,Vergeltung,noun,requital; reciprocation; payback (the act of treating someone according to how they treated someone else),B2,0.008,92.5,88.79
4863,Geier,noun,vulture,B2,0.007,92.5,88.79
4864,plündern,verb,"to loot; to plunder; to pillage; to raid (to steal large amounts (from), especially in a state of war or catastrophe)",B2,0.007,92.5,88.79
4865,Film,noun,film (a thin layer of some substance),B2,0,92.52,88.79
4866,Dunkles,noun,dark,B2,0.014,92.52,88.79
4867,Scheiß,noun,shit (feces),B2,0,92.53,88.79
4868,Fotografie,noun,photography (the art of making photographs),B2,0.013,92.53,88.79
4869,unbestimmt,adjective,undetermined,B2,0.04,92.53,88.79
4870,Parfüm,noun,"perfume (generally only in the sense of “odorous substance”, not “pleasant smell”)",B2,0.004,92.54,88.79
4871,diskutieren,verb,to discuss,B2,0.001,92.54,88.79
4872,zumal,conjunction,especially since (giving a reason which justifies the expectation of a certain behaviour or quality),B2,0.039,92.54,88.8
4873,ermöglichen,verb,to make possible,B2,0.003,92.54,88.8
4874,belehren,verb,"to teach, to guide",B2,0.022,92.54,88.8
4875,Stier,noun,bull,B2,0.012,92.54,88.8
4876,Non,noun,15 o'clock (the 9th hour when the first hour is set at 6 o'clock),B2,0.004,92.54,88.8
4877,Demokratie,noun,democracy,B2,0.006,92.54,88.8
4878,oberflächlich,adjective,superficial,B2,0.01,92.54,88.8
4879,Sekretär,noun,secretary (male or unspecified sex),B2,0.011,92.54,88.8
4880,hierherkommen,verb,to get here,B2,0.007,92.54,88.8
4881,Pforte,noun,"gate, large door",B2,0.035,92.54,88.8
4882,Bankier,noun,The owner or a high-ranking officer of a bank.,B2,0.017,92.54,88.81
4883,Luder,noun,bait,B2,0.009,92.54,88.81
4884,weilen,verb,"to be, be present somewhere",B2,0.015,92.54,88.81
4885,Kennzeichen,noun,"characteristic, mark",B2,0.005,92.55,88.81
4886,preisgeben,verb,"to abandon, forsake, relinquish, surrender",B2,0.013,92.55,88.81
4887,Abzug,noun,trigger (of a gun),B2,0.003,92.55,88.81
4888,demnächst,adverb,"soon, in a near time, in a short while, in near future",B2,0.007,92.55,88.81
4889,darein,adverb,therein,B2,0.035,92.55,88.81
4890,verschenken,verb,"to give away, to throw away",B2,0.01,92.55,88.82
4891,hu,interjection,an expression of fear or horror,B2,0.007,92.55,88.82
4892,entreißen,verb,to wrest (from),B2,0.028,92.55,88.82
4893,Moos,noun,moss,B2,0.015,92.55,88.82
4894,Spott,noun,"mockery, ridicule, derision, scorn",B2,0.049,92.55,88.82
4895,Foto,noun,photograph (picture created by projecting an image onto a photosensitive surface),B2,0,92.56,88.82
4896,Müdigkeit,noun,tiredness,B2,0.039,92.56,88.83
4897,Däne,noun,Dane (person from Denmark) (male or unspecified),B2,0.007,92.57,88.83
4898,musikalisch,adjective,musical,B2,0.015,92.57,88.83
4899,Gefecht,noun,"combat, action, enemy contact",B2,0.005,92.57,88.83
4900,cool,adjective,cool (in its informal senses),B2,0,92.58,88.83
4901,Verurteilung,noun,"conviction, sentence",B2,0.007,92.58,88.83
4902,entgegenkommen,verb,to come towards the face of something or someone,B2,0.029,92.58,88.83
4903,intern,adjective,internal,B2,0.003,92.58,88.83
4904,Rektor,noun,"headmaster, rector of a school or university (male or of unspecified gender)",B2,0.012,92.58,88.83
4905,verspotten,verb,"to make fun of, to mock",B2,0.012,92.58,88.83
4906,Gräber,noun,digger (someone or something that digs),B2,0.013,92.58,88.84
4907,Lumpen,noun,"rag, tatter, shred",B2,0.021,92.58,88.84
4908,nachlassen,verb,"to subside, abate, taper off",B2,0.01,92.58,88.84
4909,schmollen,verb,"to sulk, to pout (to express sullenness, especially by not speaking or curling one's lips)",B2,0.02,92.58,88.84
4910,Junior,noun,junior,B2,0.001,92.59,88.84
4911,inne,adverb,"only used in inne sein, innehalten, innewerden etc.; inside",B2,0.028,92.59,88.84
4912,verwischen,verb,"to smudge, to smear (e.g. paint)",B2,0.011,92.59,88.84
4913,abgerissen,adjective,"ragged, tattered",B2,0.009,92.59,88.84
4914,Ehrfurcht,noun,"awe, reverence",B2,0.038,92.59,88.85
4915,Haube,noun,"bonnet, cap",B2,0.02,92.59,88.85
4916,füreinander,adverb,for each other / one another,B2,0.005,92.59,88.85
4917,ineinander,adverb,into each other; intertwiningly,B2,0.025,92.59,88.85
4918,nachweisen,verb,"to prove, verify, establish, demonstrate (something or the presence of something), to substantiate, to provide proof of",B2,0.009,92.59,88.85
4919,unbequem,adjective,"uncomfortable, inconvenient",B2,0.022,92.59,88.85
4920,unglücklicherweise,adverb,unfortunately,B2,0.006,92.59,88.85
4921,inwiefern,adverb,"in what way, how",B2,0.004,92.59,88.85
4922,schmieden,verb,to forge,B2,0.009,92.59,88.85
4923,Lebenslauf,noun,"curriculum vitae (UK), résumé (US)",B2,0.007,92.59,88.86
4924,Erzähler,noun,narrator,B2,0.007,92.59,88.86
4925,sicherstellen,verb,"to seize, confiscate a physical object as a measure to avert danger (a Gefahrenabwehrmaßnahme)",B2,0.002,92.6,88.86
4926,Fels,noun,rock,B2,0.013,92.6,88.86
4927,teils,adverb,"partly, partially",B2,0.015,92.6,88.86
4928,mystisch,adjective,"mystic, mystical",B2,0.011,92.6,88.86
4929,Schnecke,noun,"snail, slug",B2,0.005,92.6,88.86
4930,Hummer,noun,lobster,B2,0.006,92.6,88.86
4931,Sängerin,noun,"female singer, singeress, songstress",B2,0.007,92.6,88.86
4932,anlangen,verb,to touch (literally),B2,0.041,92.6,88.87
4933,chemisch,adjective,chemical,B2,0.004,92.6,88.87
4934,grollen,verb,"to grumble, to thunder",B2,0.016,92.6,88.87
4935,Bluse,noun,blouse,B2,0.009,92.6,88.87
4936,schändlich,adjective,shameful,B2,0.026,92.6,88.87
4937,Kralle,noun,"claw, talon",B2,0.01,92.6,88.87
4938,flott,adjective,"afloat, able to navigate",B2,0.006,92.6,88.87
4939,westlich,adjective,"west, western",B2,0.005,92.6,88.87
4940,Kumpel,noun,miner,B2,0,92.62,88.87
4941,verbluten,verb,"to bleed to death, to bleed out (die from loss of blood)",B2,0.005,92.62,88.87
4942,gefälscht,adjective,"counterfeit, forged",B2,0.002,92.62,88.87
4943,beteiligt,adjective,"involved, concerned, participating",B2,0.011,92.62,88.87
4944,bestürzt,adjective,"upset, distraught",B2,0.026,92.62,88.88
4945,Förster,noun,forester (a person who practices forestry),B2,0.036,92.62,88.88
4946,Untertan,noun,a citizen in a monarchy; a subject,B2,0.012,92.62,88.88
4947,Anker,noun,anchor,B2,0.007,92.62,88.88
4948,Ostern,noun,Easter,B2,0.015,92.62,88.88
4949,Pfennig,noun,pfennig,B2,0.017,92.62,88.88
4950,allemal,adverb,"at any rate, at all events, by far",B2,0.027,92.62,88.88
4951,Rückseite,noun,"back, reverse side",B2,0.007,92.62,88.89
4952,wiederhaben,verb,to have back,B2,0.004,92.62,88.89
4953,Pate,noun,godfather,B2,0.01,92.62,88.89
4954,schwenken,verb,"to wave, to brandish (a long item, e.g. a flag or sword)",B2,0.033,92.62,88.89
4955,definitiv,adjective,"definitive, conclusive, decisive",B2,0.001,92.63,88.89
4956,hierauf,adverb,"here, on this",B2,0.063,92.63,88.89
4957,bedrückt,adjective,"gloomy, depressed",B2,0.008,92.63,88.89
4958,ausgestattet,adjective,"equipped, endowed, provided, furnished",B2,0.012,92.63,88.9
4959,hüllen,verb,"to wrap, to drape, to cover, to engulf",B2,0.025,92.63,88.9
4960,Balken,noun,"beam, crossbeam",B2,0.019,92.63,88.9
4961,Besserung,noun,amelioration,B2,0.006,92.63,88.9
4962,Komitee,noun,committee,B2,0.006,92.63,88.9
4963,Wirtshaus,noun,"inn, tavern",B2,0.057,92.63,88.9
4964,Prophezeiung,noun,prophecy,B2,0.005,92.63,88.91
4965,Franc,noun,franc (currency),B2,0.001,92.63,88.91
4966,Geschworener,noun,juror (male or of unspecified gender),B2,0.002,92.63,88.91
4967,dreist,adjective,"bold, brash, audacious, impudent (without respect or restraint)",B2,0.015,92.63,88.91
4968,Handvoll,noun,"handful, fistful",B2,0.013,92.64,88.91
4969,Turner,noun,a male gymnast,B2,0.004,92.64,88.91
4970,bedauerlich,adjective,regrettable,B2,0.01,92.64,88.91
4971,Lieferant,noun,"supplier, provider, deliverer",B2,0.01,92.64,88.91
4972,Schnabel,noun,"beak, bill, pecker",B2,0.022,92.64,88.91
4973,Träger,noun,"carrier, support",B2,0.01,92.64,88.91
4974,Kolonie,noun,colony (settlement away from the mainland/motherland),B2,0.004,92.64,88.91
4975,bleichen,verb,to bleach,B2,0.04,92.64,88.92
4976,aktuell,adjective,"current, currently in action, live (in the sense of broadcasting)",B2,0.002,92.64,88.92
4977,wohlauf,adverb,"well, healthy",B2,0.016,92.64,88.92
4978,Insekt,noun,insect,B2,0.004,92.64,88.92
4979,ihretwegen,adverb,"because of her, for her sake",B2,0.006,92.64,88.92
4980,Sturz,noun,fall,B2,0.012,92.64,88.92
4981,Kappe,noun,"cap, hood",B2,0.011,92.64,88.92
4982,Greis,noun,"old person, old man",B2,0.056,92.64,88.92
4983,unbemerkt,adjective,"unnoticed, unseen, unobserved",B2,0.014,92.64,88.92
4984,ehrgeizig,adjective,ambitious,B2,0.008,92.64,88.93
4985,Unfug,noun,nonsense,B2,0.01,92.64,88.93
4986,Semester,noun,semester,B2,0.007,92.65,88.93
4987,eingestehen,verb,"to admit, confess, concede, acknowledge",B2,0.016,92.65,88.93
4988,Beschäftigung,noun,occupation (activity or task with which one occupies oneself),B2,0.026,92.65,88.93
4989,apropos,adverb,"speaking of, apropos",B2,0.002,92.65,88.93
4990,Entschlossenheit,noun,"determination, resolution",B2,0.02,92.65,88.93
4991,zusammenkommen,verb,to come/get together,B2,0.008,92.65,88.93
4992,schwinden,verb,"to dwindle (to decrease, shrink, vanish)",B2,0.025,92.65,88.93
4993,speisen,verb,"to dine, to eat in a cultured (typically upscale) setting (otherwise humorous)",B2,0.025,92.65,88.94
4994,schaukeln,verb,"to swing back and forth, to rock to and fro (e.g. a baby)",B2,0.019,92.65,88.94
4995,unverändert,adjective,"unchanged, unaltered, unmodified",B2,0.015,92.65,88.94
4996,verbleiben,verb,to remain,B2,0.027,92.65,88.94
4997,dauerhaft,adjective,"permanent, lasting, enduring, durable",B2,0.006,92.65,88.94
4998,anderswo,adverb,elsewhere,B2,0.014,92.65,88.94
4999,vertauschen,verb,"to exchange, swap",B2,0.013,92.65,88.94
5000,Gelübde,noun,oath; vow (solemn promise to act in a specified manner),B2,0.016,92.65,88.95
`,de=e({default:()=>fe}),fe=`aalen
Aalen
Aales
aalst
aalte
Aarau
Aaron
Aases
Abart
abbat
Abbau
abbog
Abdul
Abels
Abend
abgab
Abgas
abhob
Abhub
abkam
ablas
ablud
abmaß
Abort
abrät
Abruf
absah
absaß
Absud
abtat
Abtei
Äbten
Abtes
abtue
abtun
abtut
Abweg
abwog
abzgl
abzog
Abzug
Accra
Achat
Achim
Achse
achte
ächte
ächze
ächzt
Acker
Äcker
Acres
Acryl
Adams
Addon
adele
adeln
Adels
adelt
Adept
Adern
adieu
Adler
adlig
Adlon
Admin
Adobe
Adolf
Adorf
Adria
adrig
adult
aerob
Affen
äffen
affig
affin
Äffin
Affix
äffst
äffte
Afros
After
Ägäis
Agave
Agens
Agent
Agfas
Ägide
agile
Agios
Agnes
Agora
Agrar
Aguti
Ahaus
Ahlen
ahmen
Ahmet
ahmst
ahmte
ahnde
ahnen
Ahnen
ahnst
ahnte
Ahorn
Ähren
Aidas
Aimée
Aires
Akkus
Aktei
Akten
Aktes
Aktie
aktiv
Aktor
akute
Alaaf
Alarm
Alaun
Alban
Albas
Alben
Album
Aldis
Aleph
alert
Alexa
Algen
alias
Alibi
Alice
Alien
Alina
Alkan
Alkyl
Allah
Allee
Allel
allem
allen
aller
alles
allwo
Allyl
Allys
allzu
Almen
Alois
Alpen
alpha
alpin
Altai
Altar
altem
alten
alter
Alter
älter
altes
Altöl
Amber
ambig
Amiga
Amigo
Amine
Amman
Ammen
Ammer
Amöbe
Amors
Ampel
Amrum
Amsel
Ämter
Amtes
anale
Anbau
anbei
anbot
Anden
André
Andys
angab
Angel
Anger
Angie
angle
angst
Angst
Angus
anhat
anhin
anhob
Anika
Anime
Anion
Anita
Anjas
ankam
Anker
Ankes
Ankum
anlag
anlog
Anmut
Annas
Annes
Annie
Anode
anöde
anrät
Anruf
ansah
ansog
antat
antik
Antje
Anton
antue
antun
antut
anzog
Anzug
Äonen
Aorta
apart
Apfel
Äpfel
Apnoe
Apoll
Apple
April
Apsis
Aquin
Arals
Arche
Arcor
Arcus
Areal
Arena
argem
argen
arger
ärger
Ärger
arges
Argon
Argus
Århus
Arial
aride
Ariel
Arien
Arier
Arkus
Arles
Armee
Ärmel
armem
armen
Armen
armer
ärmer
armes
Armes
Armin
Armut
Arndt
Arnes
Arnim
Arnos
Aroma
Arosa
Array
Arsch
Arsen
arten
artet
artig
Artus
Aruba
Ärzte
Asche
ASCII
ASEAN
äsend
äsest
Asiat
Asien
Asket
Aspik
Assad
Assam
Assel
Assen
Asses
aßest
äßest
Asset
ästen
Ästen
Aster
Astes
ästet
Astor
Astra
Asyls
Atari
Atems
Athen
Äther
Athos
Äthyl
Atlas
atmen
atmet
Atoll
Atome
Atoms
ätsch
ätzen
ätzte
Audio
Audis
Audit
aufaß
Augen
äugen
Auges
äugst
äugte
Augur
Aurel
Aurum
außen
außer
äußre
Autan
Autor
Autos
Auxin
avers
Aviso
Avivs
Award
Axels
axial
Axiom
Äxten
Ayran
Aznar
Azubi
Baals
Babel
Babys
Bäche
Bachs
backe
backt
bäckt
Bacon
baden
Baden
Bader
Bäder
Bades
badet
BAföG
Bagel
Bahai
bahne
bahnt
Bahre
Baken
Bakus
Bälde
balge
Bälge
Balgs
balgt
Balis
Balje
balle
Bälle
Balls
ballt
Balsa
Balte
balze
balzt
Bambi
banal
Bande
bände
Bände
Bands
bange
bangt
Banjo
Bänke
banne
Banns
bannt
Bantu
Barde
barem
baren
Bären
barer
bares
bargt
Bärin
Baris
Barke
Baron
barst
Bärte
Baryt
basal
Basar
Basel
Basen
Basic
Basis
Baske
Bässe
Basso
basta
Batch
baten
bäten
batet
bätet
Batik
Bator
batst
Bauch
bauen
Bauer
Baues
bäume
Bäume
Baums
bäumt
baust
baute
Bayer
Bazar
BBesG
Beach
beame
beamt
Beata
Beate
Beats
Bebel
beben
Bebop
Bebra
bebst
bebte
Becks
Becky
beeil
beeng
Beere
Beete
begab
begib
behob
Behuf
beide
beige
Beile
Beils
Beine
Beins
beiße
beißt
beize
beizt
bekam
Belag
Belas
Beleg
Bella
belle
Bello
Bells
bellt
belog
belud
bemaß
Bemme
Benin
Benno
Benns
Benny
Beppo
berät
berge
Berge
Bergs
bergt
Bernd
Berns
Berta
Berti
Berts
Beruf
besah
Besan
besaß
besät
Besen
beste
Betel
beten
Beter
betet
Beton
bette
Betti
Betts
Betty
beuge
beugt
beule
Beule
beute
Beute
Beuth
Beuys
bevor
beweg
bewog
bezog
Bezug
Bibel
Biber
Bidet
biege
biegt
Biene
Biere
Biers
Biese
Biest
biete
Biker
Bikes
Bilch
bilde
Bilds
Bilge
Bills
Billy
Bimbo
bimse
bimst
binär
binde
Binde
Bingo
Binom
Binse
Bioöl
birgt
Birke
Birma
Birne
Bisam
Bison
Bisse
bisst
bitte
Bitte
Biwak
Bizet
Björn
blähe
bläht
Blair
blank
blase
Blase
blass
blast
bläst
Blatt
blaue
Bläue
Blech
bleib
Bleis
blich
Blick
blieb
blies
Blimp
blind
Blini
Blitz
Bloch
Block
blöde
Blogs
blöke
blökt
blond
bloße
Blöße
Blues
Bluff
blühe
blüht
Blume
Bluse
blute
Blüte
Bluts
Board
Bobby
bocke
Böcke
Bocks
bockt
Boden
Böden
Bodys
bogen
Bogen
bögen
Bogey
bogig
bogst
Bohei
Bohle
Böhme
Bohne
bohre
Bohrs
bohrt
böige
Bojen
Bolle
Bölls
Bombe
Bonds
Bongo
Bonns
Bonus
Bonze
boome
Booms
boomt
boote
Boots
Borax
Borde
Börde
Bords
borge
borgt
Boris
Borke
Borna
Borns
Börse
Borte
Bosch
Bosco
bösem
bösen
böser
böses
Boson
Bosse
boten
böten
botet
bötet
Botin
Botox
botst
Boule
bovin
Bowie
Bowle
boxen
Boxer
boxte
Bozen
brach
Brand
Brass
brate
braue
braun
Braus
braut
brave
bravo
Break
Brehm
Breie
Breis
breit
Brent
Brest
Brett
Brevi
Brian
brich
Brief
Bries
briet
Brigg
bring
Brise
Brite
Broms
Bronx
Brote
Brown
Bruce
Bruch
brühe
Brühl
brüht
Brünn
Bruno
brüsk
Brust
brüte
Bryan
Buben
Bubis
buche
Buche
Buchs
bucht
Bucht
bücke
Bucks
bückt
Buddy
Buden
Buffo
Bügel
Buges
Buggy
bügle
Buhei
Bühel
buhen
buhle
buhlt
Buhne
Bühne
buhst
buhte
buken
büken
bukst
bükst
Bulle
Bulli
Bully
Bülow
bumse
bumst
Bunde
Bünde
Bunds
Bunny
bunte
Burda
bürde
Bürde
Buren
bürge
bürgt
Burka
Burma
Büros
Bursa
Burse
Busch
Busen
Bushs
Busse
büßen
Büßer
Bussi
büßte
Büste
Butan
Bütte
Butze
Byron
Bytes
Cache
Caddy
Cadiz
Cafés
campe
Camps
campt
Camus
Canna
Canon
Cañon
Capes
Capri
Cards
Cargo
Carla
Carlo
Carls
Carol
Cäsar
Cathy
Catos
causa
CeBIT
Cella
Celle
Celli
Cello
Cents
Ceres
Cerny
Champ
Chaos
Chaot
Chart
Chats
check
Chefs
chice
Chile
Chili
China
Chips
Chloé
Chlor
Choke
Chöre
Chors
Chose
Chris
Chrom
Chuck
Churs
Cidre
Cinch
Cindy
circa
Cisco
CISCO
Citys
Civil
Claim
Clans
Clara
Clark
Claus
clean
Clint
Clips
Clogs
Clone
Cloud
Clown
Clubs
Cluny
Coach
coate
Coats
Cobol
Codec
Codes
Codex
Colas
Colts
Combo
Comic
Conny
coole
Corps
Corsa
Corso
Costa
Cotta
Couch
Count
Coupé
Coups
Cover
Crack
Crash
Crawl
Credo
Creek
creme
Creme
Crème
cremt
Crêpe
Crews
Crime
Cross
Curie
Curry
Cuvée
Cyber
dabei
Dachs
Daddy
dafür
daher
dahin
Daisy
Dakar
Daker
dalag
Dalai
Dalis
Dalís
dalli
Damen
damit
dämme
Damms
dämmt
Dämon
Dampf
Dandy
Dänen
Dänin
danke
Danks
dankt
Danny
Dante
daran
darbe
darbt
darin
Dario
Därme
Darms
darob
Darre
Darts
darum
dasaß
Datei
Daten
Dates
DATEV
Datex
Dativ
Datum
Daube
Dauer
Daune
David
Davis
davon
davor
Davos
deale
Deals
dealt
debil
Debit
Debüt
decke
Decke
Decks
deckt
Defoe
Degen
dehne
dehnt
Deich
deine
deins
Dekan
Dekor
Delft
Delhi
Delir
Delle
Delta
Demos
Demut
Denar
denen
Denim
denke
denkt
Depot
Depps
derbe
Derby
Derek
deren
derer
desto
deute
Deutz
Devon
devot
DGzRS
Dhabi
Dhaka
Diana
Diane
dicht
dicke
Diebe
Diebs
Diego
Diele
diene
dient
diese
Dietz
Dijon
Dildo
Dille
Dills
dimme
dimmt
Dinar
Diner
dinge
Dingo
Dings
Dinos
Diode
Dipol
dippe
dippt
Dirks
Dirne
Disco
Disko
Disks
Dispo
disse
disst
Divas
Diven
Diwan
Docht
docke
Docks
dockt
Dödel
Dodos
Dogen
Dogge
Doggy
Dogma
Dohle
Dolby
dolce
Dolch
Dolde
dolle
Dolly
Domen
Domes
Donau
Döner
Donna
Donut
doofe
Doofi
Doors
dopen
Doper
Doras
Dorer
Dorfe
Dorfs
Doria
Doris
Dorne
Dorns
dorre
dörre
dorrt
dörrt
Dörte
Dosen
dösen
dösig
Dosis
döste
Dover
Doyen
Doyle
Draht
drall
Drama
drang
Drang
Drapé
drauf
draus
dräut
Dreck
drehe
Drehs
dreht
drein
Dress
Drift
Drill
Drink
dritt
Drive
Droge
dröge
drohe
droht
Drops
Druck
drück
Drums
Druse
Drüse
duale
Dubai
Dübel
dubio
düble
ducke
duckt
Duden
Duell
Duett
dufte
Düfte
Dufts
Dukat
dulde
Dumas
dumme
Dummy
dumpf
Dünen
dünge
Dungs
düngt
Dunja
dünkt
dünne
dünnt
Dunst
Duplo
durch
Düren
Dürer
dürfe
dürft
dürre
Durst
Dusel
düsen
Düsen
Dutte
Dutts
duzen
duzte
Dylan
Earls
Earth
ebben
Ebben
ebbte
ebene
Ebene
Ebern
Ebers
Ebert
ebnen
Ebner
ebnet
Ebola
Echos
Echse
echte
ecken
Ecken
eckig
eckst
eckte
Edams
Eddas
Eddie
Edeka
Edens
Eders
Edgar
Edikt
Edith
edlem
edlen
edler
edles
Edukt
Edwin
Efeus
Effet
Egeln
Egels
Eggen
eGmbH
Egons
ehern
ehren
Ehren
ehrst
ehrte
Eiben
eiche
Eiche
eicht
Eidam
Eiden
Eider
Eides
eiere
eiern
Eiern
eiert
Eifel
Eifer
eigen
eigne
Eilat
eilen
eilig
eilst
eilte
Eimer
Einar
einem
einen
einer
eines
einig
einst
einte
Eisen
Eises
eisig
eitel
Eiter
eitle
eitre
ekele
ekeln
Ekels
ekelt
Eklat
eklig
ektop
Ekzem
Elans
Elath
Elche
Elchs
Elena
elend
Elend
Eleve
Elfen
Elfer
elfte
Elias
Elisa
Elise
Elite
Eliza
Elkes
Ellen
Eller
Ellis
Elmar
Eloge
Elsas
Elses
Elvis
Emden
Emder
Emile
Emils
Emily
Emire
Emirs
Emmas
Emmys
Emnid
empor
Emser
emsig
enden
Endes
endet
Engel
engem
engen
enger
enges
engst
engte
Enkel
enorm
Enten
Enzym
EPROM
Epson
erbat
erben
Erbes
Erbin
erbot
Erbse
erbst
erbte
erden
erdet
erdig
Erdöl
ergab
erhob
Erich
Erics
Erika
Eriks
Erker
erkor
erlag
Erlen
Erlös
ermaß
Ernas
Ernie
ernst
Ernst
ernte
Erpel
errät
Error
erste
Erwin
erwog
Erzen
Erzes
erzog
Esaus
Esche
Eseln
Esels
Espen
Essay
essen
Esser
Essex
Essig
Essos
Esten
Ester
Estin
Etage
Etats
Ethan
Ether
Ethik
Ethin
Ethos
Etons
Etsch
Etüde
Etuis
etwas
Euböa
Eugen
Eulen
Euler
Eupen
eurem
euren
eurer
eures
Euros
Euter
Event
Evita
Ewald
ewige
exakt
Excel
Exile
Exils
extra
Exxon
Fabel
Faber
Fabio
fache
Fachs
facht
Façon
facto
fadem
faden
Faden
Fäden
fader
fades
fädle
fähig
fahle
Fahne
fahre
Fähre
fahrt
Fahrt
fährt
faire
fäkal
Fakes
Fakir
Fakts
falbe
Falco
Falke
falle
Falle
fälle
Fälle
falls
fallt
fällt
falte
Falte
falze
falzt
famos
Fanal
fände
fange
Fänge
Fango
Fangs
fangt
fängt
Fanny
Fanta
Farad
Farbe
färbe
färbt
Farce
Farne
Farns
Färse
Farsi
Fasan
Faser
fasse
fasst
faste
fatal
Fatum
Fatwa
faule
Fäule
fault
Fauna
Faune
Fauns
Faust
faxen
faxte
Fäzes
Fazit
Feder
fegen
Feger
fegst
fegte
Fehde
fehle
fehlt
Feier
feige
Feige
feile
Feile
feilt
feind
Feind
feine
feist
feixe
feixt
Felde
Felds
Felge
felin
Felix
Felle
Fells
Femen
Femur
ferne
Ferne
Ferse
fesch
feste
Fests
Feten
fette
Fette
Fetus
Feuer
Fezen
Fiats
Fibel
Fiber
ficht
ficke
Ficks
fickt
fidel
fiele
fielt
fiepe
fiept
fiese
Fight
Figur
Files
Filet
filme
Filme
Films
filmt
Filou
Filze
filzt
final
Finca
finde
finge
fingt
finit
Finne
Finte
Fiona
Firma
First
Fisch
fitte
fixem
fixen
fixer
fixes
fixte
Fjord
flach
Flair
Flame
Flash
Flats
flaue
Flaum
flaut
Fleck
flehe
fleht
Fleiß
Fleur
Flick
flieg
flieh
flink
Flint
Flirt
flöge
flogt
Flöhe
Flohs
floht
flöht
Flops
Flora
floss
flöße
Flöße
flößt
flöte
flott
Flows
Floyd
Flöze
Fluch
Fluge
Flüge
flugs
Fluid
Fluke
Fluor
Flure
Flurs
Fluse
Flush
Fluss
Flyer
focht
Focus
föhne
Föhns
föhnt
Föhre
Föhrs
fokal
Fokus
folge
Folge
folgt
Folie
Folio
Folks
Fonds
Fonts
foppe
foppt
Force
Förde
Fords
Foren
Forke
forma
forme
formt
Forsa
FORSA
Forst
forte
Forts
Forum
fötal
Föten
Fotos
Fötus
Fotze
Fouls
Foyer
Frack
frage
Frage
fragt
Frame
Franc
frank
Frank
Franz
fräse
Fraße
fräße
fraßt
fräst
Fratz
Freak
frech
freie
freit
fremd
Freud
freue
freut
Fries
Friso
friss
Frist
Fritz
frohe
fromm
fröne
Front
frönt
fröre
frort
Frost
frühe
Frust
Fuchs
Fuder
fugen
Fugen
fügen
fugst
fügst
fugte
fügte
fühle
fühlt
Fuhre
führe
fuhrt
führt
Fulda
fülle
füllt
Funde
Fundi
fünft
funke
Funks
funkt
funzt
Furie
Furor
Fürst
Fürth
furze
Fürze
furzt
Fusel
fußen
Füßen
Fußes
fußte
Futon
Futur
Fuzzy
Gabel
gaben
gäben
Gabis
gable
gabst
gäbst
Gabun
gaffe
gafft
Gagen
gähne
gähnt
Gaius
Galan
Galen
Galle
Gallo
gälte
Gamba
Gambe
Games
Gamet
Gamma
Gämse
Gange
Gänge
Gangs
Gänse
ganze
Gänze
Garbe
Garbo
Garde
garem
garen
gären
garer
gares
Garne
garni
Garns
garte
gärte
Gasen
Gases
Gasöl
Gasse
Gassi
Gäste
Gates
Gatte
Gatts
Gaube
Gauck
Gaudi
Gauen
Gäule
Gauls
Gazas
Gazen
GBits
GByte
Geäst
gebar
geben
Geber
Gebet
gebot
Gecko
Gefäß
gegen
gehen
Geher
Gehör
gehst
Geier
geige
Geige
geigt
geile
geilt
Geist
geize
geizt
gelbe
Gelde
Gelds
Gelee
gelle
gellt
gelte
gemäß
Gemme
Gemüt
genas
genau
Genen
Genfs
Genie
Genom
Genre
Gents
Genua
genug
Genus
geölt
Georg
Geras
gerät
Gerät
gerbe
gerbt
Gerda
Gerds
gerne
Geros
Gerte
Gerti
Gerts
Gesas
Gesäß
gesät
Geste
getan
Getto
Getue
geübt
gGmbH
Ghali
Ghana
gibst
Gicht
giere
giert
gieße
gießt
gifte
Gifts
gilbt
Gilde
Ginas
ginge
gingt
Girls
Giros
Gitta
Gitti
Gizeh
Glacé
Glanz
glatt
glaub
Gleis
glich
Glied
glitt
glomm
glotz
gluck
Glück
glühe
glüht
Gmail
GmbHs
Gmünd
gnade
Gnade
Gneis
Gnome
Gnoms
Gödel
Godot
Goghs
Gojim
Golda
Golde
Golds
Golem
golfe
Golfs
golft
Gomez
Gongs
gönne
gönnt
Goofy
Göran
Gorch
goren
gören
Gorki
Gosse
gösse
gosst
Goten
Gotha
Gotik
Gotin
Götze
Gouda
Goyas
grabe
Grabs
grabt
gräbt
Grace
Grade
Grads
Grals
gräme
Gramm
Grams
grämt
Grand
Graph
grase
Grass
grast
Grate
Gräte
Grats
graue
Graus
graut
Greco
Green
greif
Greis
grell
Greta
Grete
Grieß
griff
Griff
grill
Grimm
Grind
Grips
grobe
Grogs
gröle
Groll
grölt
große
Größe
Group
Grube
grübe
grubt
Gruft
Grund
grüne
grünt
grüße
Grüße
grüßt
Guano
Guave
Gucci
gucke
guckt
Guide
Guido
Gulag
Gülle
Gully
Gummi
Gunst
Guppy
Gurke
gurkt
gurrt
gurte
Gurte
Gurus
Güsse
Gustl
Gusto
gutem
guten
guter
Güter
gutes
gütig
Gyros
Gysis
haare
Haare
Haars
haart
haben
habet
Habit
hacke
Hacke
Hacks
hackt
Hader
Hades
hadre
Hafen
Häfen
Hafer
Haffs
hafte
Hagel
Hagen
hager
hagle
Häher
Hähne
Hahns
Haien
Haies
Haifa
Haiku
Haine
Hains
Haiti
haken
Haken
häkle
hakst
hakte
halbe
Halde
halft
halle
Halle
hallo
Halls
hallt
Halma
Halme
Halms
halse
Hälse
halte
Hamam
Hamas
Hamms
Hanau
Hände
Handy
Hanfs
hänge
Hangs
hängt
Hanna
Hanne
Hanni
Hanno
Hanoi
Hansa
Hanse
Hansi
Hapag
happy
Hardt
Hardy
Harem
Harfe
harke
harkt
härme
härmt
Harns
harre
Harro
harrt
Harry
harte
härte
Härte
Hartz
harze
Harze
harzt
Hasch
Hasel
Hasen
Häsin
hasse
Hasso
hasst
haste
hatte
hätte
Haube
hauch
hauen
Hauer
häufe
Hauff
häuft
Hauke
Haupt
hause
haust
haute
häute
Havel
Haxen
Haydn
Heavy
Hebel
heben
Heber
heble
hebst
Hecht
hecke
Hecke
Hecks
heckt
Hedda
Heere
Heers
Hefen
hefte
Hefte
Hefts
Hegel
hegen
Heger
hegst
hegte
hehle
hehlt
hehre
Heide
Heidi
Heike
Heiko
heile
Heils
heilt
Heime
Heims
Heine
Heini
Heino
Heinz
heißa
heiße
heißt
heize
heizt
helau
Helds
Helen
helfe
helft
Helga
Helge
Helix
Hella
helle
hellt
Helma
Helme
Helms
Helot
Hemds
hemme
hemmt
Hendl
Henna
Henne
Henni
Henri
Henry
Henze
herab
heran
herbe
Herde
Herds
Herme
Herne
Heroe
Heros
Herrn
Herta
Hertz
herum
Herzl
herzt
herzu
Hesse
hetze
hetzt
heuer
heule
heult
Heuss
heute
hexen
Hexen
Hexer
hexte
Heyne
hicks
hiebe
Hiebe
hielt
hieße
hießt
hieve
hievt
Hilda
Hilde
Hilfe
hilft
Hille
hinab
hinan
Hindi
Hindu
hinge
hingt
hinke
hinkt
hinzu
Hiobs
hippe
Hippe
Hippo
Hirne
Hirni
Hirns
Hirse
Hirte
hisse
hisst
Hitze
Hiwis
Hobby
Hobel
hoben
höben
hoble
hobst
Hochs
hocke
hockt
Hoden
Höfen
Hofer
Höfer
Hofes
hoffe
hofft
hohem
hohen
Höhen
hoher
höher
hohes
hohle
höhle
Höhle
höhlt
höhne
Hohns
höhnt
Höker
holde
holen
holla
Holle
Hölle
Holly
Holme
Holms
holst
holte
holzt
Homer
Homos
Honda
Honey
Honig
Hoorn
hopsa
hopse
hopst
Horaz
horch
Horde
hören
Hörer
hörig
Horns
Horst
hörst
horte
hörte
Horus
Hosen
Hosts
Hotel
HTTPS
hüben
Huber
Hubes
Hucke
Hufen
Hufes
Hüfte
Hügel
Hugos
Huhns
hülle
Hülle
hüllt
Hülse
human
Humes
humid
Humor
humos
Humus
Hunde
Hunds
Hünen
Hunne
hupen
hüpfe
hüpft
hupst
hupte
Hürde
huren
hurra
hurst
hurte
Hürth
Husar
husch
Husky
hussa
Husse
huste
Husum
hüten
Hüten
Hüter
Hutes
hütet
Hütte
Hutus
Hyäne
Hydra
Hymen
Hymne
Hypes
Hyphe
Ibiza
Ibsen
Icons
Idaho
ideal
Ideen
Idiom
Idiot
Idole
Idols
Idyll
igeln
Igeln
Igels
igelt
igitt
Iglus
Ignaz
Igors
ihnen
Ihnen
ihrem
ihren
Ihren
ihrer
ihres
Ihres
Ikone
Ileus
Ilias
Ilium
Iljas
Ilkas
Iller
Ilona
Iltis
Image
Imame
Imams
Imker
imkre
Immen
immer
immun
Imola
impfe
impft
Inbus
indem
Inder
indes
Index
Indie
Indik
Indio
Indiz
Indus
inert
infam
Infix
Infos
Inges
Ingos
Inkas
Inlay
innen
innig
Input
Insel
Intel
intim
Intro
intus
Inuit
Ionen
Iowas
iPads
iPods
Iraks
Irans
irden
Irene
Irina
Irmas
irrem
irren
irrer
irres
irrig
irrst
irrte
Isaac
Isaak
Ische
Ischl
Islam
Italo
Items
Ivans
Iwans
Iwrit
Izmir
Jacht
Jacke
Jacks
Jacob
Jaffa
jagen
Jäger
jagst
jagte
jähem
jähen
jäher
jähes
Jahns
Jahre
jähre
Jahrs
jährt
Jahwe
Jakob
Jalon
Jalta
James
Jamie
jammt
Janas
Jandl
Janet
Janus
Japan
japse
japst
Jason
jäten
jätet
jaule
jault
Jause
Javas
Jeans
jecke
jedem
jeden
jeder
jedes
Jeeps
jeher
Jemen
Jenas
jenem
jenen
jener
jenes
Jenni
Jenny
Jerez
Jerry
Jesse
Jesus
Jeton
jette
jetzt
Jever
Jimmy
jobbe
jobbt
Joche
Jochs
Jodat
Jodid
Joels
Joëls
Jogas
jogge
joggt
Jogis
johle
johlt
Johns
Joint
Joker
Jokus
Jolle
Jonas
Jones
Joppe
Jörgs
Josef
Josés
Josua
Joule
Joyce
Juana
Juans
Jubel
juble
jucke
juckt
Judäa
Judas
Juden
Jüdin
Judos
Juist
Julei
Jules
Julia
Julie
Julis
Jumbo
Jumps
junge
Junge
Jungs
Junis
Junta
Jupps
Juras
Juris
Juror
Jurte
Jurys
Jusos
Jutta
Juwel
juxen
Juxen
Juxes
juxte
Kaaba
Kabel
Kabis
kable
Kabul
kacke
Kacke
kackt
Kader
Kadis
Käfer
Kaffs
Käfig
Kafka
kahle
Kähne
Kahns
Kains
Kairo
Kajak
Kajal
Kakao
Kakis
kalbe
Kalbs
kalbt
Kalif
Kalis
Kalks
Kalle
Kalme
kalte
Kälte
Kamee
Kamel
kamen
kämen
kämet
Kamin
kämme
Kämme
Kamms
kämmt
Kämpe
Kampf
kamst
kämst
Kanal
Kanin
Kanne
Kanon
kante
Kante
Kants
Kanus
Kaper
Kapok
Kapos
kappa
kappe
Kappe
Käppi
kappt
Karat
Karde
Karel
Karen
karge
Kargo
Karin
Karla
Karls
Karma
Karol
Karos
karre
Karre
karrt
Karst
Karte
Kasel
käsen
Käser
Käses
käsig
Kasko
Kasse
Kaste
Kasus
Katar
Katen
Kater
Käthe
Kathi
Katia
Katja
Katze
kauen
kaufe
Käufe
Kaufs
kauft
Kauri
kaust
kaute
Käuze
KBaud
KByte
Kebab
kecke
Kefir
Kegel
kegle
Kehle
kehre
kehrt
keife
keift
keile
Keils
keilt
keime
Keims
keimt
keine
keins
Keith
Kekse
Kelch
Kelim
Kelle
Kelly
Kelte
Kemal
Kenia
kenne
kennt
Kenny
Kents
kerbe
kerbt
Kerle
Kerls
Kerne
Kerns
Kerub
Kerze
kesse
kette
keuch
keule
Keule
Kevin
khaki
Khane
Khans
Khmer
kicke
Kicks
kickt
Kiele
Kiels
Kieme
Kiens
Kiepe
Kiese
Kiews
kiffe
kifft
kille
killt
Kilos
Kilts
Kimme
Kindl
Kinne
Kinns
Kinos
Kiosk
Kioto
kippe
Kippe
kippt
Kiras
Kirch
kirre
Kiste
Kitas
kitte
Kitts
Kitze
Kiwis
klack
klage
Klage
klagt
klamm
klang
Klang
Klans
klapp
Klaps
Klara
klare
kläre
klaro
klart
klärt
klaue
Klaue
Klaus
klaut
klebe
klebt
Klees
Kleid
Kleie
klein
klemm
Klett
Kleve
klick
Kliff
Klima
klipp
klirr
klomm
klone
klöne
Klons
klont
klönt
klopf
Klops
Klöße
Klotz
Klubs
Kluft
kluge
klump
Klüse
Knabe
knack
knall
knapp
knarr
Knast
Knauf
Knaur
kneif
knete
Knick
knien
Knies
kniet
kniff
Knopf
knöpf
Knorr
knote
knuff
knüll
knüpf
knurr
Knust
Knute
Knuts
Koala
Kobra
koche
Köche
Kochs
kocht
Kodak
Köder
Kodes
Kodex
Kogge
Kohle
Kohls
Kojen
Kokon
Kokos
kokse
kokst
Kolbe
Kolik
Kolja
Kölns
Kolon
Komas
Kombi
Komet
Komik
Komma
komme
kommt
Kongo
König
könne
könnt
Konto
Konus
Kopfe
köpfe
Köpfe
Kopfs
köpft
Kopie
Kopte
Koran
Körbe
Korbs
Korea
Korfu
Korns
Korps
Korse
Korso
korst
Kosak
kosen
koste
Kotau
koten
Köter
kotze
Kotze
kotzt
KPdSU
Kraal
Krach
Krads
kraft
Kraft
krähe
Krähe
kräht
Krain
Krake
Krale
krame
Krams
kramt
Kräne
krank
Krans
Kranz
Krapp
krass
kratz
Kraul
kraus
Krauß
Kraut
Krebs
Kredo
Kreis
Kreme
Kreml
Krems
Krenz
Krepp
Kreta
kreuz
Kreuz
krieg
Krieg
Krill
Krimi
Kripo
Krise
kroch
Kroko
Krone
kröne
krönt
Kropf
kross
Kröte
krude
Krüge
Krugs
Kruke
Krume
krumm
Krupp
Kubas
Kübel
Kuben
Kubus
Küche
Kufen
Küfer
Kugel
kugle
Kühen
Kuhle
kühle
kühlt
kühne
Kuhns
Küken
Kulis
Kulte
Kults
Kumys
Kunde
künde
Kunos
Kunst
Kunze
Kupee
Kupon
Kuppe
Kurde
Kuren
küren
Kurie
Kurse
kurst
kürst
kürte
Kurts
kurve
Kurve
kurvt
kurze
kürze
Kürze
kürzt
kusch
küsse
Küsse
küsst
Küste
Kutte
Kyoto
Kyrie
Label
laben
labil
Labor
labst
labte
lache
Lachs
lacht
Lacke
Lacks
laden
Laden
Läden
Lader
ladet
lädst
Ladys
laffe
Laffe
lagen
lägen
Lager
Lagos
lagst
lägst
Lahar
lahme
lähme
lahmt
lähmt
Lahti
Laibe
Laibs
Laich
Laien
Laila
Lakai
Laken
lalle
lallt
Lamas
Lamee
Lamés
Lamms
Lampe
lande
Lands
lange
Länge
längs
langt
Lanka
Lanze
Laote
Lappe
Laras
lärme
Lärms
lärmt
Larry
Larve
lasch
lasen
läsen
Laser
Lassa
lasse
Lasso
lasst
lässt
laste
Lasur
Latex
LaTeX
Latte
latze
latzt
Laube
Laubs
Lauch
laude
lauem
lauen
lauer
laues
laufe
Läufe
Laufs
lauft
läuft
lauge
laugt
Laune
Laura
lause
Läuse
laust
laute
läute
laxem
laxen
laxer
laxes
Lears
lease
least
leben
Leben
Leber
lebst
lebte
Lecce
lecke
Lecks
leckt
Leder
ledig
Leeds
leere
Leere
leert
Lefze
legal
Legat
legen
leger
legst
legte
Lehen
Lehme
Lehms
lehne
Lehne
lehnt
lehre
Lehre
lehrt
Leibe
Leibs
leibt
Leica
leide
Leids
Leier
leihe
leiht
leime
leimt
Leine
leise
leite
Lemgo
Lemma
Lemon
Lemur
Lenas
Lenau
Lende
Lenin
Lenis
lenke
lenkt
Lenze
Leone
Leons
Lepra
lerne
lernt
Lesbe
lesen
Leser
letal
Lette
Letzt
Leuna
Leute
Level
Levis
Lewis
Lexem
Lexik
Lhasa
Liane
licht
Licht
Lider
Lides
Lidos
liebe
Liebe
liebt
Lieds
liefe
lieft
liege
Liege
liegt
lieht
Liese
ließe
ließt
liest
lifte
Lifts
Ligen
light
Likes
Likör
Lilie
Lille
Lilli
Lilly
Limas
Limbo
Limes
Limit
Linda
linde
Linde
Lindt
Linie
linke
links
Links
linkt
Linné
Linon
linse
Linse
Linum
Linus
Linux
Lions
Lipid
Lippe
Lisas
Lissy
liste
Liste
Liszt
Liter
litte
Litze
Liven
Livia
Lloyd
Lobby
loben
Lobes
lobst
lobte
loche
Lochs
locht
locke
Locke
lockt
Loden
Lodge
lodre
Lofts
logen
logge
loggt
Logik
Login
Logis
Logos
logst
Lohen
lohne
löhne
Lohns
lohnt
löhnt
Loipe
Loire
lokal
Lokal
Lokus
Lolli
Looks
Lopez
Lords
Loren
losem
losen
Losen
lösen
loser
Löser
loses
Loses
loste
löste
loten
löten
Lotes
lotet
lötet
Lotos
lotse
lotst
Lotte
Lotti
Lotto
Lotus
Louis
Lover
Löwen
Löwin
loyal
Lübke
Lucas
Lucca
Luchs
Lucia
Lücke
Lucky
luden
Luden
Luder
ludet
ludst
lüfte
Lüfte
lugen
lügen
Lügen
Luger
lugst
lügst
lugte
Luigi
Luisa
Luise
Lukas
Luken
lulle
lullt
Lumen
lunar
Lunch
Lunge
Lunte
Lupen
lupfe
lupft
Lupus
Lurch
Lüste
Luxor
Luxus
luzid
Luzon
Lydia
Lynch
Lyons
Lyrik
Lysin
Maare
Macao
mache
Macho
Machs
macht
Macht
Macke
Madam
Mädel
Maden
madig
Mafia
Magda
Mägde
Magen
Mägen
mager
Maggi
Magie
Magma
magna
magst
Mahdi
mähen
Mäher
mahle
Mahls
mahlt
mahne
Mähne
mahnt
Mähre
mähst
mähte
Maier
Maike
maile
Mails
mailt
Mains
Mainz
Majas
Major
Makel
Makis
Makro
malen
Maler
Malis
Malls
malme
Malmö
malmt
malst
Malta
malte
Malus
Malve
Mamas
Mambo
mampf
manch
Mandy
Manga
Mango
Manie
Manko
Manna
Manne
Manns
Manon
Manta
Maori
Mappe
Marco
Marcs
Maren
Mären
Marga
Marge
Maria
Mariä
Marie
marin
Mario
Marke
Marko
Marks
Markt
Marls
Marne
Marta
Marys
Maske
Massa
Masse
maßen
Maßes
mäßig
maßte
mäste
Masut
Match
mater
Mathe
matte
Matte
mauem
mauen
mauer
Mauer
maues
Mauke
maule
Mauls
mault
Maure
Mäuse
mauve
Maxim
Mayas
Mayen
Mayer
Mazda
Mäzen
MByte
McCoy
Medea
Media
Meere
Meers
Mehle
Mehls
mehre
mehrt
meide
Meier
Meike
Meile
meine
meins
meint
Meise
meist
Mekka
melde
melke
melkt
Melos
Memel
Memen
Memme
menge
Menge
mengt
Mensa
Menüs
Meran
Merck
merke
merkt
merze
merzt
messe
Messe
messt
Mesut
Meter
Metro
Métro
Mette
Metze
Meute
Meyer
Miami
miaue
miaut
Micha
Micks
Micky
Midas
Miefs
mieft
Miele
Miene
miese
miete
Miete
Mieze
Mikes
Mikro
Mikwe
Milan
Milbe
Milch
milde
Milet
Miliz
Milka
Mille
Milos
Milva
mimen
Mimik
mimte
Minen
Mings
Minis
Minna
Minne
Minsk
minus
Minze
Miras
Mirko
misch
misse
misst
miste
Mitau
Mitra
Mitte
Mixed
mixen
Mixer
mixte
mobbt
Möbel
mobil
modal
Model
Modem
Moden
Moder
modre
Modul
Modus
Moers
Mofas
mögen
möget
mogle
Mogul
Mohär
Mohns
Möhre
Moiré
Mokka
molar
Molch
Molen
Molke
Molli
Mölln
Molly
Momos
Monat
Mönch
Monde
Monet
Monis
Monte
Monty
Moore
Moors
Moose
Moped
Mopps
Möpse
Moral
morde
Morde
Mords
Mores
morse
Morus
Mosel
Mösen
Moses
Mosts
Motel
Motiv
Motor
Motte
Motto
motze
motzt
Mount
Movie
Möwen
MSDOS
mucke
Mücke
Mucks
muckt
müdem
müden
müder
müdes
Muffe
Mufti
muhen
mühen
Mühen
Mühle
mühst
mühte
Mulch
Mulde
Mulis
Mülls
Multi
Mumie
Mumms
Mumps
munde
Munde
münde
münze
Münze
münzt
mürbe
Murks
murre
murrt
Musen
Musik
Musil
Müsli
müsse
müßig
musst
müsst
muten
Mutes
mutet
mutig
Mutti
Mütze
myope
Myrte
MySQL
Myzel
Nabel
Naben
Nabob
Nacht
nackt
Nadel
Nadja
Nagel
Nägel
nagen
Nager
nagle
nagst
nagte
nahem
nahen
nähen
naher
näher
nahes
nähme
nahmt
nähmt
nähre
nährt
nahst
nähst
nahte
nähte
Nähte
naive
Namen
Namib
Namur
Nancy
Nandu
Nanny
Naomi
Näpfe
Napfs
Nappa
Narbe
narre
narrt
nasal
Nasen
näsle
nasse
Nässe
nässt
natal
nativ
Natur
Nauen
Nauru
Navis
Naxos
Nazis
Nebel
neben
nebst
necke
neckt
Neffe
Neger
Negev
Negro
nehme
nehmt
Nehru
neide
Neids
neige
neigt
Neill
Neins
Neiße
Nelke
Nelly
nenne
nennt
Neons
Nepal
neppe
Nepps
neppt
Nerds
Neros
nerve
Nervs
nervt
Nerze
Nests
nette
netto
Netze
neuem
neuen
neuer
neues
Neune
neunt
Neuöl
Neuss
Nexus
Nicäa
nicht
nicke
Nicki
nickt
Nidda
Niels
Niere
Niers
niese
niest
niete
Nigel
Niger
Nikes
Nikon
Nikos
nimmt
Ninas
Ninja
Niobs
nippe
nippt
niste
Nivea
Nixen
Nixon
Nizäa
Nizza
Noahs
nobel
noble
Nocke
nodös
Nokia
Nolde
nölen
nölst
Nolte
nölte
Nomen
Nonne
Noppe
Noras
Norma
norme
North
Notar
Noten
Nöten
nötig
Notiz
Novum
NSDAP
Nubuk
Nudel
Nugat
Nulpe
Numen
Nüsse
Nuten
Nutte
nutze
nütze
nutzt
nützt
Nylon
Oasen
Obama
obere
Obers
Obhut
obige
oblag
Oboen
Ochse
ocker
Ödeme
Odems
Odeon
ödere
ödest
ödete
Odeur
Odins
Odium
Ödnis
Ofens
offen
öffne
öfter
Oheim
Ohios
Ohren
Ohres
Okapi
oktal
Oktan
Oktav
Olafs
Ölbad
Oldie
Olegs
ölend
Ölens
Oleum
Olgas
Ölgas
ölige
olive
Olive
ollem
ollen
oller
olles
Olper
Olpes
ölten
öltet
Ölung
Olymp
Omaha
Omans
omega
Omens
Onkel
Onyxe
opake
Opale
Opapa
Opels
Opera
Opern
opfer
opfre
Opiat
Opitz
Opium
Optik
orale
Orang
Orbis
Orbit
Orcas
Ordal
Orden
Order
ordne
Orffs
Organ
Orgel
Orgie
Orion
Orkan
Orkus
Orlog
Ornat
orten
Ortes
ortet
Osaka
Osama
Oscar
Oschi
Oskar
Oslos
Osman
Osram
Ossis
Ostau
Osten
Otmar
Otter
Ottos
Ötzis
outen
outet
ovale
Ovals
Ovids
Oxfam
Oxide
Oxids
Oxyde
Oybin
Ozean
Ozons
paare
Paars
paart
Pablo
Pacht
packe
Packs
packt
Paddy
Padua
paffe
pafft
pagan
Pagen
Paket
Pakte
Pakts
Palma
Palme
Palms
Pampa
Pampe
Pamps
Panda
Panel
Panik
Panne
Paola
Paolo
Papas
Paper
pappe
Pappe
pappt
Papst
Papua
parat
Paria
Paris
Parka
parke
Pärke
Parks
parkt
Parma
Parse
Parte
Parts
Party
Pasch
Passa
passe
passé
Pässe
passt
Pasta
Paste
Patch
Paten
Pater
Patin
Patio
Patte
Patts
patze
patzt
pauke
Pauke
paukt
Paula
Pauli
Paulo
Pauls
Pauly
pause
Pause
paust
Pavia
Pawel
Peaks
Pechs
Pedal
Pedro
Peers
Pegel
Peggy
peile
peilt
pelle
pellt
Pelze
Penes
Penis
penne
pennt
Penny
peppe
peppt
Pepsi
Percy
perdu
perle
Perle
perlt
Perry
Perth
Perus
Pesos
Pesto
Peter
Petit
Petra
Petri
petto
petze
petzt
Pfade
Pfads
Pfahl
Pfalz
Pfand
Pfaue
Pfaus
Pfeil
Pferd
pfiff
Pflug
Pfote
Pfuhl
Pfühl
Pfund
Phase
phatt
Phlox
Phnom
Phöbe
Phyle
piano
picke
pickt
Piëch
Pieck
piepe
Pieps
piept
Piers
Pietà
Pikee
piken
pikse
pikst
pikte
Pille
Pilot
Pilze
Pimpf
Pings
Pinie
pinke
pinne
Pinne
pinnt
Pinot
Pinte
Piotr
Piper
Pippi
Pirat
Pirna
Pirol
Pisas
pisse
Pisse
pisst
Piste
Pixel
Pizza
Pjotr
plage
plagt
Plaid
plane
Pläne
Plans
plant
Plato
platt
Platz
Playa
Plaza
Plebs
Plena
Plins
plopp
Plots
plump
Pluto
Pneus
Pöbel
poche
pocht
Pocke
Podex
Poems
pofen
pofst
pofte
Point
Pokal
Poker
polar
polen
Polen
polig
Polin
Polio
Polis
Polka
Polle
Polos
Polyp
Pomps
pönal
Ponte
Ponys
poole
Pools
poolt
Popel
Popen
Popos
poppe
poppt
Poren
Porno
porös
Porta
Porti
Porto
Ports
Posen
Posse
poste
Potis
Potte
Pötte
Power
Prada
Prado
präge
Prags
prägt
Praha
prall
preis
Preis
Priel
Priem
pries
prima
Prime
print
Print
Prinz
Prior
Prise
PRISM
probe
Probe
probt
Profi
Prolo
Promi
Prosa
prost
Protz
Proxy
prüde
prüfe
prüft
Prunk
Psalm
Pucks
Pudel
Puder
pudre
Puffs
pulen
Pulke
Pulks
Pulle
Pulli
Pulpe
pulse
Pulse
pulst
pulte
Pulte
Pults
Pumas
pumpe
Pumpe
Pumps
pumpt
Punks
Punkt
Puppe
pupse
pupst
Püree
purem
puren
purer
pures
Purim
Purin
pushe
pusht
Pussy
puste
Puste
Puten
Puter
Putin
Putte
Putto
Pütts
putze
putzt
Pylon
Qatar
Quais
quake
quäke
quakt
quäkt
quäle
Quali
Qualm
quält
Quant
Quark
Quart
Quarz
quasi
Quast
Queen
Quell
quere
quert
Quest
Queue
Quick
quill
Quinn
Quint
Quirl
Quito
quitt
quoll
Quota
Quote
Rabat
Rabbi
Raben
Rache
räche
rächt
Radar
Radau
Radek
Räder
Rades
Radio
radle
Radon
raffe
rafft
ragen
ragst
ragte
Rahel
Rahen
Rahms
rahmt
Raine
Rains
Rakel
räkle
Ralfs
Ralle
Ralph
Rambo
ramme
rammt
Ramón
Rampe
Ranch
Rande
Ranft
Range
ränge
Ränge
Rangs
rangt
ranke
Ränke
rankt
Ranze
Raoul
rapid
Rappe
rappt
rarem
raren
rarer
rares
rasch
rasen
Rasen
Raser
Räson
Rasse
raste
Rasur
raten
Räten
Rates
ratet
Rätin
ratio
rätst
Ratte
ratze
ratzt
raube
Raubs
raubt
rauch
Rauch
Räude
Raudi
rauem
rauen
rauer
raues
raufe
rauft
Rauke
Raume
räume
Raums
räumt
raune
raunt
Raupe
raust
raute
Ravel
Raver
Rayon
reale
Realo
Reben
Rebus
reche
recht
Recht
recke
reckt
recto
reden
redet
Reede
reell
Regal
Regel
regem
regen
Regen
reger
reges
Regex
Regie
regle
regne
regst
regte
Rehen
reibe
Reibe
reibt
reich
Reich
reife
Reife
reift
reihe
Reihe
reiht
reime
Reims
reimt
reine
reise
Reise
reiße
reißt
reist
reite
reize
Reize
reizt
rekle
relax
remis
Remix
renal
Renée
Renés
renke
renkt
renne
rennt
Rente
Rerum
Resch
Reset
Reste
Rests
retro
rette
reuen
reuig
Reuse
reute
Revue
Rhein
Rhema
Rhode
Rhone
Rhône
Riads
Ricas
Ricke
Ricky
riebe
riebt
riefe
rieft
Riege
Riese
riete
Riffe
Riffs
Rilke
Rille
Rinde
Rinds
ringe
rings
ringt
rinne
rinnt
Rioja
Rippe
Rispe
Risse
risst
Ritas
Riten
ritte
Ritus
ritze
ritzt
robbe
Robbe
robbt
Roben
Robin
Robot
röche
rocht
röcht
rocke
Röcke
Rocks
rockt
Rocky
Rodel
roden
Rodeo
rodet
Rodin
rodle
Rogen
Roger
rohem
rohen
roher
rohes
Rohöl
Rohre
röhre
Rohrs
röhrt
Rolex
Rolfs
rolle
Rolle
Rolli
Rollo
rollt
Roman
Romeo
Römer
Rommé
Romys
Ronde
Rondo
Ronja
Ronny
Rosen
Roses
rosig
Rosis
Rosse
roste
röste
Rösti
Rötel
rotem
roten
röten
roter
röter
rotes
rötet
Rotor
rotte
rotze
Rotze
rotzt
Rouen
Rouge
Route
Rover
Rowdy
royal
Royce
Rubel
Rüben
rüber
Rubin
Rubra
rucke
rücke
Rucks
ruckt
rückt
Rudel
rüdem
rüden
Ruder
rüder
rüdes
Rudis
rufen
Rufer
Rufes
rufst
Rugby
rügen
rügst
rügte
ruhen
ruhig
rühme
Ruhms
rühmt
rühre
rührt
ruhst
ruhte
Ruine
Ruins
rülps
Rumba
Rumor
Rumpf
rumse
rumst
runde
Runde
Runen
Runge
Rüpel
rupfe
rupft
Rupie
Ruppe
rural
Rushs
Russe
rußen
Rußes
rußig
rußte
rüste
Ruten
Ruths
Rutte
Ruwer
Saale
Saals
Säbel
Sache
Sachs
sacht
sacke
Säcke
Sacks
sackt
säend
Säens
Safes
Säfte
Safts
sagen
Sagen
sägen
Sägen
Sager
sagst
sägst
sagte
sägte
Sahel
sahen
sähen
sähet
Sahib
sahne
sahnt
sahst
Saint
Saite
Sakko
Sakra
Salam
Salär
Salat
salbe
Salbe
salbt
Saldo
Salem
Sälen
Sally
Salon
Salsa
Salto
Salut
Salve
salze
Salze
salzt
Samba
Samen
sämig
Sammy
Samoa
Samos
Samts
Sanaa
Sande
Sands
Sandy
sanft
sänge
sangt
sänke
sankt
sänne
sannt
Santa
Sanyo
Sarah
Saras
Särge
Sargs
Sarin
Saris
Sasse
saßen
säßen
säßet
Satan
säten
sätet
Satin
satte
Satyr
Satze
Sätze
Sauce
Saudi
sauen
Säuen
sauer
saufe
sauft
säuft
sauge
säuge
saugt
säugt
Säule
Sauls
säume
Säume
Saums
säumt
Sauna
saure
Säure
sause
saust
saute
Savoy
Scala
Scans
schab
Schaf
Schah
schal
Schal
Scham
schäm
Schar
schau
Schau
scher
scheu
Schis
Schmu
schob
schon
schön
schor
Schoß
Schot
Schub
schuf
Schuh
Schur
Score
Scott
Scout
SEATO
sechs
Sedan
Seele
Segel
Segen
Segge
segle
segne
sehen
Seher
sehne
Sehne
sehnt
Seide
seien
seife
Seife
seift
Seiko
seile
Seils
seilt
seine
seins
Seins
seist
Seite
Sekte
Sekts
selbe
Selen
selig
Semem
Semit
Senat
sende
Senfs
senge
sengt
senil
senke
senkt
Senne
Señor
Sense
Senta
Seoul
Sepps
Serbe
Seren
Serge
Serie
Serin
serös
Serum
Sesam
Setup
setze
setzt
seufz
Sexes
Sexta
Sexte
Sexus
Shake
Sharp
Shaws
Shell
Shirt
Shoah
Shops
Shows
Siams
Sibiu
Sicht
siebe
Siebe
Siebs
siebt
siech
siede
siege
Siege
Siegs
siegt
siehe
sieht
Siele
Siels
Siena
sieze
siezt
Sigel
Siggi
Sigle
sigma
Sikhs
Silbe
Silke
Silos
Silur
Simon
Simse
Sinai
singe
singt
sinke
sinkt
sinne
Sinns
sinnt
Sinti
Sinus
Sioux
Sippe
Sirup
Sisal
Sissi
Sissy
Sitar
Sites
Sitte
sitze
Sitze
sitzt
Skala
Skalp
skate
Skats
Skier
Skill
Skins
Skoda
Skunk
Skype
Slang
Slawe
Slick
Slips
Slots
Slums
smart
Smogs
Snack
Snobs
Soaps
Socke
Sodas
Soden
Sodom
Soest
Sofas
sofft
Sofia
Sofie
softe
sogar
sogen
Soges
sogst
Sohle
Sohne
söhne
Sohns
söhnt
solar
solch
Solde
Solds
Solei
Solen
Solid
solle
sollt
Solon
Solos
somit
Somme
Sonar
Sonde
Songs
Sonja
sonne
Sonne
sonnt
sonor
sonst
Sonys
sooft
Sorbe
Sören
Søren
sorge
Sorge
sorgt
sorry
Sorte
Soßen
Souks
Sound
South
sowie
Sozis
Space
spähe
späht
Spalt
Späne
spann
Spans
Spant
SPARC
spare
spart
spaße
Späße
spaßt
späte
Spatz
Speck
Speed
Speer
speie
speit
Spelz
sperr
Spezi
Spice
Spiel
spien
Spieß
spiet
Spike
Spill
Spina
Spind
Spins
Spion
spitz
Spitz
Split
Spore
Sporn
Sport
Spots
Spott
Spray
Spree
Spreu
Sprit
spröd
spuke
Spuks
spukt
spule
spüle
Spüli
spult
spült
Spund
spüre
Spurt
spürt
spute
SpVgg
Squaw
Staat
Stäbe
Stabs
stach
Stack
Stade
Stadt
Stage
stahl
Stahl
stakt
Stall
Stamm
stand
Stand
stank
starb
Stare
stark
starr
Stars
Start
Stasi
statt
Staub
staue
Staus
staut
Steak
steck
Stege
Stegs
stehe
steht
steif
steig
steil
Stein
Steiß
Stele
stell
Steno
Stenz
Stern
Sterz
stete
Stetl
stets
Steve
Steyr
stich
Stich
Stick
stieg
Stiel
Stier
stieß
Stift
Stile
still
Stils
Stino
Stipp
stirb
Stirn
stöbe
Stock
Stoff
Stola
stolz
Stolz
Stone
stopf
stopp
Store
störe
Storm
Störs
stört
Story
stoße
Stöße
stoßt
stößt
Streb
streu
Streu
Strip
Stroh
Strom
Stube
Stuck
Stück
Studi
stufe
Stufe
stuft
Stuhl
Stuka
stumm
Stunk
Stunt
Stupa
Stups
sture
Sturm
Sturz
Stuss
Stute
StVZO
style
Style
stylt
Suada
Suade
suche
Suche
sucht
Sucht
Sudan
Süden
sudle
Sufis
suhle
suhlt
sühne
Sühne
sühnt
Suite
Sujet
Sulky
sulze
Sülze
sulzt
Sumer
summa
summe
Summe
summt
Sumpf
Sünde
Suomi
super
Suppe
Supra
Suren
surfe
surft
surre
surrt
Susan
Sushi
Susis
süßem
süßen
süßer
süßes
süßte
Svens
SWAPO
Swift
Swing
Swiss
Sylts
Syrer
Syrte
Szene
Tabak
Tabor
Tábor
Tabus
Tacho
Tadel
tadle
Tafel
tafle
Tafts
tagen
Tages
tagst
tagte
Taiga
Takel
takle
takte
Takts
Talar
Taler
Täler
Tales
Talgs
Talks
Talon
Talus
Tamil
Tands
Tanga
Tango
Tangs
Tanja
tanke
Tanks
tankt
Tanne
Tante
tanze
Tänze
tanzt
Tapas
Tapes
Tapet
Tapir
tappe
tappt
tapse
tapst
Tarif
tarne
tarnt
Tarot
Tartu
Taser
Tasks
Tasse
taste
Taste
Tatar
taten
täten
Täter
tatet
tätet
tätig
Tatra
tatst
Tatze
taube
tauen
Taues
taufe
Taufe
tauft
tauge
taugt
taust
taute
Taxen
Taxis
Taxon
Taxus
TByte
Teams
Teddy
Teeei
Teens
Teeny
teere
Teers
teert
Tegel
Teich
Teige
Teigs
teile
Teile
teils
teilt
Teins
Teint
Telex
Tells
Tempi
Tempo
Tenne
Tenno
Tenor
Terme
Terms
Terra
Terry
Tesla
Tessa
teste
Tests
teuer
Teufe
teure
Texas
Texel
texte
Thais
Thein
Theke
Thema
Theos
These
theta
Thiel
Thilo
Thing
Thora
Thorn
Thors
Thron
Thule
Thurn
Tiara
Tiber
Tibet
ticke
Ticks
tickt
Tiden
Tieck
tiefe
Tiefe
Tiefs
Tiere
Tiers
Tiger
Tilde
tilge
tilgt
Tills
Tilly
timen
Timer
Times
Timms
Timmy
Timor
Tinas
Tinte
Tipis
tippe
Tipps
tippt
Tirol
Tisch
Titan
Titel
Titer
Titos
Titte
Titus
Toast
Tobak
toben
tobst
tobte
Toddy
Todes
Tofus
Togen
Togos
token
Tokio
Tokyo
tolle
tollt
Tommy
Tomsk
tonal
Tonen
tönen
Toner
Tones
Tonga
Tonic
tonig
Tonne
tönst
tönte
Tonus
Tools
Topas
Töpfe
Topfs
Topoi
Topos
toppt
Toren
Tores
Torfe
Torfs
Törin
Torso
Torte
Torus
Tosca
tosen
toste
total
totem
Totem
toten
töten
toter
totes
tötet
Totos
Touch
tough
Touri
Tours
tourt
Tower
Toxin
trabe
Trabi
trabt
Track
Trade
träfe
Trafo
traft
trage
Trage
träge
tragt
trägt
Trail
Trakl
Trakt
tramp
Tramp
Trams
Trane
träne
Träne
trank
Trans
tränt
Trapp
Trara
Trash
träte
traue
Traum
träum
traut
Trebe
Treck
Treff
treib
Trema
Trend
trete
treue
Treue
Trias
Trick
trieb
Trieb
Trier
triff
Trift
Trike
trink
Trios
Trips
trist
tritt
Tritt
Troas
Troer
troff
tröge
trogt
Troja
Troll
Tropf
Tross
Trost
tröte
Trott
trotz
Trotz
trübe
trübt
Truck
Trude
Trudi
trüge
trugt
trügt
Truhe
Trumm
Trunk
Trupp
Trust
Tuben
Tubus
Tuche
Tuchs
Tücke
Tudor
tuend
Tuffe
Tuffs
Tukan
Tülle
Tülls
Tulpe
tumbe
Tumor
tunen
Tuner
Tunis
tunke
tunkt
tunst
Tunte
Tupel
tupfe
tupft
Turbo
Türen
Turin
türke
Türke
Turku
Turme
türme
Türme
Turms
türmt
turne
turnt
Tusch
Tusse
Tussi
tuten
Tüten
tutet
Tutor
Tutsi
Tutti
Tutus
Twain
Tweed
Tweet
Twens
Twist
Tylom
Typen
Typik
Typus
Tyros
Tyson
Übeln
Übels
übend
Übens
überm
übern
übers
Ubier
üblem
üblen
übler
übles
übrig
übten
übtet
Übung
Uchta
Udine
UdSSR
Ufern
Ufers
ufert
Uhren
ulken
ulkig
ulkst
ulkte
Ulkus
Ullas
Ulmen
Ulmer
ultra
Ultra
Umbau
Umber
umbog
Umbra
umgab
umher
umhin
umkam
umlud
umsah
umtue
umtun
umtut
Umweg
umzog
Umzug
unäre
Unart
unbar
Unfug
Ungar
ungut
UNHCR
Union
UNITA
Units
unken
unkte
Unmaß
Unmut
Unnas
Unrat
Unruh
unser
Untat
unten
unter
untot
Unzen
üppig
Urahn
Urals
uralt
Urans
urban
urbar
UrhWG
Uriel
urige
Urins
Urnen
Uroma
Uropa
Ursus
Urtyp
Usanz
Uschi
Usern
Users
Utahs
Utans
Uteri
Uvula
Vaduz
vagem
vagen
vager
vages
Vamps
Varia
Varix
VARTA
Varus
Vasen
Vater
Väter
Vatis
vegan
Vegas
Veith
Veits
velar
Velin
Venen
Venia
Venlo
Venns
venös
Venus
Verbs
Verdi
vergl
Verse
Verve
Vespa
Vesta
Vesuv
Vetos
Vichy
Vicki
Vicky
Video
Viech
Viehs
viele
Viere
viert
Vigil
Vikar
Villa
Vinci
Vinyl
Viola
Viole
Viper
viral
Viren
viril
Virus
Visit
Vista
Visum
vitae
vital
Viten
vitro
Vitus
Vlies
Vogel
vögel
Vögel
vögle
Vögte
Vogts
vogue
voilà
Voile
vokal
Vokal
volar
Volke
Volks
volle
Volta
Volte
Volvo
Vopos
vorab
voran
vorne
Voten
Votum
vulgo
Vulva
Waadt
Waage
Waben
wache
Wache
Wachs
wacht
Waden
Wadis
Wädli
Waffe
wagen
Wagen
wägen
Wagon
wagst
wägst
wagte
wähle
wählt
wähne
Wahns
wähnt
wahre
währe
wahrt
währt
Waise
Walde
Waldi
Walen
Wales
walke
walkt
walle
Wälle
Walls
wallt
Walöl
walte
walze
wälze
walzt
wälzt
Wampe
Wanda
Wände
Wange
wanke
wankt
Wanne
Wanst
Wanze
Waran
warbt
waren
Waren
wären
wäret
warft
warme
wärme
Wärme
wärmt
Warna
warne
warnt
warst
wärst
warte
warum
Warze
wasch
waten
watet
Watte
Watts
Wayne
weben
Weber
webst
webte
wecke
weckt
Wedel
weder
wedle
wegen
Wegen
Weges
wehen
wehre
Wehrs
wehrt
wehst
wehte
Weibe
weich
weide
weihe
Weihe
weiht
weile
Weile
Weill
weilt
weine
Weins
weint
weise
Weise
weiße
weißt
weist
weite
Weite
welch
Welfe
welke
welkt
welle
Welle
wellt
Welpe
Welse
wende
Wende
wenig
werbe
werbt
werde
werfe
werft
werke
Werks
werkt
Werra
Werst
werte
Werts
Wesel
Wesen
Weser
Wesir
Wespe
Wessi
Weste
wette
wetze
wetzt
Whigs
wiche
wichs
wicht
Wicht
Wicke
wider
widme
widre
wiege
Wiege
wiegt
Wiens
wiese
Wiese
Wiesn
wieso
wiest
Wikis
wilde
Wille
Willi
Willy
Wilma
Wilna
winde
Winde
Winds
winke
Winks
winkt
wippe
wippt
wirbt
wirft
wirke
wirkt
wirre
wirrt
wirst
Wirte
Wirts
Wisch
wisse
wisst
Witwe
Witze
wobei
Woche
Wodka
wofür
wogen
wögen
wöget
wogst
wogte
woher
wohin
Wohle
Wohls
wohne
wohnt
wölbe
wölbt
Wölfe
Wolff
Wolfs
Wolga
Wolke
wolle
Wolle
wollt
womit
Wonne
Woods
Woody
woran
worin
World
Worms
Worte
Wörth
Worts
worum
Wotan
wovon
wovor
Wrack
wrang
Wruke
wuchs
Wucht
wühle
wühlt
Wulff
Wulst
Wumme
wunde
Wunde
wuppe
wuppt
wurde
würde
Würde
Würfe
Wurfs
würge
würgt
wurme
Wurms
wurmt
Wurst
würze
Würze
würzt
wusch
wusle
wüste
Wüste
Wusts
wüten
wütet
Xaver
Xenie
Xenix
Xenon
Xerox
XHTML
XLIII
XLVII
XVIII
XXIII
XXVII
XXXII
XXXIV
XXXIX
XXXVI
Xylol
Yacht
Yahoo
Yards
Yetis
Yogas
Yogis
Yorck
Yorks
Young
Ypern
Yucca
Yukon
Zacke
zagen
zähem
zähen
zäher
zähes
zahle
zähle
zahlt
zählt
zahme
zähme
zähmt
Zähne
Zahns
Zähre
Zaire
Zäkum
Zange
zanke
zankt
zapfe
zapft
zappe
zappt
Zaren
Zarge
Zarin
zarte
Zäsur
Zaume
zäume
Zaums
zäumt
zäune
Zäune
Zauns
zäunt
zaust
Zebra
Zebus
zeche
Zeche
zecht
Zecke
Zeder
Zehen
zehnt
zehre
zehrt
zeige
zeigt
zeihe
zeiht
Zeile
Zeiss
Zeitz
Zelle
Zelot
zelte
Zelte
Zenit
zerre
zerrt
Zeter
zetre
zeuge
Zeuge
Zeugs
zeugt
zicke
zickt
Ziege
ziehe
zieht
ziele
Ziele
Ziels
zielt
zieme
ziemt
ziept
ziere
ziert
Zilie
Zille
Zilli
Zimts
zinke
Zinke
Zinks
zinkt
Zinne
Zinns
Zinse
Zions
zippe
Zippo
Zirbe
zirka
zirpe
zirpt
zisch
Zitat
Zitze
zivil
Zivis
Zobel
zockt
Zofen
zoffe
zofft
zogen
zögen
zöget
zogst
zögst
Zolas
zolle
Zölle
Zolls
zollt
zonal
Zonen
zoome
Zooms
zoomt
Zöpfe
Zopfs
Zorns
Zorro
Zosse
Zoten
zotig
Zotte
Zubau
Zuber
Zucht
zucke
zücke
zuckt
zückt
zudem
zugab
zügel
Zügel
Zügen
Zuges
zugig
zügig
zügle
zukam
Zulus
zumal
zumaß
zünde
Zunft
Zunge
zupfe
zupft
zurät
zürne
zürnt
zurre
zurrt
Zuruf
zusah
zutat
Zutat
zutun
Zutun
zutut
zuvor
zuzog
Zuzug
zwang
Zwang
Zweck
Zweig
zweit
Zwerg
zwick
zwing
Zwirn
Zwist
zwölf
Zyste
`;function pe(e){let t=new Map;for(let n of e){let e=typeof n==`string`?{word:n}:n,r=t.get(e.word.length);r?r.push(e):t.set(e.word.length,[e])}return{random(e){let n=t.get(e);if(n===void 0||n.length===0)throw Error(`createAnswerSource: no ${e}-letter words`);return n[Math.floor(Math.random()*n.length)]}}}function me(e){let t=new Set(e);return{has:e=>t.has(e)}}function he(e){let t=[];for(let n of e.split(`
`)){let[e=``,r=``,i=``,a=``,o=``]=ge(n);if(!/^\d+$/.test(e.trim()))continue;let s=r.trim().toLowerCase();s&&t.push({word:s,info:{partOfSpeech:i.trim()||void 0,meaning:a.trim()||void 0,cefr:o.trim()||void 0}})}return t}function ge(e){let t=[],n=``,r=!1;for(let i=0;i<e.length;i++){let a=e[i];r?a===`"`?e[i+1]===`"`?(n+=`"`,i++):r=!1:n+=a:a===`"`?r=!0:a===`,`?(t.push(n),n=``):n+=a}return t.push(n),t}function _e(e){return e.split(`
`).map(e=>e.trim().toLowerCase()).filter(e=>e.length>0)}var ve={any:null,basic:[`A1`,`A2`],intermediate:[`B1`],advanced:[`B2`]},ye=[{id:`any`,label:`Any`,hint:`Mixed`},{id:`basic`,label:`A1–A2`,hint:`Easy`},{id:`intermediate`,label:`B1`,hint:`Medium`},{id:`advanced`,label:`B2`,hint:`Hard`}];function be(e){return ye.find(t=>t.id===e)?.label??e}var Y={wordLength:5,maxGuessCount:6,difficulty:`any`},xe=[4,5,6,7,8,9,10],Se=Object.assign({"../_dict/words-by-length/len_10.txt":()=>R(()=>import(`./len_10.BnPB8jsU.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_11.txt":()=>R(()=>import(`./len_11.Dx2tEBkE.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_12.txt":()=>R(()=>import(`./len_12.C6oAQEOc.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_13.txt":()=>R(()=>import(`./len_13.B15H-ag6.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_14.txt":()=>R(()=>import(`./len_14.CP0mCOuY.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_15.txt":()=>R(()=>import(`./len_15.BcMnG0Rm.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_16.txt":()=>R(()=>import(`./len_16._JqX7gYA.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_17.txt":()=>R(()=>import(`./len_17.BsdvW2OJ.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_18.txt":()=>R(()=>import(`./len_18.l5K44zJq.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_19.txt":()=>R(()=>import(`./len_19.Cp7Hvs9X.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_2.txt":()=>R(()=>import(`./len_2.BDilNb63.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_20.txt":()=>R(()=>import(`./len_20.Byw1eLIX.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_3.txt":()=>R(()=>import(`./len_3.uQfACURk.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_4.txt":()=>R(()=>import(`./len_4.MVXdE3SO.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_5.txt":()=>R(()=>Promise.resolve().then(()=>de).then(e=>e.default),void 0),"../_dict/words-by-length/len_6.txt":()=>R(()=>import(`./len_6.D62XCS9i.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_7.txt":()=>R(()=>import(`./len_7.ChvXtsed.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_8.txt":()=>R(()=>import(`./len_8.DSO4q2rZ.js`).then(e=>e.default),[]),"../_dict/words-by-length/len_9.txt":()=>R(()=>import(`./len_9.DpIm5FtM.js`).then(e=>e.default),[])}),X=new Map;for(let[e,t]of Object.entries(Se)){let n=Number(/len_(\d+)\.txt$/.exec(e)?.[1]);Number.isInteger(n)&&X.set(n,t)}var Ce=[...X.keys()].filter(e=>e>=3&&e<=16).sort((e,t)=>e-t),Z=he(ue),we=_e(fe),Te=new Map;function Q(e,t,n){let r=me(e),i=ve[n.difficulty],a=t.filter(e=>{if(e.word.length!==n.wordLength||!r.has(e.word))return!1;if(i===null)return!0;let t=e.info?.cefr;return t!==void 0&&i.includes(t)});return a.length===0?{ok:!1,reason:`empty`}:{ok:!0,pool:{answers:pe(a),dictionary:r}}}function Ee(){let e=Q(we,Z,Y);if(!e.ok)throw Error(`puzzlePools: the default pool is empty`);return e.pool}async function De(e){if(e.wordLength===Y.wordLength)return Q(we,Z,e);let t=X.get(e.wordLength);if(t===void 0)return{ok:!1,reason:`unavailable`};let n=Te.get(e.wordLength);return n===void 0&&(n=_e(await t()),Te.set(e.wordLength,n)),Q(n,Z,e)}var Oe=N(`<button class="text-foreground border-foreground rounded-xl border-2 px-4 py-2 text-sm font-bold uppercase transition duration-100 ease-out hover:scale-[1.03] active:scale-95 motion-reduce:transition-none">Close</button> <button class="bg-foreground text-background border-foreground rounded-xl border-2 px-4 py-2 text-sm font-bold uppercase transition duration-100 ease-out hover:scale-[1.03] active:scale-95 motion-reduce:transition-none">New Game</button>`,1),ke=N(`<dt class="text-muted-foreground text-xs tracking-wider uppercase">Type</dt> <dd> </dd>`,1),Ae=N(`<dt class="text-muted-foreground text-xs tracking-wider uppercase">Level</dt> <dd> </dd>`,1),je=N(`<dt class="text-muted-foreground text-xs tracking-wider uppercase">Meaning</dt> <dd> </dd>`,1),Me=N(`<dl class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm items-baseline"><dt class="text-muted-foreground text-xs tracking-wider uppercase">Word</dt> <dd> </dd> <!> <!> <!></dl>`),Ne=N(`<p> </p> <!>`,1),Pe=N(`<button class="text-foreground border-foreground rounded-xl border-2 px-4 py-2 text-sm font-bold uppercase transition duration-100 ease-out hover:scale-[1.03] active:scale-95 motion-reduce:transition-none">Keep playing</button> <button class="bg-foreground text-background border-foreground rounded-xl border-2 px-4 py-2 text-sm font-bold uppercase transition duration-100 ease-out hover:scale-[1.03] active:scale-95 motion-reduce:transition-none">New Game</button>`,1),Fe=N(`<p>This round will be lost.</p>`),Ie=N(`<div class="flex min-h-dvh flex-col items-center justify-start gap-3 py-3"><div class="flex flex-col items-center gap-0.5"><h1 class="text-xl font-extrabold tracking-widest uppercase">Wörtle</h1> <p class="text-muted-foreground text-[0.7rem] font-semibold tracking-wider uppercase"> </p></div> <p class="min-h-5 text-center text-sm font-semibold" aria-live="polite"> </p> <!> <div class="flex flex-wrap items-center justify-center gap-2"><button class="bg-foreground text-background border-foreground rounded-2xl border-2 px-4 py-2.5 text-sm font-bold uppercase transition duration-100 ease-out hover:scale-[1.03] active:scale-95 motion-reduce:transition-none">New Game</button> <button class="text-foreground border-foreground rounded-2xl border-2 px-4 py-2.5 text-sm font-bold uppercase transition duration-100 ease-out hover:scale-[1.03] active:scale-95 motion-reduce:transition-none">New Game With…</button></div> <!></div> <!> <!>`,1);function Le(e,f){L(f,!0);let m=M(f,`inputLocked`,3,!1),{wordLength:g,maxGuessCount:_}=a(()=>f.options),v=a(()=>le({answers:f.pool.answers,dictionary:f.pool.dictionary,wordLength:g,maxGuessCount:_,layout:f.layout})),y=c(()=>{if(v.status===`won`)return{title:`You win`,detail:`Solved in ${v.guesses.length} of ${_}.`};if(v.status===`lost`)return{title:`You lose`,detail:`The answer was ${v.answer.toUpperCase()}.`}}),b=c(()=>h(y)?`${h(y).title} · ${h(y).detail}`:v.rejected?`Not in word list.`:``),x=c(()=>v.answerInfo),C=s(!1),O=s(!1);d(()=>{v.status!==`playing`&&o(C,!0)});function k(e){e.ctrlKey||e.metaKey||e.altKey||e.isComposing||h(C)||h(O)||m()||v.press(e.key)&&e.preventDefault()}function A(){o(O,!1),o(C,!1),v.newGame()}function j(){v.status===`playing`&&v.guesses.length>0?o(O,!0):A()}var N=Ie();P(`keydown`,T,k);var F=w(N),I=t(F),R=u(t(I),2),z=l(R);n(I);var B=u(I,2),V=l(B,!0),H=u(B,2);ee(H,{get maxGuessCount(){return _},get wordLength(){return v.wordLength},get guesses(){return v.guesses},get current(){return v.current},get answer(){return v.answer},get invalid(){return v.rejected}});var U=u(H,2),W=t(U),G=u(W,2);n(U),ae(u(U,2),{get guesses(){return v.guesses},get answer(){return v.answer},get layout(){return f.layout},get onKeydown(){return v.press}}),n(F);var K=u(F,2);{let e=e=>{var t=Oe(),n=w(t),i=u(n,2);r(`click`,n,()=>o(C,!1)),r(`click`,i,A),S(e,t)},a=c(()=>h(y)?.title);J(K,{get title(){return h(a)},get open(){return h(C)},set open(e){o(C,e,!0)},actions:e,children:(e,r)=>{var a=Ne(),o=w(a),s=l(o,!0),c=u(o,2),d=e=>{var r=Me(),a=u(t(r),2),o=l(a,!0),s=u(a,2),c=e=>{var t=ke(),n=u(w(t),2),r=l(n,!0);i(()=>D(r,h(x).partOfSpeech)),S(e,t)};E(s,e=>{h(x).partOfSpeech&&e(c)});var d=u(s,2),f=e=>{var t=Ae(),n=u(w(t),2),r=l(n,!0);i(()=>D(r,h(x).cefr)),S(e,t)};E(d,e=>{h(x).cefr&&e(f)});var p=u(d,2),m=e=>{var t=je(),n=u(w(t),2),r=l(n,!0);i(()=>D(r,h(x).meaning)),S(e,t)};E(p,e=>{h(x).meaning&&e(m)}),n(r),i(()=>D(o,v.answer)),S(e,r)};E(c,e=>{h(x)&&e(d)}),i(()=>D(s,h(y)?.detail)),S(e,a)},$$slots:{actions:!0,default:!0}})}J(u(K,2),{title:`Start a new game?`,get open(){return h(O)},set open(e){o(O,e,!0)},actions:e=>{var t=Pe(),n=w(t),i=u(n,2);r(`click`,n,()=>o(O,!1)),r(`click`,i,A),S(e,t)},children:(e,t)=>{var n=Fe();S(e,n)},$$slots:{actions:!0,default:!0}}),i(e=>{D(z,`${g??``} letters · ${_??``} guesses ·
      ${e??``}`),D(V,h(b))},[()=>be(f.options.difficulty)]),r(`click`,W,j),r(`click`,G,function(...e){f.onconfigure?.apply(this,e)}),S(e,N),p()}m([`click`]);var $=(e,a=g,o=g,s=g,c=g)=>{var d=ze(),f=t(d,!0),p=u(f),m=e=>{var t=Re(),n=l(t,!0);i(()=>D(n,c())),S(e,t)};E(p,e=>{c()&&e(m)}),n(d),i(()=>{v(d,1,`rounded-xl border-2 px-3 py-1.5 text-sm font-bold transition duration-100 ease-out hover:scale-[1.03] active:scale-95 motion-reduce:transition-none ${a()?`bg-foreground text-background border-foreground`:`border-foreground/40 hover:border-foreground`}`),A(d,`aria-pressed`,a()),D(f,s())}),r(`click`,d,function(...e){o()?.apply(this,e)}),S(e,d)},Re=N(`<span class="ml-1 text-[0.65rem] font-normal opacity-70"> </span>`),ze=N(`<button type="button"> <!></button>`),Be=N(`<button class="text-foreground border-foreground rounded-xl border-2 px-4 py-2 text-sm font-bold uppercase transition duration-100 ease-out hover:scale-[1.03] active:scale-95 motion-reduce:transition-none">Cancel</button> <button class="bg-foreground text-background border-foreground rounded-xl border-2 px-4 py-2 text-sm font-bold uppercase transition duration-100 ease-out hover:scale-[1.03] active:scale-95 motion-reduce:transition-none disabled:opacity-60"> </button>`,1),Ve=N(`<p class="text-accent text-sm font-semibold" role="alert"> </p>`),He=N(`<fieldset class="flex flex-col gap-2"><legend class="text-muted-foreground mb-1 text-xs font-semibold tracking-wider uppercase">Letters</legend> <div class="flex flex-wrap gap-1.5"></div></fieldset> <fieldset class="flex flex-col gap-2"><legend class="text-muted-foreground mb-1 text-xs font-semibold tracking-wider uppercase">Guesses</legend> <div class="flex flex-wrap gap-1.5"></div></fieldset> <fieldset class="flex flex-col gap-2"><legend class="text-muted-foreground mb-1 text-xs font-semibold tracking-wider uppercase">Level</legend> <div class="flex flex-wrap gap-1.5"></div></fieldset> <p class="text-muted-foreground text-xs">Answers are filtered by CEFR level. Starting ends the round on screen.</p> <!>`,1);function Ue(e,m){L(m,!0);let g=M(m,`open`,15,!1),_=s(f(a(()=>({...m.current})))),v=s(void 0),y=s(!1);d(()=>{g()&&(o(_,{...m.current},!0),o(v,void 0))});async function b(){o(y,!0),o(v,void 0);try{o(v,await m.onapply({...h(_)}),!0)}finally{o(y,!1)}}J(e,{title:`New game`,get open(){return g()},set open(e){g(e)},actions:e=>{var t=Be(),n=w(t),a=u(n,2),o=l(a,!0);i(()=>{a.disabled=h(y),D(o,h(y)?`Loading…`:`Start`)}),r(`click`,n,()=>g(!1)),r(`click`,a,b),S(e,t)},children:(e,r)=>{var a=He(),o=w(a),s=u(t(o),2);k(s,20,()=>Ce,e=>e,(e,t)=>{{let n=c(()=>String(t));$(e,()=>h(_).wordLength===t,()=>()=>h(_).wordLength=t,()=>h(n))}}),n(s),n(o);var d=u(o,2),f=u(t(d),2);k(f,20,()=>xe,e=>e,(e,t)=>{{let n=c(()=>String(t));$(e,()=>h(_).maxGuessCount===t,()=>()=>h(_).maxGuessCount=t,()=>h(n))}}),n(f),n(d);var p=u(d,2),m=u(t(p),2);k(m,21,()=>ye,e=>e.id,(e,t)=>{$(e,()=>h(_).difficulty===h(t).id,()=>()=>h(_).difficulty=h(t).id,()=>h(t).label,()=>h(t).hint)}),n(m),n(p);var g=u(p,4),y=e=>{var t=Ve(),n=l(t,!0);i(()=>D(n,h(v))),S(e,t)};E(g,e=>{h(v)&&e(y)}),S(e,a)},$$slots:{actions:!0,default:!0}}),p()}m([`click`]);var We=N(`<!> <!>`,1);function Ge(e,t){L(t,!0);let n=[`qwertzuiopüß`,`asdfghjklöä`,`yxcvbnm`],r=s(Y),i=s(Ee()),a=s(0),c=s(!1);async function l(e){let t=await De(e);if(!t.ok)return t.reason===`unavailable`?`There is no word list for ${e.wordLength} letters.`:`No ${e.wordLength}-letter words at that level — pick another level.`;o(r,e),o(i,t.pool),o(a,h(a)+1),o(c,!1)}var d=We(),f=w(d);b(f,()=>h(a),e=>{Le(e,{get pool(){return h(i)},get options(){return h(r)},get layout(){return n},get inputLocked(){return h(c)},onconfigure:()=>o(c,!0)})}),Ue(u(f,2),{get current(){return h(r)},onapply:l,get open(){return h(c)},set open(e){o(c,e,!0)}}),S(e,d),p()}export{Ge as default};