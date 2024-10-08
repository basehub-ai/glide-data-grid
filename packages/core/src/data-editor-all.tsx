import * as React from "react";
import { DataEditor, type DataEditorProps, type DataEditorRef } from "./data-editor/data-editor.js";
import { AllCellRenderers } from "./cells/index.js";
import { sprites } from "./internal/data-grid/sprites.js";
import ImageWindowLoaderImpl from "./common/image-window-loader.js";
import type { ImageWindowLoader } from "./internal/data-grid/image-window-loader-interface.js";

export interface DataEditorAllProps extends Omit<DataEditorProps, "renderers" | "imageWindowLoader"> {
    imageWindowLoader?: ImageWindowLoader;
}

const DataEditorAllImpl: React.ForwardRefRenderFunction<DataEditorRef, DataEditorAllProps> = (p, ref) => {
    const allSprites = React.useMemo(() => {
        return { ...sprites, ...p.headerIcons };
    }, [p.headerIcons]);

    const imageWindowLoader = React.useMemo(() => {
        return p.imageWindowLoader ?? new ImageWindowLoaderImpl();
    }, [p.imageWindowLoader]);

    return (
        <DataEditor
            {...p}
            renderers={AllCellRenderers}
            headerIcons={allSprites}
            ref={ref}
            imageWindowLoader={imageWindowLoader}
            scrollerYRef={p.scrollerYRef}
            scrollerXRef={p.scrollerXRef}
            scrollOffsetTop={p.scrollOffsetTop}
            scrollOffsetBottom={p.scrollOffsetBottom}
        />
    );
};

export const DataEditorAll = React.forwardRef(DataEditorAllImpl);
