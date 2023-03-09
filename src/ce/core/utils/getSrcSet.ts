import { ImageSrcSet } from "../types/image";
import { IMAGE_SRC_SET } from "../constants";

export function getSrcSet(srcSet: ImageSrcSet) {
    const imgSrcList: string[] = [];
    Object.entries(srcSet).forEach(([bp, src]) => {
        const bpValue = IMAGE_SRC_SET[bp as keyof typeof IMAGE_SRC_SET];
        bpValue && imgSrcList.push(`${src} ${bpValue}w`)
    })

    return imgSrcList.join(', ')
}