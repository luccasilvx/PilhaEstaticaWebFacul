package com.PilhaEstatica.PilhaWeb.controller;

import com.PilhaEstatica.PilhaWeb.model.Pilha;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pilha")
public class PilhaController {
    private Pilha pilha = new Pilha(10); // Tamanho da pilha

    @PostMapping("/push/{value}")
    public String push(@PathVariable int value) {
        try {
            pilha.push(value);
            return "Elemento " + value + " empilhado!";
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    @GetMapping("/visualizar")
    public int[] visualizarPilha() {
        return pilha.visualizarPilha();
    }


    @GetMapping("/pop")
    public String pop() {
        try {
            return "Elemento removido: " + pilha.pop();
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    @GetMapping("/peek")
    public String peek() {
        return "Topo da pilha: " + pilha.peek();
    }

    @GetMapping("/isEmpty")
    public boolean isEmpty() {
        return pilha.isEmpty();
    }

    @GetMapping("/isFull")
    public boolean isFull() {
        return pilha.isFull();
    }
}
