type Lang = 'en' | 'no'

type LandingPageDictionary = {
    title: string
    description: string
    experience: string
    education: {
        title: string
        degrees: {
            [key: string]: {
                title: string
                degree: string
                period: string
            }
        }
    }
    work: {
        title: string
        jobs: {
            [key: string]: {
                position: string
                company: string
                period: string
            }
        }
    }
}

type NavBarDictionary = {
    menu: string
    links: {
        about: {
            title: string
            navigation: string
        }
        projects: {
            title: string
            navigation: string
        }
        skills: {
            title: string
            navigation: string
        }
    }
}

type ContactDictionary = {
    title: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    subject: string
    subjectPlaceholder: string
    message: string
    messagePlaceholder: string
    submit: string
}

type FooterDictionary = {
    copyright: string
}

type ProjectsDictionary = {
    projects: {
        title: string
        viewProject: string
        viewMore: string
        projects: {
            [key: string]: {
                name: string
                description: string
                link?: string
                images?: string[]
            }
        }
    }
    contributions: {
        title: string
        viewProject: string
        viewMore: string
        contributions: {
            [key: string]: {
                name: string
                description: string
                link?: string
            }
        }
    }
}


type SkillsDictionary = {
    title: string
    categories: {
        [key: string]: SkillCategory
    }
}

type SkillCategory = {
    title: string
    categories: Array<{
        title: string
        items: string[]
    }>
}