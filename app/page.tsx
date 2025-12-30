import Image from "next/image";
import {Spectral} from "next/dist/compiled/@next/font/dist/google";
import {Separator} from "@/components/ui/separator";
import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div className="w-full h-screen max-w-4xl mx-auto bg-white pt-5 px-5">
            <header>
                <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">Re:新やあ鯖の公式サイトへようこそ！</h1>
            </header>
            <main className="mt-5">
                <section>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">このサイトについて</h2>
                    <p className="leading-7 not-first:mt-6">このサイトはRe:新やあ鯖の情報についてまとめています<br />流石にこんなシンプルすぎるデザインで残して置きたくないので適度にデザイン変えます</p>
                    <p>GitHub repository for this website : <a href="https://github.com/midorin-Linux/minecraft" className="text-blue-500 hover:underline" target="_blank">https://github.com/midorin-Linux/minecraft</a></p>
                </section>
                <Separator className="my-4" />
                <section>
                    <div className="rounded border bg-white p-4 text-sm">
                        <div className="flex items-center gap-2 mb-0 border-b pb-2">
                            <span className="scroll-m-20 text-xl font-semibold tracking-tight">接続方法</span>
                        </div>
                        <div>
                            <p className="text-lg font-semibold scroll-m-20 mt-2">Java版</p>
                            <div className="mt-1 flex text-center">
                                <p className="text-lg">サーバーアドレス: ms.wayokan.com</p>
                            </div>
                            <Separator className="my-2" />
                            <p className="text-lg font-semibold scroll-m-20 mt-2">統合版</p>
                            <div className="mt-1 flex text-center">
                                <p className="text-lg">現在サポートされていませんが近日サポートします</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded border bg-white p-4 text-sm mt-2">
                        <div className="flex items-center gap-2 mb-0 border-b pb-2">
                            <span className="scroll-m-20 text-xl font-semibold tracking-tight">Dynmap</span>
                        </div>
                        <div>
                            <div className="mt-1 flex text-center">
                                <a href="https://map.wayokan.com" className="text-lg scroll-m-20 text-blue-500 hover:underline" target="_blank">https://map.wayokan.com</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="mt-5">
                <p className="leading-7 not-first:mt-6">© 2025 midorin-linux</p>
            </footer>
        </div>
  );
}
