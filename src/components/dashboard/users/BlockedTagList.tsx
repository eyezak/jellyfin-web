import React, { FunctionComponent } from 'react';

const createButtonElement = ({tag}) => ({
    __html: `<button
        type='button'
        is='paper-icon-button-light'
        class='blockedTag btnDeleteTag listItemButton'
        data-tag='${tag}'
    >
        <span class='material-icons delete' />
    </button>`
});

type IProps = {
    tag?: string;
}

const BlockedTagList: FunctionComponent<IProps> = ({tag}: IProps) => {
    return (
        <div className='paperList'>
            <div className='listItem'>
                <div className='listItemBody'>
                    <h3 className='listItemBodyText'>
                        {tag}
                    </h3>
                </div>
                <div
                    dangerouslySetInnerHTML={createButtonElement({
                        tag: tag
                    })}
                />
            </div>

        </div>
    );
};

export default BlockedTagList;
