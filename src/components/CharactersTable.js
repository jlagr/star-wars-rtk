import React from 'react'

function CharactersTable(props) {
    if (props.characters.length === 0) {
        return (
            <div>
                <p className='ms-8 text-sm text-white/25'>Sorry, no charecters found for this film</p>
            </div>
        )
    }
    return (
        <table className="table-auto text-sm">
            <thead>
                <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Height</th>
                <th className="px-4 py-2">Mass</th>
                <th className="px-4 py-2">Skin color</th>
                <th className="px-4 py-2">Eye color</th>
                <th className="px-4 py-2">Hair Color</th>
                </tr>
            </thead>
            <tbody>
                {props.characters.map((c, index) => (
                <tr key={index}>
                    <td className="px-4 py-2">{c.data.name}</td>
                    <td className="px-4 py-2">{c.data.height}</td>
                    <td className="px-4 py-2">{c.data.mass}</td>
                    <td className="px-4 py-2">{c.data.skin_color}</td>
                    <td className="px-4 py-2">{c.data.eye_color}</td>
                    <td className="px-4 py-2">{c.data.hair_color}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CharactersTable
