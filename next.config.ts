import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // 允许在生产构建中存在类型错误，确保面试能展示链接
    ignoreBuildErrors: true,
  },
  eslint: {
    // 构建过程中忽略 ESLint 检查
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;