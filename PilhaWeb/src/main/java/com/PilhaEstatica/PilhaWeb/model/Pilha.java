package com.PilhaEstatica.PilhaWeb.model;

public class Pilha {
    private int maxSize;
    private int[] stackArray;
    private int top;

    public Pilha(int size) {
        this.maxSize = size;
        this.stackArray = new int[size];
        this.top = -1;
    }

    public void push(int value) throws Exception {
        if (isFull()) {
            throw new Exception("Pilha cheia!");
        }
        stackArray[++top] = value;
    }

    public int pop() throws Exception {
        if (isEmpty()) {
            throw new Exception("Pilha vazia!");
        }
        return stackArray[top--];
    }

    public int peek() {
        return stackArray[top];
    }

    public boolean isEmpty() {
        return (top == -1);
    }

    public boolean isFull() {
        return (top == maxSize - 1);
    }

    public int[] visualizarPilha() {
        int[] estadoAtual = new int[top + 1];
        for (int i = 0; i <= top; i++) {
            estadoAtual[i] = stackArray[i];
        }
        return estadoAtual;
    }
}
