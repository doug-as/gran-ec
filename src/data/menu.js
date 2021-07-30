const menuItems = [
    {
        items: [
            {
                icon: 'fa-home',
                label: 'Dashboard',
                dropMenu: [],
            },
            {
                icon: 'fa-store-alt',
                label: 'eCommerce',
            }
        ]
    },
    {
        header: 'APPS',
        items: [
            {
                icon: 'fa-envelope',
                label: 'Email',
            },
            {
                icon: 'fa-comment',
                label: 'Chat',
            },
            {
                icon: 'fa-check-square',
                label: 'Todo',
            },
            {
                icon: 'fa-calendar',
                label: 'Calendar',
            },
        ],
    },
    {
        header: 'UI ELEMENTS',
        items: [
            {
                icon: 'fa-columns',
                label: 'Grid',
                submenu: [],
            },
            {
                icon: 'fa-tint',
                label: 'Colors',
            },
            {
                icon: 'fa-credit-card-blank',
                label: 'Card',
                submenu: [],
            },
            {
                icon: 'fa-table',
                label: 'Table',
            },
            {
                icon: 'fa-archive',
                label: 'Components',
                submenu: [],
            },
        ],
    },
    {
        header: 'FORMS',
        items: [
            {
                icon: 'fa-clone',
                label: 'Form Elements',
                submenu: [],
            },
            {
                icon: 'fa-line-columns',
                label: 'Form Layouts',
            },
            {
                icon: 'fa-file-alt',
                label: 'Form Wizard',
            },
            {
                icon: 'fa-check-circle',
                label: 'Form Validation',
            },
        ],
    }
];

export default menuItems;
