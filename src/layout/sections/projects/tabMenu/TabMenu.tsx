import {Link, S} from './TabMenu_Styles.ts'

export type TabsStatusType = 'all' | 'HTML' | 'JavaScript' | 'SASS' | 'React'

 type TabMenuPropsType = {
    gap?: string
    marginBottom?: string
    tabItems: Array<{status: TabsStatusType, title: string}>
    changeFilterStatus: (value: TabsStatusType) => void
     currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <S.TabMenu>
            <S.TabList>
                {props.tabItems.map((item, index) => {
                    return  <S.ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status} as={'button'} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link>
                    </S.ListItem>
                })}
            </S.TabList>
        </S.TabMenu>
    );
};





