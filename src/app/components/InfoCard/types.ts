type IInfoCardProps = {
    heading: string;
    subtitle: string;
    imageName: string;
    link?: IInfoLink;
}

type IInfoLink = {
    text: string;
    linkTo: string;
}

export type {IInfoCardProps}