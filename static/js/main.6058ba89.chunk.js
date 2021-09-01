(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{468:function(n,e,t){"use strict";t.r(e);var r,a=t(1),i=t.n(a),o=t(43),c=t.n(o),s=t(6),l=t(64),d=t(7),m=t(37),b=t.p+"static/media/avatar.746613a8.jpg",p=t(113),x=t.n(p),h=t(117),j=t.n(h),g=t(118),u=t.n(g),f=t(119),v=t.n(f),O=t(120),w=t.n(O),y=t(0);var k,N=d.b.nav(r||(r=Object(s.a)(["\n            display: flex;\n            justify-content: space-between;\n            flex-direction: row;\n            align-items: center;\n            height: 100%;\n            width: 100%;\n            position: relative;\n            \n    \n            .avatar {\n            width: 10%;\n            text-align: center;\n            @media screen and (max-width:1200px) {\n                display: none;\n            }\n            img {\n            width: 100%;\n            max-width: 70px;\n            margin-top: 9px;\n            border-radius: 50%;\n            border:3px solid var(--border-color);\n            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n            transition: all 0.4s cubic-bezier(.63,-0.04,.23,.95);\n            transition: ease-in-out 0.4s;\n    }\n            img:hover {\n                box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n            animation: border-pulsate 2s infinite;\n\n    }\n}\n\n            .nav-items {\n            text-align: center;\n            display: flex;\n            .active-class {\n                background-color: var(--primary-color);\n                color: var(--icons);\n                border-radius: 10px;\n                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n                &:hover::before {\n                width: 0%;\n                height: 0%;\n                transition: none;\n            }\n\n        }\n            li {\n                display: block;\n\n            a {\n            display: block;\n            padding: 0.45rem 2rem;\n            margin: 0 1rem;\n            position: relative;\n            z-index: 10;\n            text-transform: uppercase;\n            font-weight: 600;\n            transition: ease-in-out 0.4s all;\n            @media screen and (max-width:750px) {\n            padding: 0.45rem .9rem;\n            margin: 0 .9rem;\n              \n\n            @media screen and (max-width:489px) {\n            padding: 0.45rem .7rem;\n            margin: 0 .7rem;\n                \n            }\n             \n            }\n            \n            @media screen and (max-width:427px) {\n            padding: 0.45rem .5rem;\n            margin: 0 .5rem;\n                \n            }\n            &:hover {\n                cursor: pointer;\n            color: var(--icons);\n\n            }\n            &::before {\n            content: '';\n            position: absolute;\n            bottom: 0;\n            right: 0;\n            width: 0;\n            height: 50%;\n            background-color: var(--primary-color);\n            transition: all 0.4s cubic-bezier(.63,-0.04,.23,.95);\n\n            z-index: -1;\n            border-radius: 10px;\n            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n\n                    \n                }\n            }\n            a:hover::before {\n                width: 100%;\n                height: 100%;\n            }\n        }\n\n        @media screen and (max-width:1200px) {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%,-50%);\n            .nav-item {\n                svg {\n                    font-size: 1rem;\n                }\n            }\n            }\n    }\n            footer {\n                width: 15%;\n                @media screen and (max-width:1200px) {\n                display: none;\n            }\n            p {\n            padding: 2rem 1rem;\n            font-size: .6rem;\n            text-align: center;\n         \n    }\n}\n\n            @keyframes border-pulsate {\n            0% { border-color:var(--border-pulsate-opacity-full)}\n            50%  {border-color: var(--subtitle-dark-color)}\n            100% {border-color:var(--border-pulsate-opacity-full)}\n}\n\n            "]))),z=function(){return Object(y.jsxs)(N,{children:[Object(y.jsx)("div",{className:"avatar",children:Object(y.jsx)("img",{src:b,alt:""})}),Object(y.jsxs)("ul",{className:"nav-items",children:[Object(y.jsx)("li",{className:"nav-item",children:Object(y.jsx)(m.b,{to:"/",replace:!0,activeClassName:"active-class",exact:!0,children:Object(y.jsx)(x.a,{})})}),Object(y.jsx)("li",{className:"nav-item",children:Object(y.jsx)(m.b,{to:"/about",replace:!0,activeClassName:"active-class",exact:!0,children:Object(y.jsx)(j.a,{})})}),Object(y.jsx)("li",{className:"nav-item",children:Object(y.jsx)(m.b,{to:"/resume",replace:!0,activeClassName:"active-class",exact:!0,children:Object(y.jsx)(u.a,{})})}),Object(y.jsx)("li",{className:"nav-item",children:Object(y.jsx)(m.b,{to:"/blogs",replace:!0,activeClassName:"active-class",exact:!0,children:Object(y.jsx)(v.a,{})})}),Object(y.jsx)("li",{className:"nav-item",children:Object(y.jsx)(m.b,{to:"/contact",replace:!0,activeClassName:"active-class",exact:!0,children:Object(y.jsx)(w.a,{})})})]}),Object(y.jsx)("footer",{className:"footer",children:Object(y.jsx)("p",{children:"@2021 My Portofolio Website"})})]})};var S=d.b.div(k||(k=Object(s.a)(["\nwidth: 90%;\nmin-height:90px;\nposition: fixed;\nheight: 10vh;\nbackground-color: var(--sidebar-dark-color);\noverflow: hidden;\ntransition: all 0.4s cubic-bezier(.63,-0.04,.23,.95);\nbottom: 2rem;\nleft: 50%;\ntransform: translateX(-50%);\nborder-radius: 30px;\nz-index: 99;\nbox-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\nmax-height: 100px;\n\n\n@media screen and (max-width:1200px) {\n    transform: translateY( 150%);\n    left: 5%;\n    z-index: 99;\n\n}\n\n\n"]))),E=function(n){var e=n.navToggle;return Object(y.jsx)(S,{className:"".concat(e?"nav-toggle":""),children:Object(y.jsx)(z,{})})};t(124);var F,I=t(125),T=t.n(I),A=t(127),B=t.n(A),C=t(126),_=t.n(C);var L,R=d.b.div(F||(F=Object(s.a)(["\nwidth: 100%;\nheight: 100vh;\nposition: relative;\n\n.p-particles-js {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: -1;\n}\n\n.typography {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    text-align: center;\n    width: 80%;\n\n    .icons {\n        display: flex;\n        justify-content: center;\n        margin-top: 1rem;\n        .icon {\n            border: 2px solid var(--border-color);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border-radius: 50%;\n            cursor: pointer;\n            transition: all .4s ease-in-out;\n            &:hover {\n                border: 2px solid #007bff;\n                color: #007bff;\n            }\n            &:not(:last-child) {\n                margin-right: 1rem ;\n            }\n            svg {\n                margin: .5rem;\n            }\n        }\n        .i-github {\n            &:hover {\n                border: 2px solid #461738;\n                color: #461738;\n            }\n    \n        }\n        .i-instagram{\n            &:hover {\n                border: 2px solid rgb(190,0,157);\n                color: rgb(190,0,157);\n            }\n        }\n    }\n}\n\n\n"]))),P=function(){return Object(y.jsxs)(R,{children:[Object(y.jsx)("div",{className:"p-particles-js"}),Object(y.jsxs)("div",{className:"typography",children:[Object(y.jsxs)("h1",{children:[" Hi, I'm ",Object(y.jsx)("span",{children:"Nidal Bayan"})]}),Object(y.jsx)("p",{children:"Welcome to my home! Here I present my creativity and presonality."}),Object(y.jsxs)("div",{className:"icons",children:[Object(y.jsx)("a",{href:"https://www.linkedin.com/in/nidal-bayan-417481198/",target:"_blank",className:"icon i-linkedin",children:Object(y.jsx)(T.a,{})}),Object(y.jsx)("a",{href:"https://www.instagram.com/bayannidal/",target:"_blank",className:"icon i-instagram",children:Object(y.jsx)(_.a,{})}),Object(y.jsx)("a",{href:"https://github.com/bayannidal",target:"_blank",className:"icon i-github",children:Object(y.jsx)(B.a,{})})]})]})]})},D=t.p+"static/media/img04.352f27f6.jpg",J=t.p+"static/media/img02.bd33841b.jpg",M=t.p+"static/media/img05.9d9cca5f.jpg",G=t.p+"static/media/img03.3ba8dc62.jpg";var H,W=d.b.a(L||(L=Object(s.a)(["\nbackground-color: var(--primary-color);\npadding: .8rem 2.5rem;\ncolor: white;\ncursor: pointer;\ndisplay: inline-block;\nfont-size: inherit;\ntext-transform: uppercase;\nposition: relative;\ntransition: all .4s ease-in-out;\nborder-radius: 10px;\ntransform: scale(1);\nbox-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n\n&:hover {\n\tanimation: pulse 2s infinite;\n\n}\n\n@keyframes pulse {\n\t0% {\n\t\ttransform: scale(0.95);\n\t\tbox-shadow: 0 0 0 0 var(--primary-color);\n        opacity: 0.7;\n\t}\n\n\t70% {\n\t\ttransform: scale(0.98);\n\t\tbox-shadow: 0 0 0 10px var(--primary-color);\n\t}\n\n\t100% {\n\t\ttransform: scale(0.95);\n\t\tbox-shadow: 0 0 0 0 var(--primary-color);\n\t}\n}\n"]))),Y=function(n){var e=n.title,t=n.link;return Object(y.jsx)(W,{href:t,target:"_blank",type:"submit",children:e})},q=t.p+"static/media/cv.fe9d79b8.pdf";var V,X=d.b.div(H||(H=Object(s.a)(["\nmargin-top: 5rem;\ndisplay: flex;\n@media screen and (max-width: 1200px) {\n    flex-direction: column;\n    .left-content{\n            margin-bottom: 2rem;\n\n        }\n    }\n    @media screen and (max-width: 500px) {\n    .left-content {\n    text-align: center;\n    }\n    }\n.left-content {\n    margin-right: 1rem;\n    width: 50%;\n    img {\n        height: 100px;\n        width: 95%;\n        border-radius: 10px;\n        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n\n        transition: ease-in-out 0.4s;\n        transition-delay:100ms ;\n        object-fit: cover;\n    }\n    img:hover {\n        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n        animation: border-pulsate 2s infinite;\n        border:5px solid var(--border-color);\n\n    }\n}\n.right-content {\n    padding-bottom: 1.4rem;\n    width: 100%;\n   \n    h4 {\n        font-size: 2rem;\n        color: var(--white-color);\n        text-align: center;\n        span {\n           font-size: 2rem;\n        }\n    }\n    .pargraph {\n        padding: 1rem 0;\n    }\n    .about-info {\n        display: flex;\n        padding-bottom: 1.4rem;\n\n        .info-title {\n            padding-right: 3rem;\n\n            p {\n                font-weight: 600;\n                position: relative;\n                \n            }\n\n        }\n       \n\n        .info-title, .info {\n        text-align: left;\n\n            p{\n                padding: .3rem 0\n            }\n        }\n    }\n \n}\n\n@media screen and (max-width: 1200px) {\n    flex-direction: column;\n    text-align: center;\n\n    .left-content{\n            margin-bottom: 2rem;\n            width: 100%;\n            text-align: center;\n\n        }\n    }\n  \n\n    @keyframes border-pulsate {\n    0%   { border-color:var(--border-pulsate-opacity-full)}\n    50%  { border-color: var(--subtitle-dark-color)}\n    100% { border-color:var(--border-pulsate-opacity-full)}\n}\n"]))),U=function(){return Object(y.jsxs)(X,{children:[Object(y.jsxs)("div",{className:"left-content",children:[Object(y.jsx)("img",{src:D,alt:""}),Object(y.jsx)("img",{src:J,alt:""}),Object(y.jsx)("img",{src:M,alt:""}),Object(y.jsx)("img",{src:G,alt:""})]}),Object(y.jsxs)("div",{className:"right-content",children:[Object(y.jsxs)("h4",{children:["I am, ",Object(y.jsx)("span",{children:"Nidal Bayan"})]}),Object(y.jsx)("p",{className:"pargraph",children:"As an aspiring Web Developer, everyday I strive to learn something new, something fun, something that is worth it. I always set new goals to get done challenging myself into a competitive race where I can achive new skills for my career or personal development."}),Object(y.jsxs)("div",{className:"about-info",children:[Object(y.jsxs)("div",{className:"info-title",children:[Object(y.jsx)("p",{children:"Full Name"}),Object(y.jsx)("p",{children:"Age"}),Object(y.jsx)("p",{children:"Nationality"}),Object(y.jsx)("p",{children:"Languages"}),Object(y.jsx)("p",{children:"Occupation"}),Object(y.jsx)("p",{children:"Location"})]}),Object(y.jsxs)("div",{className:"info",children:[Object(y.jsx)("p",{children:": Nidal Bayan"}),Object(y.jsx)("p",{children:": 21"}),Object(y.jsx)("p",{children:": Romanian"}),Object(y.jsx)("p",{children:": English, Romanian"}),Object(y.jsx)("p",{children:": Student"}),Object(y.jsx)("p",{children:": Cluj-Napoca, Romania"})]})]}),Object(y.jsx)(Y,{title:"Download CV",link:q})]})]})};var K,Q,Z,$=d.b.div(V||(V=Object(s.a)(["\nposition: relative;\ntext-align: center;\nh2 {\n color: var(--title-color);\nfont-size: 3rem;\nfont-weight: 600;\ntext-transform: uppercase;\nposition: relative;\npadding-bottom: .1rem;\n@media screen and (max-width: 496px) {\n        font-size: 2.4rem;\n    }\n@media screen and (max-width: 370px) {\n        font-size: 1.8rem;\n    }\n/* &::before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    width: 7.1rem;\n    height: .33rem;\n    background-color: var(--background-light-color-2);\n    border-radius: 15px;\n    left:0;\n}\n\n&::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    width: 3.5rem;\n    height: .33rem;\n    background-color: var(--primary-color);\n    border-radius: 15px;\n    left: 0;\n    opacity: .8;\n\n} */\nspan {\n    font-weight: 900;\n    color: var( --subtitle-dark-color);\n    font-size: 3.7rem;\n    position: absolute;\n    left: 10%;\n    top: 13%;\n    z-index: -1;\n    @media screen and (max-width: 620px) {\n        font-size: 2.8rem;\n    }\n    @media screen and (max-width: 496px) {\n        font-size: 2.6rem;\n    }\n    @media screen and (max-width: 370px) {\n        font-size: 2rem;\n    }\n}\n}\n"]))),nn=function(n){var e=n.title;return n.span,Object(y.jsx)($,{children:Object(y.jsxs)("h2",{children:[e," "]})})},en=d.b.div(K||(K=Object(s.a)(["\n\npadding: 5rem;\n    @media screen and (max-width: 642px){\n        padding: 4rem;\n    }\n\n    @media screen and (max-width: 571px){\n        padding: 4rem 1rem;\n    }\n"]))),tn=d.b.div(Q||(Q=Object(s.a)(["\npadding: 5rem 0;\n@media screen and (max-width: 400px){\n        padding: 2rem 0;\n    }\n"])));var rn,an=d.b.div(Z||(Z=Object(s.a)(["\n    background-color: var(--background-dark-grey);\n    border-left: 1px solid var(--border-color);\n    border-right: 1px solid var(--border-color);\n    border-top: 8px solid var(--border-color);\n    border-bottom: 1px solid var(--border-color);\n    border-radius: 10px;\n    transition: .4s ease-in-out;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n\n    \n    \n    @media screen and (min-width: 1000px) {\n        :not(:last-child){\n    margin-right: 1.2rem;\n   };\n    }\n\n    \n   @media screen and (max-width: 1000px) {\n   \n\n\n    :not(:last-child){\n    margin-bottom: 1.2rem;\n   };\n    }\n    &:hover {\n    border-top: 8px solid var(--primary-color);\n    transform: translateY(3px);\n\n    }\n    .container {\n        padding: 1.2rem;\n        text-align: center;\n        img {\n            width: 50%;\n        }\n        h4 {\n           color: var(--white-color);\n           font-size: 1.6rem;\n           padding: 1rem 0;\n           position: relative;\n\n           &::after {\n               content: '';\n               width: 100%;\n               background-color: var(--border-color);\n               height: 3px;\n               position: absolute;\n               left: 0;\n               bottom: 0;\n               border-radius: 10px;\n           }\n        }\n        p {\n            padding-bottom: .8rem 0;\n        }\n    }\n"]))),on=function(n){var e=n.image,t=n.title,r=n.paragraph;return Object(y.jsx)(an,{className:"service-card",children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("img",{src:e,alt:""}),Object(y.jsx)("h4",{children:t}),Object(y.jsx)("p",{children:r})]})})},cn=t.p+"static/media/js.572dc3f7.svg",sn=t.p+"static/media/css.3644e608.svg",ln=t.p+"static/media/html.bfe202ac.svg",dn=t.p+"static/media/react.2960564a.svg";var mn,bn=d.b.section(rn||(rn=Object(s.a)(["\nmargin-top: 5rem;\n.services {\n    margin-top: 5rem;\n    display: flex;\n    justify-content: space-between;\n\n    @media screen and (max-width: 1000px) {\n        display: flex;\n         justify-content: center;\n        align-items: center;\n        flex-direction: column;\n    }\n\n\n    @media screen and (min-width:1204px) and (max-width: 1350px) {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-gap: 1.5rem;\n\n    }\n\n    @media screen and (max-width: 500px) {\n    }\n\n}\n\n\n\n\n"]))),pn=function(){return Object(y.jsx)(tn,{children:Object(y.jsxs)(bn,{children:[Object(y.jsx)(nn,{title:"Services",span:"services"}),Object(y.jsxs)("div",{className:"services",children:[Object(y.jsx)(on,{image:cn,title:"JS",paragraph:"Lorem ipsum dolor sit amet consecteur adis"}),Object(y.jsx)(on,{image:sn,title:"CSS",paragraph:"Lorem ipsum dolor sit amet consecteur adis"}),Object(y.jsx)(on,{image:ln,title:"HTML",paragraph:"Lorem ipsum dolor sit amet consecteur adis"}),Object(y.jsx)(on,{image:dn,title:"REACT JS",paragraph:"Lorem ipsum dolor sit amet consecteur adis"})]})]})})};var xn,hn=d.b.section(mn||(mn=Object(s.a)(["\n\n\n"]))),jn=function(){return Object(y.jsx)(en,{children:Object(y.jsxs)(hn,{children:[Object(y.jsx)(nn,{title:"About me",span:"About me"}),Object(y.jsx)(U,{}),Object(y.jsx)(pn,{})]})})};var gn,un=d.b.div(xn||(xn=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    p{\n        padding-right: 1rem;\n        svg {\n            font-size: 1.8rem;\n        }\n    }\n    h3{\n        color: var(--white-color);\n        font-size: 1.8rem;\n    }\n"]))),fn=function(n){var e=n.icon,t=n.title;return Object(y.jsxs)(un,{children:[Object(y.jsx)("p",{children:e}),Object(y.jsx)("h3",{children:t})]})},vn=t(128),On=t.n(vn);var wn,yn=d.b.div(gn||(gn=Object(s.a)(["\n    padding-top: 15px;\n    display: flex;\n        /* margin-bottom: 3rem; */\n  \n    .left-content{\n        padding-left:  30px;\n        width: 50%;\n        max-width: 300px;\n        position: relative;\n        &:before {\n            content: '';\n            position: absolute;\n            left: -10px;\n            top: 5px;\n            height: 15px;\n            width: 15px;\n            border-radius:50%;\n            border: 2px solid var(--border-color);\n            background-color: var(--background-dark-color);\n        }\n     \n    }\n    .right-content {\n        padding-left: 5rem;\n        position: relative;\n\n        &::before {\n            content: '';\n            position: absolute;\n            left: 0;\n            top: 15px;\n            height: 2px;\n            width: 3rem;\n            background-color: var(--border-color);\n            border-radius: 10px;\n        }\n\n        h5 {\n            color: var(--primary-color);\n            font-size: 1.8rem ;\n            padding-bottom: .4rem;\n        }\n        h6 {\n            padding-bottom: .6rem;\n            font-size: 1.3rem;\n        }\n        @media screen and (max-width:807px) {\n        \n            h5 {\n                font-size: 1.5rem;\n            }\n            h6 {\n                font-size: 1rem;\n            }\n        \n    } \n\n \n    }\n\n    @media screen and (max-width:1200px) {\n        \n        display: flex;\n        flex-direction: column;\n        .left-content {\n            padding-left: 50px;\n            text-align: center;\n            margin-bottom: 2rem;\n        }\n\n        .right-content {    \n        padding-left: 2rem;\n\n        &::before {\n          height: 0;\n    \n      }\n  \n} \n        }\n    @media screen and (max-width:600px) {\n        \n        display: flex;\n        flex-direction: column;\n        .left-content {\n            padding-left: 50px;\n            text-align: center;\n            margin-bottom: 2rem;\n        }\n\n        .right-content {    \n        padding-left: 2rem;\n\n        &::before {\n          height: 0;\n    \n      }\n  \n} \n        }\n    \n  \n"]))),kn=function(n){var e=n.year,t=n.title,r=n.subTitle;return Object(y.jsxs)(yn,{children:[Object(y.jsx)("div",{className:"left-content",children:Object(y.jsx)("p",{children:e})}),Object(y.jsxs)("div",{className:"right-content",children:[Object(y.jsx)("h5",{children:t}),Object(y.jsx)("h6",{children:r})]})]})};var Nn,zn=d.b.section(wn||(wn=Object(s.a)(["\n.small-title {\n    padding-bottom: 3rem;\n}\n\n.u-small-title-margin {\n    margin-top: 4rem;\n}\n.resume-content {\n    border-left: 1px solid var(--border-color);\n    border-radius: 10px;\n}\n"]))),Sn=function(){var n=Object(y.jsx)(On.a,{});return Object(y.jsxs)(zn,{children:[Object(y.jsx)(nn,{title:"Resume",span:"resume"}),Object(y.jsxs)(tn,{children:[Object(y.jsx)("div",{className:"small-title",children:Object(y.jsx)(fn,{icon:n,title:"Education"})}),Object(y.jsxs)("div",{className:"resume-content",children:[Object(y.jsx)(kn,{year:"2019 - 2020",title:"International Business and Management",subTitle:"Rotterdam Business School"}),Object(y.jsx)(kn,{year:"2020 - Present",title:"Economics and International Affairs",subTitle:"Babes Bolyai University"})]}),Object(y.jsx)("div",{className:"small-title u-small-title-margin",children:Object(y.jsx)(fn,{icon:n,title:"Courses"})}),Object(y.jsxs)("div",{className:"resume-content ",children:[Object(y.jsx)(kn,{year:"2019 - 2020",title:"Intro in IT",subTitle:"Informal School of It"}),Object(y.jsx)(kn,{year:"2020 - Present",title:"Web Development (JavaScript)",subTitle:"Informal School of It"})]})]})]})};var En,Fn=d.b.div(Nn||(Nn=Object(s.a)(["\n    .progress-bar{\n      display:flex;\n      align-items: center;\n      p {\n          padding-right:1.1rem ;\n        }\n      .progress {\n          position: relative;\n          width: 100%;\n          height: .4rem;\n          background-color: var(--border-color);\n          border-radius: 10px;\n\n          span {\n            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n\n              position: absolute;\n              left: 0;\n              bottom: 0;\n              height: 100%;\n              background-color: var(--primary-color);\n          border-radius: 10px;\n\n          }\n      }\n    }\n"]))),In=function(n){var e=n.title,t=n.width,r=n.text;return Object(y.jsxs)(Fn,{children:[Object(y.jsx)("h6",{children:e}),Object(y.jsxs)("div",{className:"progress-bar",children:[Object(y.jsx)("p",{children:r}),Object(y.jsx)("div",{className:"progress",children:Object(y.jsx)("span",{style:{width:t}})})]})]})};var Tn,An=d.b.section(En||(En=Object(s.a)(["\n    .skills{\n    text-align: center;\n\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-row-gap: 2rem;\n        grid-column-gap: 3rem;\n\n        @media screen and (max-width: 700px) {\n            grid-template-columns: repeat(1, 1fr);\n        }\n    }\n\n"]))),Bn=function(){return Object(y.jsxs)(An,{children:[Object(y.jsx)(nn,{title:"My Skills",span:"My Skills"}),Object(y.jsx)(tn,{children:Object(y.jsxs)("div",{className:"skills",children:[Object(y.jsx)(In,{title:"HTML5",width:"80%",text:"80%"}),Object(y.jsx)(In,{title:"CSS3",width:"75%",text:"75%"}),Object(y.jsx)(In,{title:"JAVASCRIPT",width:"65%",text:"65%"}),Object(y.jsx)(In,{title:"JAVA",width:"30%",text:"30%"}),Object(y.jsx)(In,{title:"REACT JS",width:"60%",text:"60%"})]})})]})};d.b.div(Tn||(Tn=Object(s.a)(["\n\n"])));var Cn,_n=function(){return Object(y.jsxs)(en,{children:[Object(y.jsx)(Bn,{}),Object(y.jsx)(Sn,{})]})},Ln=[{id:1,title:"Spaceship Game",date:"01",month:"April",img:t.p+"static/media/spaceship.6717d8c7.png",link:"https://github.com/bayannidal/SIIT_Nidal_Bayan/tree/main/space-ship"},{id:2,title:"Rock Paper Scissors Game",date:"01",month:"April",img:t.p+"static/media/rockpaper.fe603d66.png",link:"https://github.com/bayannidal/SIIT_Nidal_Bayan/tree/main/06_week/Rock%20Paper%20Scissors"},{id:3,title:"Todo React",date:"01",month:"April",img:t.p+"static/media/todo-react.dfad5835.png",link:"https://github.com/bayannidal/projects/tree/main/todo"},{id:4,title:"Board Game",date:"01",month:"April",img:t.p+"static/media/boardgame.c6db7fbc.png",link:"https://github.com/bayannidal/SIIT_Nidal_Bayan/tree/main/06_week/Game"}];var Rn,Pn=d.b.div(Cn||(Cn=Object(s.a)(["\n    text-align: center;\n\n    .blog {\n\n        @media screen and (max-width:770px) {\n        grid-template-columns: repeat(1,1fr);\n\n        }\n        display: grid;\n        grid-template-columns: repeat(2,1fr);\n        grid-column-gap: 2rem;\n        grid-row-gap: 3rem;\n        .blog-item {\n            background-color: var(--background-dark-grey);\n            padding: 2rem 1rem;\n            border-radius: 10px;\n            transition: ease-in-out .4s;\n            overflow: hidden;\n            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n\n            &:hover{\n                transform: rotate(-1deg) scale(1.02);\n            }\n        }\n\n        .image {\n            width: 100%;\n            height: 95%;\n            padding-bottom: .5rem;\n            img {\n                z-index: 9;\n                position: relative;\n                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n\n                width: 100%;\n                height: 95%;\n                object-fit: cover;\n                border-radius: 10px;\n                transition: ease-in-out .4s;\n\n                &:hover {\n                    transform: translateY(-5px);\n                }\n            }\n        }\n        .title {\n            h4 {\n                color: var(--white-color);\n                font-size: 1.2rem;\n                transition: ease-in-out .4s;\n                z-index: 10;\n                position: relative;\n                &:hover {\n                    color:var(--primary-color);\n                }\n            }\n        }\n    }\n"]))),Dn=function(){return Object(y.jsx)(en,{children:Object(y.jsxs)(Pn,{children:[Object(y.jsx)(nn,{title:"Blogs",span:"blogs"}),Object(y.jsx)(tn,{className:"blog",children:Ln.map((function(n){return Object(y.jsx)("a",{href:n.link,target:"_blank",className:"blog-item",children:Object(y.jsxs)("div",{className:"image",children:[Object(y.jsx)("img",{src:n.img,alt:""}),Object(y.jsx)("div",{className:"title",children:Object(y.jsx)("h4",{children:n.title})})]})},n.id)}))})]})})};var Jn,Mn=d.b.div(Rn||(Rn=Object(s.a)(["\n    padding: 1.5rem 2rem;\n    background-color: var(--background-dark-grey);\n    display: flex;\n    align-items: center;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n    \n\n    &:not(:last-child) {\n    margin-bottom: 2rem;\n    }\n\n    .left-content {\n        padding: 1.5rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 2rem;\n        svg {\n            font-size: 2.3rem;\n        }\n    }\n\n    .right-content {\n    \n        p{\n        padding:.1rem 0;\n        }\n    }\n\n    @media screen and (max-width:449px) {\n                width: 100%;\n                padding: 1.2rem 1.5rem;\n             .left-content {\n                 padding: 0;\n                svg {\n                    font-size: 1rem;\n                }\n             }   \n        }\n    @media screen and (max-width:375px) {\n            width: 100%; \n        }\n"]))),Gn=function(n){var e=n.icon,t=n.title,r=n.contact;return Object(y.jsxs)(Mn,{children:[Object(y.jsx)("div",{className:"left-content",children:Object(y.jsx)("p",{children:e})}),Object(y.jsxs)("div",{className:"right-content",children:[Object(y.jsx)("h6",{children:t}),Object(y.jsx)("p",{children:r})]})]})},Hn=t(129),Wn=t.n(Hn),Yn=t(130),qn=t.n(Yn),Vn=t(131),Xn=t.n(Vn);var Un,Kn=d.b.section(Jn||(Jn=Object(s.a)(["\n    text-align: center;\n    padding: 5rem .5rem;\n    button {\n        background-color: transparent;\n        outline: none;\n        border: none;\n    }\n    .contact-section {\n        display:grid;\n        grid-template-columns: repeat(2,1fr);\n        grid-column-gap: 2rem;\n        @media screen and (max-width:978px) {\n        grid-template-columns: repeat(1,1fr);\n        .form-field {\n            margin-bottom: 2rem;\n        }\n        \n    }\n        .right-content {\n            display: grid;\n            grid-template-columns: repeat(1,1fr);\n        }\n        .contact-title {\n            h4 {\n                color: var(--white-color);\n                padding: 1rem 0;\n                font-size: 1.8rem;\n            }\n        }\n\n       \n        .form {\n            \n            width: 100%;\n           \n         \n            .form-field {\n                margin-top: 2rem;\n                position: relative;\n                width: 100%;  \n                label {\n                    position: absolute;\n                    left: 20px;\n                    top: -25px;\n                    display: inline-block;\n                    background-color: var(--background-dark-color);\n                    padding: 0 .5rem;\n                }\n                input {\n                    border: 1px solid var(--border-color);\n                    outline: none;\n                    background: transparent;\n                    height: 50px;\n                    padding: 0 15px;\n                    width: 100%;\n                    color: inherit;\n                    border-radius: 10px;\n                }\n            }\n            textarea   {\n                    background-color: transparent;\n                    border: 1px solid var(--border-color);\n                    outline: none;\n                    border-radius: 10px;\n                    color: inherit;\n                    padding: 1rem;\n                    width: 100%;\n                   \n\n                }\n                @media screen and (max-width:450px) {\n                 width:100%;\n                 margin: 0 auto;\n\n            }\n        }\n    }\n"]))),Qn=function(){var n=Object(y.jsx)(Wn.a,{}),e=Object(y.jsx)(qn.a,{}),t=Object(y.jsx)(Xn.a,{});return Object(y.jsxs)(Kn,{children:[Object(y.jsx)(nn,{title:"Contact",span:"contact"}),Object(y.jsxs)(tn,{className:"contact-section",children:[Object(y.jsx)("div",{className:"left-content",children:Object(y.jsxs)("form",{className:"form",action:"https://formsubmit.co/bayannidal13@gmail.com",method:"POST",children:[Object(y.jsx)("div",{className:"contact-title",children:Object(y.jsx)("h4",{children:"Get in touch"})}),Object(y.jsxs)("div",{className:"form-field",children:[Object(y.jsx)("label",{htmlFor:"name",id:"name",required:!0,children:"Name: "}),Object(y.jsx)("input",{type:"text",name:"name",id:"name"})]}),Object(y.jsxs)("div",{className:"form-field",children:[Object(y.jsx)("label",{htmlFor:"email",id:"email",children:"E-mail: "}),Object(y.jsx)("input",{type:"email",name:"name",id:"email",required:!0})]}),Object(y.jsxs)("div",{className:"text-area",children:[Object(y.jsx)("label",{htmlFor:"text-area",children:"Enter your Message: "}),Object(y.jsx)("textarea",{name:"message",id:"textarea",cols:"30",rows:"10",required:!0})]}),Object(y.jsx)("input",{type:"hidden",name:"_next",value:"https://bayannidal.github.io/react-deploy/#/thanks"}),Object(y.jsx)("div",{className:"form-field",children:Object(y.jsx)("button",{type:"submit",children:Object(y.jsx)(Y,{title:"Send"})})})]})}),Object(y.jsxs)("div",{className:"right-content",children:[Object(y.jsx)(Gn,{icon:n,title:"Phone",contact:"+40 (724) 578 450"}),Object(y.jsx)(Gn,{icon:e,title:"Email",contact:"bayannidal13@gmail.com"}),Object(y.jsx)(Gn,{icon:t,title:"Location",contact:"Cluj-Napoca, Romania"})]})]})]})},Zn=t(11),$n=t(487),ne=t(132),ee=t.n(ne),te=t(133),re=t.n(te),ae=t(486);var ie,oe=d.b.div(Un||(Un=Object(s.a)(["\ncolor: var(--white-color);\n.container {\n    animation: 1s ease-out 0s 1 slideInFromLeft;\n    font-size: 3rem;\n    text-align: center;\n\n}\n\n\n@keyframes slideInFromLeft {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n"]))),ce=function(){return Object(y.jsx)(oe,{children:Object(y.jsx)(en,{className:"container",children:"Thank you!"})})};var se,le=d.b.main(ie||(ie=Object(s.a)(["\nposition: relative;\nmin-height: 100vh;\n@media screen and (max-width:1200px) {\n    margin-left: 0;\n}\n\n\n"]))),de=function(){var n=Object(a.useState)("light-theme"),e=Object(l.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(!1),o=Object(l.a)(i,2),c=o[0],s=o[1],d=Object(a.useState)(!1),m=Object(l.a)(d,2),b=m[0],p=m[1];return Object(a.useEffect)((function(){document.documentElement.className=t}),[t]),Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)(E,{navToggle:b}),Object(y.jsx)("header",{children:Object(y.jsxs)("div",{className:"menu",children:[Object(y.jsx)("div",{className:"ham-burger-menu",children:Object(y.jsx)(ae.a,{onClick:function(){p(!b)},children:Object(y.jsx)(ee.a,{})})}),Object(y.jsxs)("div",{className:"light-dark-mode",children:[Object(y.jsx)("div",{className:"left-content",children:Object(y.jsx)(re.a,{})}),Object(y.jsx)("div",{className:"right-content",children:Object(y.jsx)($n.a,{value:"",checked:c,onClick:function(){"light-theme"===t?(r("dark-theme"),s(!1)):(r("light-theme"),s(!0))},inputProps:{"aria-label":""},size:"medium"})})]})]})}),Object(y.jsx)(le,{children:Object(y.jsxs)(Zn.c,{children:[Object(y.jsx)(Zn.a,{path:"/",exact:!0,children:Object(y.jsx)(P,{})}),Object(y.jsx)(Zn.a,{path:"/about",exact:!0,children:Object(y.jsx)(jn,{})}),Object(y.jsx)(Zn.a,{path:"/resume",exact:!0,children:Object(y.jsx)(_n,{})}),Object(y.jsx)(Zn.a,{path:"/blogs",exact:!0,children:Object(y.jsx)(Dn,{})}),Object(y.jsx)(Zn.a,{path:"/contact",exact:!0,children:Object(y.jsx)(Qn,{})}),Object(y.jsx)(Zn.a,{path:"/thanks",exact:!0,children:Object(y.jsx)(ce,{})})]})})]})},me=Object(d.a)(se||(se=Object(s.a)(["\n\n /* .light-theme {\n\n    --primary-color: #E89005;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #F9F8F8;\n    --background-dark-grey: #e4e4e4;\n    --border-color: #cbced8;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(232, 144, 5, .2);\n    --white-color: #151515;\n    --font-light-color: #313131;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #E4E4E4;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n    --subtitle-dark-color: rgba(232, 144, 5, .04);\n    --border-pulsate-opacity-full: rgba(232, 144, 5, 1);\n} */\n\n/* .light-theme {\n\n--primary-color: #E89005;\n--background-dark-color: #F9F8F8;\n--background-dark-grey: #e4e4e4;\n--border-color: #cbced8;\n--background-light-color-2: rgba(232, 144, 5, .2);\n--white-color: #151515;\n--font-light-color: #313131;\n--sidebar-dark-color: #E4E4E4;\n--subtitle-dark-color: rgba(232, 144, 5, .04);\n--border-pulsate-opacity-full: rgba(232, 144, 5, 1);\n}\n\n.dark-theme {\n    --primary-color: #007bff;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --subtitle-dark-color: rgb(0,123,255, 0.04);\n    --border-pulsate-opacity-full: rgba(0,123,255, 1);\n} */\n.light-theme {\n\n--primary-color: #002939;\n--background-dark-color: #e4cfa9;\n--background-dark-grey: #e4e4e4;\n--border-color: #E4E4E4;\n--background-light-color-2: rgba(232, 144, 5, .2);\n--white-color:#157575;\n--title-color: #002939;\n--font-light-color: #313131;\n--sidebar-dark-color: #E4E4E4;\n--subtitle-dark-color: rgba(232, 144, 5, .04);\n--border-pulsate-opacity-full: rgba(232, 144, 5, 1);\n--icons: #e4cfa9;\n}\n\n.dark-theme {\n    --primary-color: #007bff;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --subtitle-dark-color: rgb(0,123,255, 0.04);\n    --border-pulsate-opacity-full: rgba(0,123,255, 1);\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    list-style: none;\n    text-decoration: none;\n    font-family: 'Nunito', sans-serif;\n    font-size: 1.2rem;\n\n}\n\n@media screen and (max-width:500px) {\n    p{\n        font-size: .8rem;\n\n    }\n}\n\nbody {\n    background-color: var(--background-dark-color);\n    color: var(--font-light-color);\nposition: relative;\n}\n\n\na {\n    font-family: inherit;\n    color: inherit;\n    font-size: 1rem;\n}\n\nh1 {\n    font-size: 4rem;\n    color: var(--white-color);\n    span {\n        font-size: 4rem;\n\n    }\n}\n\nspan {\n    color: var(--primary-color);\n}\n\nh6 {\n            color: var(--white-color);\n            font-size: 1.2rem;\n            padding-bottom: .6rem;\n        }\n\n\n//Dark/Light Toggle\n\n.light-dark-mode {\n  position: fixed;\n  right: 0;\n  width: 6.5rem;\n  height: 2.5rem;\n  z-index: 99;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 2%;\n \n  svg {\n   display: flex;\n   align-items: center;\n   font-size: 1.7rem;\n   color: var(--white-color);\n   margin-top:8px;\n\n   }\n}\n.menu {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    z-index: 99;\n\n}\n.tsparticles-canvas-el {\n    z-index: -1;\n}\nheader {\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n\n}\n//Nav Toggle\n\n.nav-toggle {\n    z-index: 99;\n    transform: translateY(0);\n    left: 5%;\n\n}\n\n\n.ham-burger-menu {\n    display: none;\n    z-index: 15;\n    svg {\n        font-size: 2rem;\n    }\n}\n\n@media screen and (max-width:1200px) {\n    h1 {\n        font-size: 2.5rem;\n        span {\n            font-size: 2.5rem;\n        }\n    }\n    .ham-burger-menu {\n    display: block;\n}\n.light-dark-mode {\n    top:0;\n}\n\n} \n\n@media screen and (max-width:450px) {\n    h1 {\n        font-size: 1.6rem;\n        span {\n            font-size: 1.6rem;\n        }\n    }\n}\n"])));c.a.render(Object(y.jsxs)(i.a.StrictMode,{children:[Object(y.jsx)(me,{}),Object(y.jsx)(m.a,{children:Object(y.jsx)(de,{})})]}),document.getElementById("root"))}},[[468,1,2]]]);
//# sourceMappingURL=main.6058ba89.chunk.js.map