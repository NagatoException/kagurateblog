import Image from 'next/image'
import { Inter } from 'next/font/google'
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, Tab, Tabs} from "@nextui-org/react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBilibili,
  faDiscord,
  faGithub,
  faTelegram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


export default function Home() {
  return (
      <main className="md:p-4 xl:p-10">
        (
        <Card className="w-11/12 md:w-2/3 p-4 mx-auto">
          <Avatar
              src="https://q2.qlogo.cn/headimg_dl?dst_uin=3245433516&spec=640"
              className="w-36 h-36 mx-auto"
              isBordered={true}
          />
          <h1 className="font-bold text-2xl md:text-3xl text-center">Kagurate Shirona&apos;s Website</h1>
          <h2 className="text-center">General Human</h2>
          <div className="flex justify-center gap-2">
            <Button
                isIconOnly
                color="default"
                variant="faded"
                aria-label="Bilibili"
                onClick={() => window.location.href="https://space.bilibili.com/3461579100129551"}
            >
              <FontAwesomeIcon icon={faBilibili} />
            </Button>
            <Button
                isIconOnly
                color="default"
                variant="faded"
                aria-label="Github"
                onClick={() => window.location.href="https://github.com/NagatoException"}
            >
              <FontAwesomeIcon icon={faGithub} />
            </Button>
            <Button
                isIconOnly
                color="default"
                variant="faded"
                aria-label="Twitter"
                onClick={() => window.location.href="https://x.com/nexcept8964"}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button
                isIconOnly
                color="default"
                variant="faded"
                aria-label="Discord"
                onClick={() => window.location.href="https://discord.com/users/1009422023790960730"}
            >
              <FontAwesomeIcon icon={faDiscord} />
            </Button>
            <Button
                isIconOnly
                color="default"
                variant="faded"
                aria-label="Telegram"
                onClick={() => window.location.href="https://t.me/NagatoException"}
            >
              <FontAwesomeIcon icon={faTelegram} />
            </Button>
          </div>
        </Card>
        <Card className="w-11/12 md:w-2/3 p-4 m-3 mx-auto">
        <Tabs aria-label="Options" className={`self-center h-full w-full`}>
          <Tab key="posts" title="文章">

          </Tab>
          <Tab key="about" title="关于">
            <div className={`text-left w-full h-full p-3`}>
              <h3 className={`font-bold text-2xl`}>关于</h3>
              <p>嘿，你好！我是Kagurate Shirona（曾用名：NagatoException(nexcept,nexception))，一个普通的人类。</p>
              <p>我是一名跨性别女性，但是你可以使用he/his she/her ve/vis xe/xyr ae/aer per/pers ey/eir zie/zer sie/hir thy/thm e/eir thry/their ze/hir sus/sussy称呼我。</p>
              <p>我目前属于休学状态。</p>
              <p>我是一名前端开发者，后端开发者，嵌入式开发者。</p>
              <p>我目前掌握的编程语言：HTML5, CSS3, JavaScript(React, Next.JS), Bootstrap, TailwindCSS, JQuery, PHP(laravel), GoLang, C/C++, Python, Shell</p>
              <p>目前正在学习的编程语言：Rust(不打算继续学了), Java</p>
              <p>我会使用的软件：KiCad, AltiumDesigner, Cadence, CATIA, SolidWorks, IntellijIdea, Kate</p>
              <p>我游玩的的游戏：Minecraft, Maimai, Muse Dash, A Dance of Ice and Fire, Blue Archive</p>
              <p>我的设备：</p>
              <p>台式机：</p>
              <ul>
                <li>主板：技嘉 AROUS X570 ELITE WIFI</li>
                <li>CPU：AMD Ryzen 9 5900X</li>
                <li>显卡：七彩虹 iGame GeForce RTX 4060 战斧</li>
                <li>内存：海盗船 DDR4 3600 32G*2</li>
                <li>主硬盘：英睿达 P5 1TB</li>
                <li>副硬盘：致钛 Ti670 2TB</li>
                <li>电源：海韵 850W</li>
                <li>机箱：LianLi不知道型号</li>
                <li>显示器：戴尔P2723D + AOC Q27B3</li>
                <li>键盘：客制化</li>
                <li>鼠标：罗技G502</li>
                <li>系统：ArchLinux</li>
              </ul>
              <p>笔记本电脑：</p>
              <ul>
                <li>型号：HP ZHAN 66 Pro A 14 G4</li>
                <li>CPU：AMD Ryzen 5 5600U</li>
                <li>内存：镁光 DDR4 3200 16G*2</li>
                <li>硬盘：致钛 Ti5000Plus 2TB</li>
              </ul>
              <p>手机：</p>
              <ul>
                <li>型号：Redmi Note 12 Turbo</li>
                <li>系统：EvolutionX</li>
              </ul>
              <p>1111</p>
            </div>
          </Tab>
          <Tab key="donate" title="捐助">
            <Link href="https://afdian.net/a/kagurate">< img width="200" src="https://pic1.afdiancdn.com/static/img/welcome/button-sponsorme.jpg" alt=""></img></Link>
            <Link href={"https://paypal.me/nexcept?country.x=C2&locale.x=en_US"}><img width="200" src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_200x51.png" alt="PayPal"></img></Link>
            <img src={"/1699304756469.jpg"} alt={"支付宝"} height={200} className={`h-96`}/>
            <img src={"mm_reward_qrcode_1699304718568.png"} alt={"微信"} className={`h-96`}/>
            <Link href={"https://www.vultr.com/?ref=9511687"}>买服务器我推荐你Vultr</Link><br/>
            <Link href={"https://miaona.one/#/register?code=Gn22p1Kg"}>代理我的域名推荐你Miaona</Link>
          </Tab>
          <Tab key="friends" title="友链">

          </Tab>
          <Tab key="contact" title="联系">

          </Tab>
        </Tabs>
    </Card>
    </main>
  )
}
