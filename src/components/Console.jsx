import { useEffect, useRef, useState } from "react";

export default function Console({ onExit }) {
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState("");
  const [cwd, setCwd] = useState(["/"]);
  const [fileTree, setFileTree] = useState({});
  const [flagPath, setFlagPath] = useState("");
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const tree = {
      reports: {
        easy: {
          basic_box: "Basic foothold technique...",
        },
        medium: {
          apache_fun: "Apache misconfig explained...",
        },
        hard: {
          super_secret_box: "There's dust here...",
        },
      },
      notes: {
        passwords: {
          hashlist: "user1:$1$xyz...",
        },
      },
      projects: {
        htb: {
          jet_final: "Initial enum from port 8080...",
        },
      },
    };

    const paths = [];

    const walk = (obj, path = []) => {
      for (const key in obj) {
        if (typeof obj[key] === "string") {
          paths.push([...path, key]);
        } else {
          walk(obj[key], [...path, key]);
        }
      }
    };

    walk(tree);

    const randomPath = paths[Math.floor(Math.random() * paths.length)];
    const flag = "🎉 flag{pentest_console_complete}";

    const injectFlag = (obj, pathArr) => {
      const last = pathArr.pop();
      let node = obj;
      for (const p of pathArr) node = node[p];
      node[last] += `\n\n${flag}`;
    };

    injectFlag(tree, [...randomPath]);
    setFileTree(tree);
    setFlagPath("/" + randomPath.join("/"));
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [output]);

  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const getNode = () => {
    let node = fileTree;
    for (const dir of cwd.slice(1)) {
      if (typeof node[dir] === "object") {
        node = node[dir];
      } else {
        return null;
      }
    }
    return node;
  };

  const appendOutput = (line) => {
    setOutput((prev) => [...prev, line]);
  };

  const handleCommand = (command) => {
    appendOutput(`> ${command}`);
    const args = command.trim().split(" ");
    const base = args[0];

    switch (base) {
      case "help":
        appendOutput("Commands: help, ls, cd, pwd, cat, clear, exit");
        break;

      case "pwd":
        appendOutput(cwd.join("/") || "/");
        break;

      case "ls":
        const node = getNode();
        if (!node || typeof node !== "object") {
          appendOutput("Not a directory.");
        } else {
          appendOutput(Object.keys(node).join("  "));
        }
        break;

      case "cd":
        const dir = args[1];
        if (!dir) {
          setCwd(["/"]);
        } else if (dir === "..") {
          if (cwd.length > 1) setCwd(cwd.slice(0, -1));
        } else {
          const next = getNode()?.[dir];
          if (typeof next === "object") {
            setCwd([...cwd, dir]);
          } else {
            appendOutput("No such directory.");
          }
        }
        break;

      case "cat":
        const file = args[1];
        const content = getNode()?.[file];
        if (typeof content === "string") {
          appendOutput(content);
        } else {
          appendOutput("No such file.");
        }
        break;

      case "clear":
        setOutput([]);
        break;

      case "exit":
        onExit();
        break;

      default:
        appendOutput("Unknown command. Type 'help'");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const args = input.split(" ");
      const base = args[0];
      const partial = args[1] || "";
      const entries = Object.keys(getNode() || {});

      const matches = entries.filter((entry) =>
        entry.startsWith(partial)
      );

      if (matches.length === 1) {
        setInput(`${base} ${matches[0]}`);
      } else if (matches.length > 1) {
        appendOutput(matches.join("  "));
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono text-sm p-6 z-[9999] transition-all">
      <div ref={terminalRef} className="overflow-y-auto h-full w-full space-y-1 pb-10">
        {output.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">{line}</div>
        ))}
        <form onSubmit={handleSubmit}>
          <span className="text-pink-500">axel@root</span>
          :<span className="text-blue-400">{cwd.join("/") || "/"}</span>$&nbsp;
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none w-3/4"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
