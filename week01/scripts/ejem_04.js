// Casos típicos donde aparece NaN y otros para comparar.
const cases = [
  {
    expr: `"hola" * 3`,
    run: () => "hola" * 3,
    why: "Texto no numérico multiplicado → no se puede convertir a número."
  },
  
  {
    expr: `0 / 0`,
    run: () => 0 / 0,
    why: "Indeterminado matemáticamente."
  },
  {
    expr: `Math.sqrt(-1)`,
    run: () => Math.sqrt(-1),
    why: "Raíz cuadrada de negativo (sin números complejos)."
  },
  {
    expr: `Number("abc")`,
    run: () => Number("abc"),
    why: "Conversión fallida de string a número."
  },
  {
    expr: `"texto" - 5`,
    run: () => "texto" - 5,
    why: "No puede convertir 'texto' a número para la resta."
  },
  {
    expr: `parseInt("abc")`,
    run: () => parseInt("abc"),
    why: "No hay dígitos al inicio → NaN."
  },
  {
    expr: `parseInt("123abc")`,
    run: () => parseInt("123abc"),
    why: "Convierte hasta que aparecen letras → 123 (NO es NaN)."
  },
  {
    expr: `Infinity - Infinity`,
    run: () => Infinity - Infinity,
    why: "Indeterminado."
  },
  // Comparativos útiles:
  {
    expr: `Number("")`,
    run: () => Number(""),
    why: `Cadena vacía se convierte a 0 (útil para diferenciar de NaN).`
  },
  {
    expr: `Number("  10  ")`,
    run: () => Number("  10  "),
    why: "Espacios se ignoran → 10."
  },
  {
    expr: `Number(true)`,
    run: () => Number(true),
    why: "true → 1."
  },
  {
    expr: `Number(undefined)`,
    run: () => Number(undefined),
    why: "undefined → NaN."
  },
];

function formatValue(v) {
  // Representación legible en tabla
  if (Number.isNaN(v)) return "NaN";
  if (v === Infinity) return "Infinity";
  if (v === -Infinity) return "-Infinity";
  return String(v);
}

function runTests() {
  const tbody = document.querySelector("#results");
  tbody.innerHTML = "";

  cases.forEach((c, i) => {
    let value;
    try {
      value = c.run();
    } catch (err) {
      value = `Error: ${err && err.message ? err.message : String(err)}`;
    }

    const row = document.createElement("tr");
    const tds = [
      i + 1,
      c.expr,
      formatValue(value),
      typeof value,
      Number.isNaN(value),
      // Nota: isNaN hace coerción: isNaN("hola") → true (aunque no sea el valor NaN literal)
      isNaN(value),
      c.why
    ];

    tds.forEach((cell, idx) => {
      const td = document.createElement("td");
      td.textContent = cell;
      if (idx === 4 && cell === true) td.classList.add("ok");
      row.appendChild(td);
    });

    tbody.appendChild(row);

    // También a consola para inspección
    console.log(
      `#${i + 1} ${c.expr} ->`,
      { value, typeof: typeof value, Number_isNaN: Number.isNaN(value), isNaN: isNaN(value) }
    );
  });
}

document.getElementById("run").addEventListener("click", runTests);

// Opcional: ejecuta al cargar.
runTests();
