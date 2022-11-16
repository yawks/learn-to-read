const Backgrounds = {
  LinearGradient: "linear-gradient",
  Waves: "waves",
  FloatingColorOrbs: "floating-color-orbs",
  GradientAnimation: "gradient-animation",
};

const setBackground = (backgroundType) => {
  Array.from(document.getElementsByClassName(".background-animation")).forEach(
    (element) => {
      element.remove();
    }
  );
  switch (backgroundType) {
    case Backgrounds.LinearGradient:
      setLinearBackground();
      break;
    case Backgrounds.Waves:
      setWavesBackground();
      break;
    case Backgrounds.FloatingColorOrbs:
      setFloatingColorOrbs();
      break;
    case Backgrounds.GradientAnimation:
      setGradientAnimation();
      break;
  }
};

const setLinearBackground = () => {
  let bg = document.createElement("div");
  bg.classList.add("bg");
  bg.classList.add("background-animation");
  document.body.appendChild(bg);

  let bg2 = document.createElement("div");
  bg2.classList.add("bg");
  bg2.classList.add("bg2");
  bg2.classList.add("background-animation");
  document.body.appendChild(bg2);

  let bg3 = document.createElement("div");
  bg3.classList.add("bg");
  bg3.classList.add("bg3");
  bg3.classList.add("background-animation");
  document.body.appendChild(bg3);

  document.getElementById("style-background-animation").innerHTML = `
  .bg {
    animation: slide 6s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #EE7293 50%, #C04567 50%);
    bottom: 0;
    left: -50%;
    opacity: .5;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
  }
  
  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 8s;
  }
  
  .bg3 {
    animation-duration: 10s;
  }`;
};

const setWavesBackground = () => {
  for (let i = 0; i < 3; i++) {
    let wave = document.createElement("div");
    wave.classList.add("wave");
    wave.classList.add("background-animation");
    document.body.appendChild(wave);
  }
  document.getElementById("style-background-animation").innerHTML = `
    body {
        margin: auto;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        overflow: auto;
        background: linear-gradient(315deg, rgba(101,0,94,1) 3%, rgba(60,132,206,1) 38%, rgba(48,238,226,1) 68%, rgba(255,25,25,1) 98%);
        animation: gradient 15s ease infinite;
        background-size: 400% 400%;
        background-attachment: fixed;
    }
    @keyframes gradient {
        0% {
            background-position: 0% 0%;
        }
        50% {
            background-position: 100% 100%;
        }
        100% {
            background-position: 0% 0%;
        }
    }
    
    .wave {
        background: rgb(255 255 255 / 25%);
        border-radius: 1000% 1000% 0 0;
        position: fixed;
        width: 200%;
        height: 12em;
        animation: wave 10s -3s linear infinite;
        transform: translate3d(0, 0, 0);
        opacity: 0.8;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
    
    .wave:nth-of-type(2) {
        bottom: -1.25em;
        animation: wave 18s linear reverse infinite;
        opacity: 0.8;
    }
    
    .wave:nth-of-type(3) {
        bottom: -2.5em;
        animation: wave 20s -1s reverse infinite;
        opacity: 0.9;
    }
    
    @keyframes wave {
        2% {
            transform: translateX(1);
        }
    
        25% {
            transform: translateX(-25%);
        }
    
        50% {
            transform: translateX(-50%);
        }
    
        75% {
            transform: translateX(-25%);
        }
    
        100% {
            transform: translateX(1);
        }
    }
        `;
};

const setFloatingColorOrbs = () => {
  document.getElementById("style-background-animation").innerHTML = `
  html {
    font: 5vmin/1.3 Serif;
    overflow: hidden;
    background: #123;
  }
  
  body, head {
    display: block;
    font-size: 52px;
    color: transparent;
  }
  
  head::before, head::after,
  body::before, body::after {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 3em;
    height: 3em;
    content: ".";
    mix-blend-mode: screen;
    animation: 44s -27s move infinite ease-in-out alternate;
  }
  
  body::before {
    text-shadow: 0.6898661646em 0.9705095523em 7px hsla(158.6971839055deg, 100%, 50%, 0.9), -0.0468375082em -0.3097722741em 7px hsla(101.3425466885deg, 100%, 50%, 0.9), -0.4895635795em 2.2473039515em 7px hsla(50.1309064494deg, 100%, 50%, 0.9), 0.4638513121em 1.1017930413em 7px hsla(181.4422713277deg, 100%, 50%, 0.9), 0.2746767863em 2.2703021236em 7px hsla(148.0141115397deg, 100%, 50%, 0.9), 1.1804683352em -0.0936790343em 7px hsla(131.9455835393deg, 100%, 50%, 0.9), 0.0334217516em 2.3894731497em 7px hsla(240.9283921584deg, 100%, 50%, 0.9), 1.2077309366em -0.2921065679em 7px hsla(6.2938578506deg, 100%, 50%, 0.9), -0.3885609709em 0.8529439548em 7px hsla(330.8712345267deg, 100%, 50%, 0.9), 1.9394169861em 0.2070252996em 7px hsla(250.9773602746deg, 100%, 50%, 0.9), 1.8994309645em 0.9088120552em 7px hsla(291.4991490857deg, 100%, 50%, 0.9), 1.6018065272em 0.3681971589em 7px hsla(189.5196317842deg, 100%, 50%, 0.9), 0.9792202826em 0.9327339568em 7px hsla(37.2963575814deg, 100%, 50%, 0.9), 1.697544881em 0.7671355491em 7px hsla(145.6840619854deg, 100%, 50%, 0.9), 2.1786173347em 2.3585808662em 7px hsla(28.5287910112deg, 100%, 50%, 0.9), 1.9418763704em 1.7806173071em 7px hsla(117.3036286574deg, 100%, 50%, 0.9), -0.0632359841em 0.9452078531em 7px hsla(230.6798877402deg, 100%, 50%, 0.9), 0.0919534907em 0.273117724em 7px hsla(35.1805579371deg, 100%, 50%, 0.9), 1.4867597615em 0.7994282969em 7px hsla(47.2455841036deg, 100%, 50%, 0.9), 2.482074508em 1.6493765384em 7px hsla(6.2116228293deg, 100%, 50%, 0.9), 1.1232947915em 0.9160969121em 7px hsla(322.6525822325deg, 100%, 50%, 0.9), 1.4912734762em 0.9818694111em 7px hsla(358.183700787deg, 100%, 50%, 0.9), 1.3746020038em 0.2717141368em 7px hsla(194.8352049606deg, 100%, 50%, 0.9), 0.6227210452em 0.0600652618em 7px hsla(31.3836221587deg, 100%, 50%, 0.9), 2.445969854em 2.2642227507em 7px hsla(260.8884570239deg, 100%, 50%, 0.9), -0.1598689639em 0.8433825385em 7px hsla(312.3756277141deg, 100%, 50%, 0.9), 1.9144950097em -0.3726333003em 7px hsla(250.9977921104deg, 100%, 50%, 0.9), 1.5161010316em 0.6320143327em 7px hsla(120.5339926914deg, 100%, 50%, 0.9), 1.8722021569em 0.50602357em 7px hsla(93.1111850146deg, 100%, 50%, 0.9), 0.6076083017em 1.9187441433em 7px hsla(1.9137054625deg, 100%, 50%, 0.9), 0.7966816299em 0.6297958115em 7px hsla(300.7806811595deg, 100%, 50%, 0.9), -0.1894546673em 1.8551622733em 7px hsla(259.0248048372deg, 100%, 50%, 0.9), 1.6806115362em 1.2490340202em 7px hsla(237.4448717381deg, 100%, 50%, 0.9), 0.5845660135em 0.3644272353em 7px hsla(177.1206554517deg, 100%, 50%, 0.9), 1.450155701em 1.0721265195em 7px hsla(305.6920898461deg, 100%, 50%, 0.9), 0.6373310959em -0.3111779721em 7px hsla(193.4706103186deg, 100%, 50%, 0.9), 2.2803458415em 1.9558093697em 7px hsla(51.7044048975deg, 100%, 50%, 0.9), 1.2358637758em 2.4536232831em 7px hsla(353.0531891492deg, 100%, 50%, 0.9), 2.0951927376em 1.1512113809em 7px hsla(263.123456222deg, 100%, 50%, 0.9), 2.1447835578em 0.6869666277em 7px hsla(245.2629589867deg, 100%, 50%, 0.9), 0.5963184554em 1.7487054933em 7px hsla(314.539571625deg, 100%, 50%, 0.9);
    animation-duration: 44s;
    animation-delay: -27s;
  }
  
  body::after {
    text-shadow: -0.230964908em 1.5488332221em 7px hsla(330.4794498569deg, 100%, 50%, 0.9), 2.331517829em 1.4899175288em 7px hsla(307.0009020546deg, 100%, 50%, 0.9), 1.6618289221em -0.2453097819em 7px hsla(355.2152531629deg, 100%, 50%, 0.9), 1.5261050245em 0.8015455894em 7px hsla(330.5721828364deg, 100%, 50%, 0.9), 1.948638081em 1.8532256901em 7px hsla(22.3391143762deg, 100%, 50%, 0.9), 1.7652478307em 2.4460233009em 7px hsla(103.8151124833deg, 100%, 50%, 0.9), 2.044429095em 1.2840091115em 7px hsla(189.3830014029deg, 100%, 50%, 0.9), 1.6279675966em -0.2964982506em 7px hsla(72.353321714deg, 100%, 50%, 0.9), 2.4542911773em 0.1880706407em 7px hsla(18.1925778895deg, 100%, 50%, 0.9), -0.1564905042em 0.4753267502em 7px hsla(291.4204003634deg, 100%, 50%, 0.9), -0.1723129042em 1.2590810994em 7px hsla(92.3221406088deg, 100%, 50%, 0.9), 0.8063039977em 1.7292685149em 7px hsla(55.7217105801deg, 100%, 50%, 0.9), 1.2083014367em 0.347182152em 7px hsla(107.8657686522deg, 100%, 50%, 0.9), 0.2965307036em 2.3105469503em 7px hsla(354.4718733828deg, 100%, 50%, 0.9), 2.230539553em 2.2199641425em 7px hsla(241.1314343941deg, 100%, 50%, 0.9), 1.6318207847em 1.1754485002em 7px hsla(281.8044212303deg, 100%, 50%, 0.9), 0.1665773967em 1.6889036787em 7px hsla(68.6920232787deg, 100%, 50%, 0.9), 1.5218102279em 1.1947280347em 7px hsla(41.7259940361deg, 100%, 50%, 0.9), 2.2965467175em 2.2960609611em 7px hsla(183.3813218258deg, 100%, 50%, 0.9), 0.8883843793em 1.784698563em 7px hsla(126.7233437888deg, 100%, 50%, 0.9), 0.0168833876em 0.2835344815em 7px hsla(235.8198932775deg, 100%, 50%, 0.9), 2.4004829194em 2.2227109862em 7px hsla(117.5918754678deg, 100%, 50%, 0.9), 2.3678934492em 0.8974322604em 7px hsla(177.1356150892deg, 100%, 50%, 0.9), -0.0737701004em 0.840962948em 7px hsla(213.4617272348deg, 100%, 50%, 0.9), 1.5348182731em 1.6223084546em 7px hsla(291.7106513322deg, 100%, 50%, 0.9), -0.1136695073em 0.390969624em 7px hsla(262.217037878deg, 100%, 50%, 0.9), 0.204654857em 0.0115064428em 7px hsla(74.6431360985deg, 100%, 50%, 0.9), -0.4062045496em 0.2291388556em 7px hsla(166.5373814667deg, 100%, 50%, 0.9), 1.9258379443em 1.2199576511em 7px hsla(290.251346542deg, 100%, 50%, 0.9), 0.2039011876em -0.0713480093em 7px hsla(213.837440105deg, 100%, 50%, 0.9), -0.0971892046em 1.884154597em 7px hsla(111.3848726247deg, 100%, 50%, 0.9), 1.1626488105em 0.0285238993em 7px hsla(124.0829789432deg, 100%, 50%, 0.9), 0.7546519463em 2.3850057493em 7px hsla(229.8949346025deg, 100%, 50%, 0.9), 1.7378678037em 0.8635962296em 7px hsla(197.883221936deg, 100%, 50%, 0.9), 2.0179309298em 0.3896916157em 7px hsla(56.3484781678deg, 100%, 50%, 0.9), -0.3015782418em 1.5963021062em 7px hsla(86.2415866992deg, 100%, 50%, 0.9), 1.0481356545em 0.4895956254em 7px hsla(287.9854822486deg, 100%, 50%, 0.9), 1.1219296719em 0.5740302015em 7px hsla(25.7300663079deg, 100%, 50%, 0.9), 2.3854627937em 0.4671193533em 7px hsla(339.5423556161deg, 100%, 50%, 0.9), -0.220179187em 1.30251938em 7px hsla(135.5745476693deg, 100%, 50%, 0.9), 0.1205010898em 1.9641363121em 7px hsla(246.721528022deg, 100%, 50%, 0.9);
    animation-duration: 43s;
    animation-delay: -32s;
  }
  
  head::before {
    text-shadow: 2.4796057556em 2.3000731337em 7px hsla(108.5085453553deg, 100%, 50%, 0.9), 0.9232143834em 2.3562975338em 7px hsla(217.2209529305deg, 100%, 50%, 0.9), 0.8470465325em -0.4372384801em 7px hsla(259.1139140592deg, 100%, 50%, 0.9), 2.3692045051em 1.9937754614em 7px hsla(86.469702881deg, 100%, 50%, 0.9), -0.2857444343em -0.1909511535em 7px hsla(240.2314125167deg, 100%, 50%, 0.9), 1.977202555em 1.7726652813em 7px hsla(198.2479313413deg, 100%, 50%, 0.9), 1.7355915138em 0.123328934em 7px hsla(161.9438826997deg, 100%, 50%, 0.9), 0.7055836184em 1.3846798089em 7px hsla(202.7078534438deg, 100%, 50%, 0.9), 2.4019076033em 1.7500996546em 7px hsla(254.063880953deg, 100%, 50%, 0.9), -0.316781349em 1.1723663366em 7px hsla(86.8542081761deg, 100%, 50%, 0.9), 1.5275515743em 2.1982266181em 7px hsla(137.0609735824deg, 100%, 50%, 0.9), 1.8846716753em 0.3987291698em 7px hsla(206.8232523625deg, 100%, 50%, 0.9), 1.912192132em 0.7221153545em 7px hsla(264.5585103284deg, 100%, 50%, 0.9), -0.1330949806em 0.106835329em 7px hsla(164.1999154239deg, 100%, 50%, 0.9), 0.1624410742em 1.5676920361em 7px hsla(52.4913745155deg, 100%, 50%, 0.9), -0.2423657763em -0.2963677172em 7px hsla(208.4995464907deg, 100%, 50%, 0.9), -0.3709676664em 1.7190559387em 7px hsla(127.4670664369deg, 100%, 50%, 0.9), 1.5363510692em 1.4416689243em 7px hsla(16.9525090887deg, 100%, 50%, 0.9), 1.5186555469em 0.0664133654em 7px hsla(171.3070205595deg, 100%, 50%, 0.9), 1.0339649181em 1.7924962834em 7px hsla(313.7745788985deg, 100%, 50%, 0.9), 1.2228917696em 1.3691741801em 7px hsla(267.347904581deg, 100%, 50%, 0.9), 0.6858851677em 2.0634515307em 7px hsla(156.4241902199deg, 100%, 50%, 0.9), 0.0615710985em 1.195729666em 7px hsla(95.584401519deg, 100%, 50%, 0.9), 2.1146599227em 1.1695549747em 7px hsla(228.206718203deg, 100%, 50%, 0.9), 2.3434941302em 0.1237567894em 7px hsla(213.1875219985deg, 100%, 50%, 0.9), -0.2306401594em 2.144943611em 7px hsla(25.5335953952deg, 100%, 50%, 0.9), -0.3509285462em -0.4842192683em 7px hsla(128.3313991819deg, 100%, 50%, 0.9), 1.2339525659em 2.3688393484em 7px hsla(208.1361987637deg, 100%, 50%, 0.9), 2.1904181913em 0.5036958962em 7px hsla(249.9750998896deg, 100%, 50%, 0.9), 1.5875194086em 2.4052958321em 7px hsla(157.9754680878deg, 100%, 50%, 0.9), 1.9173388323em 1.3266366056em 7px hsla(172.7703173712deg, 100%, 50%, 0.9), 0.7347905156em 2.2160280779em 7px hsla(77.7137114231deg, 100%, 50%, 0.9), 0.3675567879em 1.5145320315em 7px hsla(78.168704699deg, 100%, 50%, 0.9), 0.7233762575em 1.0111304061em 7px hsla(326.6547347582deg, 100%, 50%, 0.9), 0.7239291679em 2.4504250828em 7px hsla(209.2928135844deg, 100%, 50%, 0.9), -0.0290608603em 0.7593128116em 7px hsla(37.5057943448deg, 100%, 50%, 0.9), 0.037451515em 1.9550952562em 7px hsla(299.8558686051deg, 100%, 50%, 0.9), -0.0520728344em 0.815960233em 7px hsla(127.2215529566deg, 100%, 50%, 0.9), 0.111283702em -0.0498647873em 7px hsla(32.6298855894deg, 100%, 50%, 0.9), 0.9227732404em 0.1735779072em 7px hsla(272.1842840058deg, 100%, 50%, 0.9), 1.0891711108em 0.354284665em 7px hsla(129.0859042561deg, 100%, 50%, 0.9);
    animation-duration: 42s;
    animation-delay: -23s;
  }
  
  head::after {
    text-shadow: 0.8651833834em 1.918383653em 7px hsla(193.8245002105deg, 100%, 50%, 0.9), 2.3505679509em 1.4981240561em 7px hsla(148.055671317deg, 100%, 50%, 0.9), 1.3461456423em 0.0006464251em 7px hsla(358.9616324765deg, 100%, 50%, 0.9), 2.1809759828em 0.7401030469em 7px hsla(3.9699080209deg, 100%, 50%, 0.9), 0.7272744231em 1.3126382615em 7px hsla(281.804476046deg, 100%, 50%, 0.9), 2.4243701705em 0.5254251004em 7px hsla(356.6142508484deg, 100%, 50%, 0.9), -0.0111868927em 2.4200165901em 7px hsla(210.8991023992deg, 100%, 50%, 0.9), 1.8089677084em -0.3314691653em 7px hsla(137.1603870745deg, 100%, 50%, 0.9), 0.888490951em 0.1065758973em 7px hsla(298.028851912deg, 100%, 50%, 0.9), 2.086929168em 1.7986290907em 7px hsla(92.2320420472deg, 100%, 50%, 0.9), 1.1898957791em 0.849165309em 7px hsla(193.4307181714deg, 100%, 50%, 0.9), 0.3705008117em 1.3900079911em 7px hsla(247.0291014355deg, 100%, 50%, 0.9), 1.7743747714em 2.2399020853em 7px hsla(107.0567209989deg, 100%, 50%, 0.9), 1.5795656731em 0.7147598048em 7px hsla(354.9743199393deg, 100%, 50%, 0.9), 0.9716111063em 2.4493411104em 7px hsla(241.7768602882deg, 100%, 50%, 0.9), 0.367944635em 0.1492972988em 7px hsla(332.7838426977deg, 100%, 50%, 0.9), 1.6276352754em 1.4371550033em 7px hsla(22.7447892805deg, 100%, 50%, 0.9), 0.3640875773em -0.249166858em 7px hsla(283.0498517024deg, 100%, 50%, 0.9), 1.726889509em -0.3407827525em 7px hsla(13.6689728947deg, 100%, 50%, 0.9), 2.1756740368em 2.2766857163em 7px hsla(16.7044549692deg, 100%, 50%, 0.9), 1.8910370475em 2.1015210516em 7px hsla(74.5611252739deg, 100%, 50%, 0.9), 2.4103409284em -0.0673218085em 7px hsla(86.7998405063deg, 100%, 50%, 0.9), 1.9399396611em 2.4132720527em 7px hsla(156.3533569057deg, 100%, 50%, 0.9), 0.5806118709em 2.274478033em 7px hsla(88.0322695131deg, 100%, 50%, 0.9), 1.592521922em 0.5316351039em 7px hsla(148.301246828deg, 100%, 50%, 0.9), 0.4492367662em 0.2783003367em 7px hsla(249.1020140909deg, 100%, 50%, 0.9), 0.2223753244em 1.6291054094em 7px hsla(154.582267201deg, 100%, 50%, 0.9), 0.9022079779em -0.1848225584em 7px hsla(189.0842307533deg, 100%, 50%, 0.9), 2.2156405978em 1.3915705988em 7px hsla(240.2220263377deg, 100%, 50%, 0.9), 1.2863127866em 0.2469462338em 7px hsla(204.3715473032deg, 100%, 50%, 0.9), -0.1273064523em 1.0389692976em 7px hsla(27.7893402102deg, 100%, 50%, 0.9), 0.7633118565em 1.0349763561em 7px hsla(35.7802364653deg, 100%, 50%, 0.9), 1.2930012977em 0.125828996em 7px hsla(188.6257767017deg, 100%, 50%, 0.9), 2.3357684352em 1.9819054512em 7px hsla(335.9369716699deg, 100%, 50%, 0.9), -0.2889111575em -0.4200487218em 7px hsla(120.6135858918deg, 100%, 50%, 0.9), 0.0770105303em 2.1168985605em 7px hsla(344.3777891869deg, 100%, 50%, 0.9), 1.8220730762em -0.1659830162em 7px hsla(138.4219717801deg, 100%, 50%, 0.9), 1.3621546776em 2.1252493065em 7px hsla(250.8764419082deg, 100%, 50%, 0.9), 2.0570598361em 2.1441443702em 7px hsla(311.8612532504deg, 100%, 50%, 0.9), 0.5793861307em 0.1844953537em 7px hsla(6.5427068766deg, 100%, 50%, 0.9), 0.3467847461em 0.6458136474em 7px hsla(45.5112950627deg, 100%, 50%, 0.9);
    animation-duration: 41s;
    animation-delay: -19s;
  }
  
  @keyframes move {
    from {
      transform: rotate(0deg) scale(12) translateX(-20px);
    }
    to {
      transform: rotate(360deg) scale(18) translateX(20px);
    }
  }
      
    `;
};

const setGradientAnimation = () => {
  document.getElementById("style-background-animation").innerHTML = `
    body {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        height: 100vh;
    }
    
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    
    `;
};

//https://codepen.io/hylobates-lar/pen/bGEQXgm
//https://codepen.io/mohaiman/pen/MQqMyo
//https://codepen.io/baarbaracrr/pen/KKovmGb
//https://codepen.io/P1N2O/pen/pyBNzX
//https://alvarotrigo.com/blog/animated-backgrounds-css/
