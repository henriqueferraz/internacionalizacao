import { useTranslations } from 'next-intl';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import Image from 'next/image'

export default function Index() {
    const t = useTranslations('Index');
    return (
        <div>
            <div >
                <Link href="/pt" className={buttonVariants({ variant: "outline" })}>
                    <Image
                        src="/br.png"
                        width={25}
                        height={25}
                        alt="Brasil"
                    />
                </Link>
                <Link href="/en" className={buttonVariants({ variant: "outline" })}>
                    <Image
                        src="/en.png"
                        width={25}
                        height={25}
                        alt="Brasil"
                    />
                </Link>
            </div>
            <div className='flex flex-col justify-center items-center m-10'>
                <h1 className='uppercase mb-10 text-3xl'>{t('title')}</h1>
                <p className=' text-justify text-base'>{t('body')}</p>
                <p className=' ml-auto text-right italic text-xs'>{t('footer')}</p>
            </div>
        </div>
    )
}