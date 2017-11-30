export const createSplitter = m => {
    const onMove = e => {
        const y = Math.min(Math.max(30, e.pageY - 2), window.innerHeight - 30)
        document.body.style.setProperty('--editor-height', y + 'px')
    }
    const onUp = () => {
        document.removeEventListener('mouseup', onUp, false)
        document.removeEventListener('mousemove', onMove, false)
    }
    return () =>
        m('div', {
            class: 'splitter',
            onmousedown: () => {
                document.addEventListener('mouseup', onUp, false)
                document.addEventListener('mousemove', onMove, false)
            },
        })
}

export const createColSplitter = (m, col) => {
    let currentPos = 0

    col.colWidth = Math.min(300, 12 + col.precision * 9)

    const onMove = e => {
        const diff = e.pageX - currentPos
        currentPos = e.pageX
        m.startComputation()
        col.colWidth = Math.max(10, col.colWidth + diff)
        m.endComputation()
    }
    const onUp = () => {
        document.removeEventListener('mouseup', onUp, false)
        document.removeEventListener('mousemove', onMove, false)
    }

    return () =>
        m(
            'div.resize-col',
            {
                onmousedown: (e: MouseEvent) => {
                    e.stopPropagation()
                    currentPos = e.pageX
                    document.addEventListener('mouseup', onUp, false)
                    document.addEventListener('mousemove', onMove, false)
                },
                onclick: (e: MouseEvent) => {
                    e.stopPropagation()
                },
            },
            ''
        )
}
