export default function MatrixQuestion({ items, min = 1, max = 7, responses, onChange }) {
  const numbers = []
  for (let n = min; n <= max; n += 1) numbers.push(n)

  return (
    <div className="matrix">
      <table>
        <thead>
          <tr>
            <th></th>
            {numbers.map((n) => (
              <th key={n}>{n}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.text}</td>
              {numbers.map((n) => (
                <td key={n}>
                  <input
                    type="radio"
                    name={item.id}
                    checked={responses[item.id] === n}
                    onChange={() => onChange(item.id, n)}
                    aria-label={`${item.text} ${n}`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
