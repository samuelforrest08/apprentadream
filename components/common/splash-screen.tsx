import Image from "next/image";
import { ArrowRight, Briefcase, Building2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { AvatarCircles } from "../ui/avatar-circles";
import Link from "next/link";

interface SplashScreenProps {
  onStartApprentadream: () => void;

  onStartCompanyHub: () => void;
}

export function SplashScreen({ onStartApprentadream, onStartCompanyHub }: SplashScreenProps) {
  const avatars = [
    {
      imageUrl: "/1avatar.webp",
    },
    {
      imageUrl: "/2avatar.webp",
    },
    {
      imageUrl: "/3avatar.webp",
    },
    {
      imageUrl: "/4avatar.webp",
    },
    {
      imageUrl: "/5avatar.webp",
    },
  ];

  const avatars2 = [
    {
      imageUrl: "/6avatar.webp",
    },
    {
      imageUrl: "/7avatar.webp",
    },
    {
      imageUrl: "/8avatar.webp",
    },
    {
      imageUrl: "/9avatar.webp",
    },
    {
      imageUrl: "/10avatar.webp",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center px-4">
        {/* Logo */}
        <div>
          <Image
            src="/ad.png"
            alt="logo"
            width={250}
            height={100}
            className="mx-auto"
            priority
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/png;base64,..."
          />
        </div>

        <div className="inline-block justify-center items-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Build your future
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-5 mb-10 max-w-4xl mx-auto">
          <Card
            className="bg-white/5 backdrop-blur border-white/30 hover:bg-blue-500/10 w-full lg:w-1/2 flex flex-col min-h-[140px] rounded-3xl cursor-pointer"
            onClick={onStartApprentadream}
          >
            <CardContent className="flex flex-col items-center justify-center h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Apprentadream</h3>
                <div className="rounded-full flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-sm text-gray-300 text-center pb-4 px-5">
                The O.G Apprentadream Community
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-gray-400 pt-2">
                <div className="flex items-center gap-2">
                  <span className="flex flex-col items-center">
                    <AvatarCircles
                      avatarUrls={avatars}
                      className="z-10 flex -space-x-3 rtl:space-x-reverse [&>a>img]:h-8 [&>a>img]:w-8"
                    />
                    <span className="text-sm text-gray-400 mt-1">+2603 others</span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="bg-white/5 backdrop-blur border-white/30 hover:bg-orange-500/10 w-full lg:w-1/2 flex flex-col min-h-[140px] rounded-3xl cursor-pointer"
            onClick={onStartCompanyHub}
          >
            <CardContent className="flex flex-col items-center justify-center h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-orange-500 rounded-full p-2 flex-shrink-0">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Company Hub</h3>
                <div className="rounded-full flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-sm text-gray-300 text-center pb-4 px-5">
                Group chats to talk about every company
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-gray-400 pt-2">
                <div className="flex items-center gap-2">
                  <span className="flex flex-col items-center">
                    <AvatarCircles
                      avatarUrls={avatars2}
                      className="z-10 flex -space-x-3 rtl:space-x-reverse [&>a>img]:h-8 [&>a>img]:w-8"
                    />
                    <span className="text-sm text-gray-400 mt-1">+357 others</span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-white mt-20">
          <p>
            <Link href="/terms" className="underline underline-offset-4">
              Terms apply.
            </Link>{" "}
            Both Apprentadream and Company Hub are{" "}
            <Link
              href="https://faq.whatsapp.com/495856382464992"
              className="underline underline-offset-4"
            >
              {" "}
              WhatsApp Communities
            </Link>{" "}
            owned by Apprentadream.
          </p>
        </div>
      </div>
    </div>
  );
}
