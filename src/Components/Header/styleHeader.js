export const styleHeader = {
    container: {
        justifyContent: 'space-between',
        padding: '0 20px',
        backgroundColor: '#24292e',
        alignItems: 'center',
        height: 70,
        position: 'sticky',
        zIndex: 1000,
        '&.MuiStack-root': {

        },
        top: 0

    },
    typography: {
        color: 'white', fontWeight: 400,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    buttonLink: {
        color: 'white',
        alignItems: 'center',
        flexDirection: 'rows',
        ".MuiButton-startIcon": { marginRight: '0px' },
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
}