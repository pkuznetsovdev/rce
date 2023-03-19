What?
- Use Picture tag or srcset?
- Define props
  - _src_
  - _srcset_
- Define logic  
  _Usecases_:
  - only src is defined
  - src and one of sizes
  - src and several sizes
  - src and all sizes


Ideas:  
src - required, default
```js

if (srcSet) {
  const nativeSrcSet = "";
  
  const getNativeSrcSetItemByBreakpoint = (src, breakPointName) `${src} ${SRC_SET_VALUE_BY_BREAKPOINT_NAME[breakPointName]}w`;
  
  Object.entries(srcSet).sort(([, breakPointName], [, breakPointNameNext]) => breakPointName - breakPointNameNext).map(([src, breakPointName]) => getNativeSrcSetItemByBreakpoint).join('; ')
}
``` 

Else:
##### Dummy image
Size _width x height_ 

Height is optional, if no height is specified the image will be a square.  
Example: https://dummyimage.com/300  

Must be the first option in the url  You can specify one dimension and a ratio and dummyimage will calculate the right value.  
Example: https://dummyimage.com/640x4:3 or https://dummyimage.com/16:9x1080