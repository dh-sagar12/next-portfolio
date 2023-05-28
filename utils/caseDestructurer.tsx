

const SnakeCaseDestructure  =  (params: string) => {
    return  params.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase())
}

export default SnakeCaseDestructure 