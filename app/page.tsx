import { redirect } from 'next/navigation';

export default function Home() {
  // 只要有人访问首页，就自动跳到 practice/1
  redirect('/practice/1');
}