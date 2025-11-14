# SmartStock Angular Presentation Guide

## Overview
This guide will help you present your Angular components, services, and Express routes for your class presentation.

---

## Part 3: Three Angular Components Presentation

You'll present these three components that demonstrate the full shopping workflow:

### Component 1: CustomerShopComponent (Product Browsing)

**FILE LOCATION**: [src/frontend/app/pages/customer-shop/customer-shop.component.ts](src/frontend/app/pages/customer-shop/customer-shop.component.ts)

#### What to Say:
"The CustomerShopComponent is where customers browse and add products to their cart. It's the entry point for the shopping experience."

#### Properties to Highlight:
```typescript
products: Product[] = [];    // Array of all available products
cart: Product[] = [];        // Local cart storage
```

#### Methods to Explain:

**1. ngOnInit() - Lifecycle Hook (Line 27-29)**
- What to say: "When the component loads, ngOnInit automatically calls loadProducts to fetch data from the backend."
- Show: Line 27-29

**2. loadProducts() - HTTP GET Request (Line 32-46)**
- What to say: "This method makes an HTTP GET request to our Express API at http://localhost:3000/api/products. It retrieves all products from MongoDB and maps them to include cart-specific properties like quantity and inCart status."
- Show: Lines 32-46
- Point out: The HTTP call, the .subscribe(), and the data mapping

**3. addToCart(product) - Add to Cart Logic (Line 49-56)**
- What to say: "When a customer clicks 'Add to Cart', this method sets the product's inCart flag to true, initializes quantity to 1, and calls the CartService to persist it."
- Show: Lines 49-56

**4. increaseQty() & decreaseQty() - Quantity Management (Line 59-74)**
- What to say: "These methods handle quantity changes while enforcing stock limits. If quantity drops to 0, it removes the item from the cart."
- Show: Lines 59-74

#### Template HTML Data Binding to Show:
**FILE**: [src/frontend/app/pages/customer-shop/customer-shop.component.html](src/frontend/app/pages/customer-shop/customer-shop.component.html)

**Show these data bindings on screen:**

1. **String Interpolation** (Lines 8, 9, 14):
```html
<h3 class="product-name">{{ product.name }}</h3>
<span class="category">{{ product.category }}</span>
<p class="price">₹{{ product.price }}</p>
```
- Say: "We use double curly braces {{ }} for string interpolation to display product properties."

2. **Structural Directive *ngFor** (Line 5):
```html
<div *ngFor="let product of products" class="product-card">
```
- Say: "*ngFor loops through the products array and creates a card for each product."

3. **Structural Directive *ngIf** (Line 17):
```html
<div *ngIf="!product.inCart; else qtyControls">
```
- Say: "*ngIf conditionally shows the 'Add to Cart' button only if the product isn't already in the cart."

4. **Event Binding** (Line 18, 23, 25):
```html
<button (click)="addToCart(product)" class="add-btn">Add to Cart</button>
<button (click)="decreaseQty(product)">−</button>
<button (click)="increaseQty(product)" [disabled]="product.quantity! >= product.stock">+</button>
```
- Say: "Event binding with parentheses (click) calls our component methods when buttons are clicked."

5. **Property Binding** (Line 25):
```html
[disabled]="product.quantity! >= product.stock"
```
- Say: "Property binding with square brackets disables the plus button when we reach maximum stock."

---

### Component 2: CartComponent (Shopping Cart & Checkout)

**FILE LOCATION**: [src/frontend/app/pages/cart/cart.component.ts](src/frontend/app/pages/cart/cart.component.ts)

#### What to Say:
"The CartComponent displays the shopping cart, calculates totals, and handles the checkout process."

#### Properties to Highlight:
```typescript
cart: any[] = [];                    // Cart items array
totalAmount = 0;                     // Calculated total price
totalQuantity = 0;                   // Total items count
showCheckoutForm = false;            // Toggle checkout form visibility
customerName = '';                   // Customer information
customerEmail = '';                  // Customer email
isProcessing = false;                // Loading state during checkout
```

#### Methods to Explain:

**1. ngOnInit() - RxJS Observable Subscription (Line 33-41)**
- What to say: "In ngOnInit, we subscribe to the CartService's observable cart$. This means whenever the cart changes anywhere in the app, this component automatically updates."
- Show: Lines 33-41
- Highlight: "This is reactive programming - the component reacts to data changes."

**2. loadCart() - Getting Cart Data (Line 49-52)**
- What to say: "loadCart gets the current cart from CartService and recalculates totals."
- Show: Lines 49-52

**3. calculateTotals() - Array Reduce Method (Line 54-57)**
- What to say: "calculateTotals uses JavaScript's reduce method to sum up prices and quantities across all cart items."
- Show: Lines 54-57
- Point out: The reduce function calculating price * quantity

**4. updateQuantity() - Cart Update Logic (Line 69-75)**
- What to say: "When the customer changes quantity in the input field, this method validates it's greater than 0 and updates the CartService."
- Show: Lines 69-75

**5. checkout() - Order Creation (Line 78-124)**
- What to say: "This is the most important method. It validates customer input, calls the OrderService's checkoutCart method, and handles success or error responses."
- Show: Lines 78-124
- Highlight key parts:
  - Validation (lines 79-90)
  - Cart items mapping (lines 95-100)
  - OrderService call (line 103)
  - Success handler clearing cart and navigating to orders (lines 104-117)

#### Template HTML Data Binding to Show:
**FILE**: [src/frontend/app/pages/cart/cart.component.html](src/frontend/app/pages/cart/cart.component.html)

**Show these data bindings:**

1. **String Interpolation for Totals** (Lines 5, 57, 67):
```html
<p class="items-count">{{ totalQuantity }} item(s) in cart</p>
<span class="summary-value">₹{{ totalAmount.toFixed(2) }}</span>
<span class="summary-value"><strong>₹{{ totalAmount.toFixed(2) }}</strong></span>
```
- Say: "String interpolation displays calculated totals with proper formatting."

2. **Structural Directive *ngFor** (Line 15):
```html
<div class="cart-item" *ngFor="let item of cart; let i = index">
```
- Say: "*ngFor creates a cart item card for each product. We also use 'let i = index' to get the position."

3. **Two-Way Data Binding with Template Reference** (Lines 32-34):
```html
<input
  type="number"
  #qtyInput
  [value]="item.quantity"
  (blur)="updateQuantity(item, +qtyInput.value)"
  class="quantity-input">
```
- Say: "We use a template reference variable #qtyInput and bind its value. On blur (when user leaves the input), we update the quantity."

4. **ViewChild Decorator** (Lines 23-24 in TS, 86-103 in HTML):
```typescript
@ViewChild('nameInput') nameInput!: ElementRef;
@ViewChild('emailInput') emailInput!: ElementRef;
```
```html
<input type="text" id="customerName" #nameInput>
<input type="email" id="customerEmail" #emailInput>
```
- Say: "@ViewChild allows us to access template elements directly in our TypeScript code for validation."

5. **Conditional Rendering** (Lines 9, 80, 127-130, 138):
```html
<div *ngIf="cart.length > 0">
<div *ngIf="showCheckoutForm" class="checkout-section">
<span *ngIf="!isProcessing">✓ Place Order</span>
<span *ngIf="isProcessing">Processing...</span>
<div *ngIf="cart.length === 0" class="empty-cart-container">
```
- Say: "*ngIf conditionally shows different sections based on cart state and processing status."

6. **Property Binding for Disabled State** (Line 126):
```html
<button [disabled]="isProcessing">
```
- Say: "While the order is processing, we disable the button to prevent duplicate submissions."

---

### Component 3: DashboardComponent (Inventory Management)

**FILE LOCATION**: [src/frontend/app/pages/dashboard/dashboard.component.ts](src/frontend/app/pages/dashboard/dashboard.component.ts)

#### What to Say:
"The DashboardComponent is the manager's control center for inventory management. It displays analytics charts and allows inline editing of products."

#### Properties to Highlight:
```typescript
inventoryItems: InventoryItem[] = [];   // All products with inventory data
categoryChart: Chart | null = null;     // Chart.js bar chart instance
salesLineChart: Chart | null = null;    // Chart.js line chart instance
topSellingChart: Chart | null = null;   // Chart.js horizontal bar chart
totalValue: number = 0;                 // Total inventory worth
totalItems: number = 0;                 // Product count
lowStockCount: number = 0;              // Items below threshold
outOfStockCount: number = 0;            // Items with 0 stock
expiringItems: InventoryItem[] = [];    // Products expiring within 7 days
```

#### Methods to Explain:

**1. ngOnInit() - Component Initialization (Line 45-47)**
- What to say: "ngOnInit calls loadProducts to fetch inventory data when the dashboard loads."
- Show: Lines 45-47

**2. loadProducts() - Complex Data Loading (Line 49-89)**
- What to say: "This method does multiple things: fetches products from ProductService, generates synthetic soldLastMonth data if missing, transforms the data, and triggers chart rendering."
- Show: Lines 49-89
- Highlight:
  - ProductService.getProducts() call (line 50)
  - .map() transformation (lines 53-75)
  - Nested service call to update soldLastMonth (lines 62-64)
  - Chart rendering with setTimeout (line 79)

**3. calculateStats() - Inventory Analytics (Line 97-104)**
- What to say: "calculateStats uses array methods like reduce and filter to calculate key metrics: total value, items count, low stock alerts, and out-of-stock items."
- Show: Lines 97-104
- Point out: The reduce for totalValue and filter conditions for stock alerts

**4. checkExpiringItems() - Date Logic (Line 106-116)**
- What to say: "This method identifies products expiring within the next 7 days by comparing dates."
- Show: Lines 106-116

**5. renderCategoryChart() - Chart.js Integration (Line 124-195)**
- What to say: "This creates a bar chart showing stock grouped by category. We use Chart.js library and group data using a JavaScript object as a hash map."
- Show: Lines 124-195
- Highlight:
  - Canvas element selection (line 125)
  - Category grouping logic (lines 133-136)
  - Chart configuration (lines 141-194)

**6. saveItem() - Update Product (Line 314-346)**
- What to say: "When a manager edits a row and clicks Save, this method calls ProductService.updateProduct with the modified data, then recalculates stats and re-renders charts."
- Show: Lines 314-346
- Highlight: The service call and success handler

**7. deleteItem() - Delete Product (Line 359-381)**
- What to say: "deleteItem confirms with the user, calls ProductService.deleteProduct, removes the item from the local array, and updates the UI."
- Show: Lines 359-381

#### Template HTML Data Binding to Show:
**FILE**: [src/frontend/app/pages/dashboard/dashboard.component.html](src/frontend/app/pages/dashboard/dashboard.component.html)

**Show these data bindings:**

1. **String Interpolation for Stats Cards** (Lines 10, 20, 30, 40):
```html
<h2 class="card-title mb-0">${{ totalValue.toFixed(2) }}</h2>
<h2 class="card-title mb-0">{{ totalItems }}</h2>
<h2 class="card-title mb-0 text-dark">{{ lowStockCount }}</h2>
<h2 class="card-title mb-0">{{ outOfStockCount }}</h2>
```
- Say: "These cards display calculated statistics using string interpolation."

2. **Chart.js Canvas Elements** (Lines 53, 66, 75):
```html
<canvas id="categoryChart"></canvas>
<canvas id="salesLineChart"></canvas>
<canvas id="topSellingChart"></canvas>
```
- Say: "Chart.js renders interactive charts on these canvas elements by selecting them with getElementById."

3. **Structural Directive *ngFor on Table Rows** (Line 108):
```html
<tr *ngFor="let item of inventoryItems" [ngClass]="getStockStatusClass(item)">
```
- Say: "*ngFor creates a table row for each inventory item. ngClass dynamically applies CSS classes based on stock status."

4. **Conditional Editing with *ngIf** (Lines 113-145):
```html
<span *ngIf="!item.isEditing">{{ item.name }}</span>
<input *ngIf="item.isEditing" type="text" class="form-control form-control-sm" [(ngModel)]="item.name">
```
- Say: "Each cell toggles between display mode and edit mode using *ngIf and the isEditing flag."

5. **Two-Way Data Binding with ngModel** (Lines 114, 119, 124, 129, 134, 139, 144):
```html
[(ngModel)]="item.name"
[(ngModel)]="item.category"
[(ngModel)]="item.stock"
[(ngModel)]="item.price"
[(ngModel)]="item.threshold"
[(ngModel)]="item.expiryDate"
[(ngModel)]="item.soldLastMonth"
```
- Say: "ngModel with banana-in-a-box syntax [()] provides two-way data binding - changes in the input automatically update the property and vice versa."

6. **Method Calls in Template** (Lines 148-149):
```html
<span [ngClass]="getBadgeClass(item)">
  {{ getStockStatus(item) }}
</span>
```
- Say: "We can call component methods directly in the template to dynamically determine CSS classes and status text."

7. **Event Binding for CRUD Operations** (Lines 155-166):
```html
<button (click)="editItem(item)">Edit</button>
<button (click)="deleteItem(item)">Delete</button>
<button (click)="saveItem(item)">Save</button>
<button (click)="cancelEdit(item)">Cancel</button>
```
- Say: "Event binding connects buttons to CRUD methods - Create, Read, Update, Delete."

---

## Part 4: Angular Services & Express Routes

### Service 1: ProductService

**FILE LOCATION**: [src/frontend/app/services/product.service.ts](src/frontend/app/services/product.service.ts)

#### What to Say:
"ProductService is an injectable singleton service that handles all HTTP communication with our Express backend for product data."

#### Key Points:

**1. @Injectable Decorator (Lines 18-20)**
```typescript
@Injectable({
  providedIn: 'root'
})
```
- Say: "The @Injectable decorator with providedIn: 'root' makes this a singleton service available throughout the app."

**2. API Base URL (Line 22)**
```typescript
private apiUrl = 'http://localhost:3000/api/products';
```
- Say: "We define the base URL here - all methods will call routes under /api/products."

**3. HttpClient Injection (Line 24)**
```typescript
constructor(private http: HttpClient) { }
```
- Say: "We inject Angular's HttpClient to make HTTP requests."

#### Service Methods and Their Express Routes:

**METHOD 1: getProducts() (Lines 26-28)**
```typescript
getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.apiUrl);
}
```

**Calls Express Route**: GET /api/products
**FILE**: [src/backend/routes/products.js](src/backend/routes/products.js) Lines 7-14
```javascript
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```
- Say: "getProducts makes a GET request to /api/products. The Express route queries MongoDB using Product.find() and returns all products as JSON."

---

**METHOD 2: getProduct(id) (Lines 30-32)**
```typescript
getProduct(id: string): Observable<Product> {
  return this.http.get<Product>(`${this.apiUrl}/${id}`);
}
```

**Calls Express Route**: GET /api/products/:id
**FILE**: [src/backend/routes/products.js](src/backend/routes/products.js) Lines 16-27
```javascript
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```
- Say: "getProduct takes an ID parameter and appends it to the URL. The Express route uses req.params.id to find the product by MongoDB _id."

---

**METHOD 3: createProduct(product) (Lines 34-36)**
```typescript
createProduct(product: Omit<Product, '_id' | 'createdAt'>): Observable<Product> {
  return this.http.post<Product>(this.apiUrl, product);
}
```

**Calls Express Route**: POST /api/products
**FILE**: [src/backend/routes/products.js](src/backend/routes/products.js) Lines 29-48
```javascript
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    stock: req.body.stock,
    threshold: req.body.threshold,
    expiryDate: req.body.expiryDate,
    soldLastMonth: req.body.soldLastMonth
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
```
- Say: "createProduct sends a POST request with the product data in the request body. Express creates a new Product model instance from req.body and saves it to MongoDB."

---

**METHOD 4: updateProduct(id, product) (Lines 38-40)**
```typescript
updateProduct(id: string, product: Partial<Product>): Observable<Product> {
  return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
}
```

**Calls Express Route**: PUT /api/products/:id
**FILE**: [src/backend/routes/products.js](src/backend/routes/products.js) Lines 50-73
```javascript
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Update fields if provided
    if (req.body.name != null) product.name = req.body.name;
    if (req.body.description != null) product.description = req.body.description;
    if (req.body.price != null) product.price = req.body.price;
    // ... more fields

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
```
- Say: "updateProduct sends a PUT request with partial product data. Express finds the product, updates only the provided fields, and saves the changes."

---

**METHOD 5: deleteProduct(id) (Lines 42-44)**
```typescript
deleteProduct(id: string): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
```

**Calls Express Route**: DELETE /api/products/:id
**FILE**: [src/backend/routes/products.js](src/backend/routes/products.js) Lines 91-104
```javascript
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```
- Say: "deleteProduct sends a DELETE request with the product ID in the URL. Express deletes the product from MongoDB and returns a success message."

---

### Service 2: OrderService

**FILE LOCATION**: [src/frontend/app/services/order.service.ts](src/frontend/app/services/order.service.ts)

#### What to Say:
"OrderService manages order creation and retrieval. It also handles the checkout process from the shopping cart."

#### Key Interfaces (Lines 5-30):
```typescript
export interface OrderProduct {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  _id?: string;
  customerName: string;
  customerEmail: string;
  products: OrderProduct[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate?: Date;
}
```
- Say: "We define TypeScript interfaces to ensure type safety when working with orders."

#### Service Methods and Their Express Routes:

**METHOD 1: getOrders() (Lines 40-42)**
```typescript
getOrders(): Observable<Order[]> {
  return this.http.get<Order[]>(this.apiUrl);
}
```

**Calls Express Route**: GET /api/orders
**FILE**: [src/backend/routes/orders.js](src/backend/routes/orders.js) Lines 7-14
```javascript
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('products.productId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```
- Say: "getOrders retrieves all orders. The Express route uses .populate() to replace product IDs with actual product data from MongoDB."

---

**METHOD 2: createOrder(order) (Lines 48-50)**
```typescript
createOrder(order: Omit<Order, '_id' | 'orderDate'>): Observable<Order> {
  return this.http.post<Order>(this.apiUrl, order);
}
```

**Calls Express Route**: POST /api/orders
**FILE**: [src/backend/routes/orders.js](src/backend/routes/orders.js) Lines 29-45
```javascript
router.post('/', async (req, res) => {
  const order = new Order({
    customerName: req.body.customerName,
    customerEmail: req.body.customerEmail,
    products: req.body.products,
    totalAmount: req.body.totalAmount,
    status: req.body.status
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
```
- Say: "createOrder posts order data to create a new order in MongoDB."

---

**METHOD 3: checkoutCart() - MOST IMPORTANT (Lines 52-59)**
```typescript
checkoutCart(customerName: string, customerEmail: string, cartItems: any[]): Observable<any> {
  const payload: CartCheckoutRequest = {
    customerName,
    customerEmail,
    cartItems
  };
  return this.http.post<any>(`${this.apiUrl}/checkout`, payload);
}
```

**Calls Express Route**: POST /api/orders/checkout
**FILE**: [src/backend/routes/orders.js](src/backend/routes/orders.js) Lines 47-92
```javascript
router.post('/checkout', async (req, res) => {
  try {
    const { customerName, customerEmail, cartItems } = req.body;

    // Validate required fields
    if (!customerName || !customerEmail || !Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({
        message: 'Missing required fields'
      });
    }

    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);

    // Create order with cart items
    const order = new Order({
      customerName,
      customerEmail,
      products: cartItems.map(item => ({
        productId: item._id,
        quantity: item.quantity,
        price: item.price
      })),
      totalAmount,
      status: 'pending'
    });

    const newOrder = await order.save();
    const populatedOrder = await newOrder.populate('products.productId');

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      order: populatedOrder
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});
```
- Say: "This is the checkout flow. The service sends customer info and cart items to /checkout. Express validates the data, calculates the total, transforms cart items into order products, creates the order, and returns the populated order with full product details."
- Highlight:
  - Parameter destructuring (line 50)
  - Validation (lines 52-57)
  - Total calculation with reduce (lines 60-62)
  - Cart items transformation (lines 68-72)
  - Population of product data (line 78)

---

### Service 3: CartService (Local Storage Service)

**FILE LOCATION**: [src/frontend/app/services/cart.service.ts](src/frontend/app/services/cart.service.ts)

#### What to Say:
"CartService is unique because it doesn't call the backend directly. Instead, it manages cart state locally using browser localStorage and RxJS observables for real-time updates."

#### Key Properties (Lines 8-11):
```typescript
private cart: any[] = [];
private readonly STORAGE_KEY = 'smartstock_cart';
private cartSubject = new BehaviorSubject<any[]>([]);
public cart$ = this.cartSubject.asObservable();
```
- Say: "cart$ is a public observable that components can subscribe to. Whenever the cart changes, all subscribed components automatically update."

#### Key Methods:

**1. Constructor - localStorage Initialization (Lines 13-19)**
```typescript
constructor() {
  this.loadCartFromStorage();
  this.cartSubject.next(this.cart);
}
```
- Say: "When the service initializes, it loads the cart from localStorage and emits the initial value to subscribers."

**2. loadCartFromStorage() (Lines 21-30)**
```typescript
private loadCartFromStorage() {
  try {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    this.cart = stored ? JSON.parse(stored) : [];
  } catch (error) {
    this.cart = [];
  }
}
```
- Say: "This retrieves cart data from localStorage, which persists even if the user refreshes the page."

**3. saveCartToStorage() (Lines 32-40)**
```typescript
private saveCartToStorage() {
  try {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cart));
    this.cartSubject.next([...this.cart]);
  } catch (error) {
    console.error('Error saving cart to storage:', error);
  }
}
```
- Say: "After any cart modification, we save to localStorage and emit the updated cart through the observable."

**4. addToCart() (Lines 46-54)**
```typescript
addToCart(product: any) {
  const existing = this.cart.find(p => p._id === product._id);
  if (!existing) {
    this.cart.push({ ...product });
    this.saveCartToStorage();
  }
}
```
- Say: "addToCart checks for duplicates before adding. It uses the spread operator to avoid reference issues."

**NOTE**: CartService does not call Express routes directly. It's a client-side state management service.

---

## Presentation Flow Recommendations

### Step 1: Introduction (1 minute)
"I'm going to show you three Angular components that work together to create a shopping experience: browsing products, managing a cart, and viewing inventory analytics."

### Step 2: Component 1 - CustomerShopComponent (5 minutes)
1. Open [customer-shop.component.ts](src/frontend/app/pages/customer-shop/customer-shop.component.ts)
2. Explain properties (products, cart)
3. Walk through ngOnInit → loadProducts → HTTP call
4. Show addToCart method
5. Switch to [customer-shop.component.html](src/frontend/app/pages/customer-shop/customer-shop.component.html)
6. Point out data bindings: *ngFor, {{ }}, (click), [disabled]

### Step 3: Component 2 - CartComponent (5 minutes)
1. Open [cart.component.ts](src/frontend/app/pages/cart/cart.component.ts)
2. Explain the observable subscription in ngOnInit
3. Show calculateTotals with reduce
4. Walk through the checkout() method step by step
5. Switch to [cart.component.html](src/frontend/app/pages/cart/cart.component.html)
6. Point out: *ngIf conditions, #templateRefs, @ViewChild, [(ngModel)]

### Step 4: Component 3 - DashboardComponent (5 minutes)
1. Open [dashboard.component.ts](src/frontend/app/pages/dashboard/dashboard.component.ts)
2. Show the stats properties
3. Explain loadProducts and data transformation
4. Show calculateStats with reduce and filter
5. Briefly show a chart rendering method (renderCategoryChart)
6. Show saveItem calling ProductService
7. Switch to [dashboard.component.html](src/frontend/app/pages/dashboard/dashboard.component.html)
8. Point out: stat cards with {{ }}, canvas elements, *ngFor on table, *ngIf for editing mode, [(ngModel)]

### Step 5: Services & Routes (8 minutes)

**ProductService:**
1. Open [product.service.ts](src/frontend/app/services/product.service.ts)
2. Explain @Injectable and HttpClient injection
3. For each method (getProducts, getProduct, createProduct, updateProduct, deleteProduct):
   - Show the TypeScript method
   - Show the corresponding Express route in [products.js](src/backend/routes/products.js)
   - Explain the HTTP verb, URL, parameters, and what MongoDB operation it performs

**OrderService:**
1. Open [order.service.ts](src/frontend/app/services/order.service.ts)
2. Show the interfaces (Order, OrderProduct)
3. For each method (getOrders, createOrder, checkoutCart):
   - Show the TypeScript method
   - Show the corresponding Express route in [orders.js](src/backend/routes/orders.js)
4. **Deep dive on checkoutCart:**
   - Show how CartComponent calls it
   - Show how Express validates, calculates total, transforms data, and populates product info

**CartService:**
1. Open [cart.service.ts](src/frontend/app/services/cart.service.ts)
2. Explain it's different - uses localStorage instead of HTTP
3. Show BehaviorSubject and observable pattern
4. Explain why: "Cart is temporary local state until checkout."

### Step 6: Data Flow Summary (2 minutes)
"Let me summarize the full flow:
1. CustomerShopComponent loads products via ProductService → GET /api/products
2. User adds to cart → CartService stores in localStorage
3. CartComponent subscribes to cart changes via observable
4. User checks out → OrderService.checkoutCart → POST /api/orders/checkout
5. Express validates, calculates, creates order in MongoDB
6. DashboardComponent loads inventory → ProductService.getProducts
7. Manager edits → ProductService.updateProduct → PUT /api/products/:id
8. Charts update with new data"

---

## Quick Reference: File Locations

**Components:**
- CustomerShop: [src/frontend/app/pages/customer-shop/](src/frontend/app/pages/customer-shop/)
- Cart: [src/frontend/app/pages/cart/](src/frontend/app/pages/cart/)
- Dashboard: [src/frontend/app/pages/dashboard/](src/frontend/app/pages/dashboard/)

**Services:**
- ProductService: [src/frontend/app/services/product.service.ts](src/frontend/app/services/product.service.ts)
- OrderService: [src/frontend/app/services/order.service.ts](src/frontend/app/services/order.service.ts)
- CartService: [src/frontend/app/services/cart.service.ts](src/frontend/app/services/cart.service.ts)

**Express Routes:**
- Products: [src/backend/routes/products.js](src/backend/routes/products.js)
- Orders: [src/backend/routes/orders.js](src/backend/routes/orders.js)

---

## Key Concepts to Emphasize

1. **Component Lifecycle**: ngOnInit, ngOnDestroy
2. **Data Binding**: String interpolation {{ }}, Property binding [ ], Event binding ( ), Two-way [(ngModel)]
3. **Structural Directives**: *ngIf, *ngFor
4. **Services**: Dependency injection, @Injectable, singleton pattern
5. **HTTP Communication**: HttpClient, Observables, .subscribe()
6. **Reactive Programming**: BehaviorSubject, Observable, real-time updates
7. **REST API**: GET, POST, PUT, DELETE mapped to CRUD operations
8. **Express Middleware**: Route parameters (req.params), body parsing (req.body)
9. **MongoDB Integration**: Mongoose models, .find(), .findById(), .save(), .populate()
10. **TypeScript**: Interfaces, type safety, generics (Observable<T>)

---

## Tips for a Great Presentation

1. **Run the app live** - Show the actual functionality working
2. **Use VS Code split view** - Show .ts and .html side by side
3. **Trace a complete flow** - Pick one feature and follow it from UI → Component → Service → Express → MongoDB and back
4. **Highlight line numbers** - Reference specific lines when explaining code
5. **Explain "why"** - Not just "what" the code does, but why you chose that approach
6. **Show the network tab** - Open browser DevTools and show the actual HTTP requests
7. **Be ready for questions** - Common ones:
   - "Why use services instead of direct HTTP in components?" (Separation of concerns, reusability)
   - "What's the difference between BehaviorSubject and Observable?" (BehaviorSubject has initial value and stores last emitted value)
   - "Why localStorage for cart instead of backend?" (Temporary data, no login required, faster UX)
   - "What does populate() do?" (Replaces ObjectId references with actual documents)

Good luck with your presentation!

