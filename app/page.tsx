import Image from "next/image";
import {Spectral} from "next/dist/compiled/@next/font/dist/google";
import {Separator} from "@/components/ui/separator";
import { Button } from "@/components/ui/button"
import { Github, Map, Server, Info, Monitor, Gamepad2 } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-neutral-50 py-10 px-4">
            <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-neutral-200 p-6 sm:p-10">
                <header className="mb-8 text-center">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-neutral-900 lg:text-5xl">Re:新やあ鯖</h1>
                    <p className="mt-2 text-lg text-neutral-500 font-medium">公式サイトへようこそ！</p>
                </header>
                <main className="space-y-8">
                    <section>
                        <div className="flex items-center gap-2 mb-3">
                            <Info className="w-5 h-5 text-neutral-500" />
                            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-neutral-800">このサイトについて</h2>
                        </div>
                        <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-100 text-neutral-600 leading-7">
                            <p>このサイトはRe:新やあ鯖の情報についてまとめています</p>
                            <p className="text-sm text-neutral-400 mt-2">流石にこんなシンプルすぎるデザインで残して置きたくないので適度にデザイン変えます</p>
                        </div>
                        <div className="mt-4">
                            <a href="https://github.com/midorin-Linux/minecraft" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors hover:underline" target="_blank" rel="noreferrer">
                                <Github className="w-4 h-4" />
                                GitHub repository
                            </a>
                        </div>
                    </section>
                    <Separator />
                    <section>
                        <div className="flex items-center gap-2 mb-4">
                            <Server className="w-5 h-5 text-neutral-500" />
                            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-neutral-800">接続方法</h2>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-neutral-300">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-lg font-semibold flex items-center gap-2 text-neutral-800"><Monitor className="w-4 h-4" /> Java版</span>
                                    <span className="text-xs font-mono bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100">Java</span>
                                </div>
                                <p className="leading-7 not-first:mt-6 items-center">Address:</p>
                                <div className="mt-2 bg-neutral-100 rounded p-2 text-center border border-neutral-200">
                                    <p className="text-lg font-mono text-neutral-800">mc.wayokan.com</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-neutral-300">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-lg font-semibold flex items-center gap-2 text-neutral-800"><Gamepad2 className="w-4 h-4" /> 統合版</span>
                                    <span className="text-xs font-mono bg-green-50 text-green-600 px-2 py-0.5 rounded border border-green-100">BE</span>
                                </div>
                                <p className="leading-7 not-first:mt-6 items-center">Address:</p>
                                <div className="mt-2 bg-neutral-50 rounded p-2 text-center border border-neutral-100 h-[46px] flex items-center justify-center">
                                    <p className="text-lg font-mono text-neutral-800">mc.suwako.me</p>
                                </div>
                                <p className="leading-7 not-first:mt-6 items-center">Port:</p>
                                <div className="mt-2 bg-neutral-50 rounded p-2 text-center border border-neutral-100 h-[46px] flex items-center justify-center">
                                    <p className="text-lg font-mono text-neutral-800">42421</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-neutral-300">
                            <div className="flex items-center gap-2 mb-3 border-b border-neutral-100 pb-2">
                                <Map className="w-5 h-5 text-neutral-500" />
                                <span className="text-lg font-semibold text-neutral-800">Dynmap</span>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <a href="https://map.wayokan.com" className="text-blue-500 hover:underline break-all" target="_blank" rel="noreferrer">https://map.wayokan.com</a>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="mt-10 border-t border-neutral-100 pt-6 text-center">
                    <p className="text-sm text-neutral-400">© 2025 midorin-linux</p>
                </footer>
            </div>
        </div>
    );
}