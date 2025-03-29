import {Link, S} from './TabMenu_Styles.ts'

export type TabMenuPropsType = {
    gap?: string
    marginBottom?: string
}

export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <S.TabMenu>
            <S.TabList>
                {props.menuItems.map((item, index) => {
                    return  <S.ListItem key={index}>
                        <Link href="">{item}</Link>
                    </S.ListItem>
                })}
            </S.TabList>
        </S.TabMenu>
    );
};





