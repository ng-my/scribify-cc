<template>
  <div class="min-h-screen bg-black">
    <!-- 导航栏组件 -->
    <NavBar @scrollIntoView="scrollIntoView" />
    <main class="hero-wrap relative min-h-[21.375rem] w-full text-white">
      <div class="mx-auto max-w-[88.75rem]">
        <!-- 顶部横幅组件 -->
        <Hero />
      </div>
    </main>
    <main class="bg-black text-white">
      <div class="mx-auto max-w-[88.75rem]">
        <free-trial></free-trial>
      </div>
    </main>

    <main class="bg-black text-white">
      <div class="mx-auto max-w-[88.75rem]">
        <!-- 无限制转录 -->
        <Unlimited id="ID_Product"></Unlimited>
        <!-- 无与伦比的准确性 -->
        <Accuracy></Accuracy>
        <!-- 轻松转录 -->
        <Effortless></Effortless>
        <!-- 最大的语言便利化 -->
        <Language></Language>
        <!-- 价格 -->
        <PricingSection id="ID_Pricing" />
        <!-- 用户评价组件 -->
        <ReviewSection />
      </div>
    </main>
    <main class="bg-black text-white">
      <div class="mx-auto max-w-[88.75rem]">
        <!-- FAQ组件 -->
        <FAQSection id="ID_FAQ" />
      </div>
    </main>
    <main
        class="try-now-section relative min-h-[22.125rem] w-full bg-black text-white"
    >
      <div class="mx-auto max-w-[88.75rem]">
        <!-- 立即开始 -->
        <TryNowBottom></TryNowBottom>
      </div>
    </main>
    <main class="bg-black text-white">
      <div class="mx-auto max-w-[88.75rem]">
        <IndexContactUs></IndexContactUs>
      </div>
    </main>
    <IndexFooter></IndexFooter>
  </div>
</template>

<script setup lang="ts">
import NavBar from "~/components/index/NavBar.vue";
import Hero from "~/components/index/Hero.vue";
import Unlimited from "~/components/index/Unlimited.vue";
import Accuracy from "~/components/index/Accuracy.vue";
import Effortless from "~/components/index/Effortless.vue";
import Language from "~/components/index/Language.vue";
import PricingSection from "~/components/index/PricingSection.vue";
import ReviewSection from "~/components/index/ReviewSection.vue";
import FAQSection from "~/components/index/FAQSection.vue";
import TryNowBottom from "~/components/index/TryNowBottom.vue";
import FreeTrial from "~/components/index/FreeTrial.vue";
import { useCrossDomainCookie } from "~/hooks/useCrossDomainCookie";
const localePath = useLocalePath();
const router = useRouter();
const { $mitt } = useNuxtApp();

const scrollIntoView = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
const signup = () => {
  router.push({
    path: localePath("/user/signup")
  });
};

const times = ref(0);
const saveInfoToStore = () => {
  console.log("saveInfoToStoreMain", times.value);
  if (times.value > 3) {
    return;
  }
  times.value++;

  const { setUserInfo } = useUserStore();
  const { userInfo } = storeToRefs(useUserStore());
  const userInfoCookie = useCrossDomainCookie("userInfoFromApp");
  const token = useCrossDomainCookie("token");

  console.log("token check", { tokenValue: token.value, times: times.value });

  if (!token.value) {
    // 🔥 不要立即清理，先重试几次
    if (times.value <= 2) {
      console.log("Token not ready, retrying...", times.value);
      setTimeout(() => {
        saveInfoToStore();
      }, 100 * times.value); // 递增延迟
      return;
    } else {
      // 多次重试后仍然没有token，才清理
      console.log("Token still not available after retries, clearing...");
      setUserInfo(null);
      userInfoCookie.value = "";
      return;
    }
  }

  console.log("saveInfoToStore userInfoCookie", userInfoCookie.value);
  if (userInfoCookie.value) {
    setUserInfo(userInfoCookie.value);
    setTimeout(() => {
      if (!userInfo.value?.userInfoVO) {
        saveInfoToStore();
      } else {
        userInfoCookie.value = "";
      }
    }, 100);
  }
};
saveInfoToStore()
onMounted(() => {
  $mitt.on("signup", signup);
});
onUnmounted(() => {
  // 在组件卸载时移除事件监听
  $mitt.off("signup", signup);
});
</script>

<style scoped lang="scss">
.hero-wrap {
  background-size: cover;
  background-image:
      url("/assets/images/index_black/hero-bg.png"),
      url("/assets/images/index_black/hero-bg-top.png");
  background-repeat: no-repeat;
  background-position: center;
}
</style>
